import React, { useRef, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Alert,
    FlatList,
} from 'react-native';
import { RouteNav, Stop } from '../types';
import { MetroLines } from '../components/map/MetroLines';
import { Button, Modal, Portal, Searchbar, List } from 'react-native-paper';
import MapView, { Marker, Region, MapStyleElement } from 'react-native-maps';
import stops from '../../assets/map/marker_locs.json';
import retroStyle from '../../assets/map/retroMapStyle.json';
import StopMarkers from '../components/map/StopMarkers';

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {
    const markerRefs = useRef<Marker[]>(new Array(stops.length));
    const mapRef = useRef<MapView>(null);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStops, setFilteredStops] = useState<Stop[]>(stops);
    const [showSearchModal, setShowSearchModal] = useState(false);

    // map personnalization
    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.342,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13,
    };

    useEffect(() => {
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

    const ItemView = ({ item }: { item: Stop }): JSX.Element => {
        return (
            // Flat List Item
            <Text
                //style={styles.itemStyle}
                onPress={() => markerRefs.current[item.id].showCallout()}>
                {item.name.toUpperCase()}
                {' | ligne(s) : '}
                {item.line}
            </Text>
        );
    };

    const ItemSeparatorView = (): JSX.Element => {
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
                customMapStyle={retroStyle}>
                <StopMarkers
                    stops={stops}
                    MarkerRefs={markerRefs}
                    navigation={navigation}
                />
                <MetroLines />
            </MapView>
            <Portal>
                <Modal
                    visible={showSearchModal}
                    onDismiss={() => setShowSearchModal(false)}
                    contentContainerStyle={[
                        styles.searchContainer,
                        { height: 210 },
                    ]}>
                    <FlatList
                        data={filteredStops}
                        keyExtractor={(item, index) => index.toString()} // filteredStops is immutable (useState), so indexes are also immutable
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
                onPress={() => setShowSearchModal(true)}>
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
