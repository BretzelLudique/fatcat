import React from 'react';
import { StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { RouteNav, Stop } from '../types';
import { LinePolylines } from '../components/map/LinePolylines'
import { Button, Modal, Portal, Searchbar, List } from 'react-native-paper';
import MapView, { Marker, Region, MapStyleElement } from 'react-native-maps';

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {
    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.342,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13,
    }
    const stopsArray: Array<Stop> = require("../../assets/map/marker_locs.json");
    const len: number = stopsArray.length;
    const RetroStyle: Array<MapStyleElement> = require("../../assets/map/retroMapStyle.json");
    const [searchQuery, setSearchQuery] = React.useState('');
    const MarkerRefsArray = React.useRef(new Array);
    const mapRef = React.useRef(null);

    function createMarker(stop: Stop, index: number): JSX.Element {
        return (
            <Marker
                ref={(marker: any) => MarkerRefsArray.current[index] = marker}
                key={index}

                title={stop.name}
                description={"Découvrir son histoire"}
                coordinate={stop.coordinate}

                anchor={{ 'x': 0.5, 'y': 0.5 }}
                calloutAnchor={{ 'x': 0.5, 'y': 0 }} //in same coord system as anchor
                tracksViewChanges={false}
                stopPropagation={true}

                onCalloutPress={() =>
                    navigation.navigate('MetroStop', stop)}
            >
                <Image style={{ width: 20, height: 20 }}
                    source={require("../../assets/img/onlyCircleMetroIcon.png")} />

            </Marker>
        )
    }

    const DisplaySearchResult = (): JSX.Element | null => {
        function displayOneMatchedStop(stop: Stop, index: number): JSX.Element {
            return (
                <List.Item
                    style={styles.stopSearchResult}
                    key={index}
                    title={stop.name}
                    onPress={() => {

                        MarkerRefsArray.current[index].showCallout();
                    }}
                    description={stop.line}
                />
            );
        }

        const searchResult = [];

        for (let index = 0; index < len; index++) {
            if (matchedStops[index]) {
                searchResult.push(displayOneMatchedStop(stopsArray[index], index))
            }
        }

        return (
            <ScrollView style={styles.searchResultsContainer}>
                {searchResult}
            </ScrollView>
        )
    }

    function matchesQuery(stop: Stop, query: string): Boolean {
        let tmpRegex: string = '';
        for (let char of query.toUpperCase()) {
            tmpRegex += char;
        }
        if (query.length > 1) {
            let regex = new RegExp(tmpRegex);
            return (regex.test(stop.name))
        }
        return (false);
    }

    const [matchedStops, setMatchedStops] = React.useState(new Array(len).fill(false));
    const [searching, setSearching] = React.useState(false);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={ParisRegion}
                loadingEnabled={true}
                customMapStyle={RetroStyle}
            >
                {stopsArray.map(createMarker)}
                {LinePolylines()}
            </MapView>
            <Portal>
                <Modal
                    visible={searching}
                    onDismiss={() => setSearching(false)}
                    contentContainerStyle={[styles.searchContainer, { height: 210 }]}
                >

                    <DisplaySearchResult />

                    <Searchbar
                        style={styles.searchButton}
                        placeholder="Recherche par nom"
                        onChangeText={(q: string) => {
                            setSearchQuery(q);
                            setMatchedStops(
                                matchedStops.map((matched: Boolean, index: number) =>
                                    matchesQuery(stopsArray[index], q)
                                ));
                        }}
                        value={searchQuery}
                    />

                </Modal>
            </Portal>
            <Button style={styles.searchButton} onPress={() => setSearching(true)}>
                Recherche
      </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    test: {
        height: 210
    },
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
    stopSearchResult: {
        height: 40
    },
    searchButton: {
        //flex: 1,
        height: 40,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
    },
});