import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Stop } from '../types';
import { Button, Modal, Portal, Searchbar } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import { LinesIcons } from '../components/stopscreen/LinesIcons';

interface SearchModalProps {
    stops: Stop[];
    mapRef: React.RefObject<MapView>;
    markerRefs: React.MutableRefObject<Marker[]>;
    latlngDelta: { latitudeDelta: number; longitudeDelta: number };
}

export const SearchModal = ({
    stops,
    mapRef,
    markerRefs,
    latlngDelta,
}: SearchModalProps): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStops, setFilteredStops] = useState<Stop[]>(stops);
    const [visibleSearchModal, setVisibleSearchModal] = useState(false);

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
                onPress={(e) => {
                    setVisibleSearchModal(false);
                    mapRef.current?.animateToRegion({
                        ...item.coordinate,
                        ...latlngDelta,
                    });
                    markerRefs.current[item.id].showCallout();
                }}>
                {item.name.toUpperCase()}
                {/* {' | ligne(s) : '}
                {item.line} */}
                {LinesIcons(item.line)}
                
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
        <React.Fragment>
            <Portal>
                <Modal
                    visible={visibleSearchModal}
                    onDismiss={() => setVisibleSearchModal(false)}
                    contentContainerStyle={[
                        styles.searchContainer,
                        { height: 210 },
                    ]}>
                    <FlatList
                        data={filteredStops}
                        keyExtractor={(item: Stop) => item.id.toString()}
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
                onPress={() => setVisibleSearchModal(true)}>
                Recherche
            </Button>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
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
