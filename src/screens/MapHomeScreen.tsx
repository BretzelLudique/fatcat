import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    ScrollView,
    Text,
    Alert,
    FlatList,
} from 'react-native';
import { RouteNav, Stop } from '../types';
import { LinePolylines } from '../components/map/LinePolylines';
import { Button, Modal, Portal, Searchbar, List } from 'react-native-paper';
import MapView, { Marker, Region, MapStyleElement } from 'react-native-maps';
import stops from '../../assets/map/marker_locs.json';
import retroStyle from '../../assets/map/retroMapStyle.json';

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {
    const MarkerRefsArray = React.useRef(new Array(stops.length));
    const mapRef = React.useRef(null);

    const [searchQuery, setSearchQuery] = React.useState('');
    const [filteredStops, setFilteredStops] = React.useState(stops);
    const [showSearchModal, setShowSearchModal] = React.useState(false);

    // map personnalization
    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.342,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13,
    };

    const createMarker = (stop: Stop, index: number): JSX.Element => {
        return (
            <Marker
                ref={(marker: any) => (MarkerRefsArray.current[index] = marker)}
                key={index}
                title={stop.name}
                description={'Découvrir son histoire'}
                coordinate={stop.coordinate}
                anchor={{ x: 0.5, y: 0.5 }}
                calloutAnchor={{ x: 0.5, y: 0 }} //in same coord system as anchor
                tracksViewChanges={false}
                stopPropagation={true}
                onCalloutPress={() => navigation.navigate('MetroStop', stop)}
            >
                <Image
                    style={{ width: 20, height: 20 }}
                    source={require('../../assets/img/onlyCircleMetroIcon.png')}
                />
            </Marker>
        );
    };

    React.useEffect(() => {
        if (!!searchQuery) {
            const filtered = stops.filter(
                (stop: Stop) =>
                    stop.name.indexOf(searchQuery.toUpperCase()) > -1
            );
            setFilteredStops(filtered);
        } else {
            // reset shown stops when !query
            setFilteredStops(stops);
        }
    }, [searchQuery]);

    const ItemView = ({ item }: any) => {
        return (
            // Flat List Item
            <Text
                //style={styles.itemStyle}
                onPress={() => MarkerRefsArray.current[item.id].showCallout()}
            >
                {item.name.toUpperCase()}
                {' | ligne(s) : '}
                {item.line}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={ParisRegion}
                loadingEnabled={true}
                customMapStyle={retroStyle}
            >
                {stops.map(createMarker)}
                {LinePolylines()}
            </MapView>
            <Portal>
                <Modal
                    visible={showSearchModal}
                    onDismiss={() => setShowSearchModal(false)}
                    contentContainerStyle={[
                        styles.searchContainer,
                        { height: 210 },
                    ]}
                >
                    <FlatList
                        data={filteredStops}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={ItemView}
                    />
                    <Searchbar
                        style={styles.searchButton}
                        placeholder="Recherche par nom"
                        onChangeText={(query: string) => setSearchQuery(query)}
                        value={searchQuery}
                    />
                </Modal>
            </Portal>
            <Button
                style={styles.searchButton}
                onPress={() => setShowSearchModal(true)}
            >
                Recherche
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    // test: {
    //     height: 210
    // },
    searchContainer: {
        //alignSelf: 'baseline',
        //flex: 1,
        height: 210,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
    },
    searchResultsContainer: {
        //backgroundColor: 'white',
    },
    // stopSearchResult: {
    //     height: 40,
    // },
    searchButton: {
        //flex: 1,
        height: 40,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
    },
});
