import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { RouteNav, Stop } from '../types';
import { LinePolylines } from '../components/map/LinePolylines'
import { Searchbar, List } from 'react-native-paper';
import MapView, { Marker, Region, MapStyleElement } from 'react-native-maps';

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {
    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.342,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13,
    }
    const stopsArray: Array<Stop> = require("../../assets/map/marker_locs.json");
    const RetroStyle: Array<MapStyleElement> = require("../../assets/map/retroMapStyle.json");
    const [searchQuery, setSearchQuery] = React.useState('');
    const MarkerRefsArray = React.useRef(new Array);

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

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function MatchesStopQuery(stop: Stop): Boolean {
        let tmpRegex: string = '';
        for (let char of searchQuery.toUpperCase()) {
            tmpRegex += char;
        }
        if (searchQuery != '') {
            let regex = new RegExp(tmpRegex);
            return (regex.test(stop.name))
        }
        return (false);
    }

    const DisplayedStops = (stopsArray: Stop[]): Array<JSX.Element | void> => {
        function displayOneMatchedStop(stop: Stop, index: number): JSX.Element | void {
            if (MatchesStopQuery(stop)) {
                return (
                    <List.Item
                        key={index}
                        title={stop.name}
                        onPress={() => MarkerRefsArray.current[index].showCallout()}
                        description={stop.line}
                    />
                );
            }
        }
        return stopsArray.map(displayOneMatchedStop);
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={ParisRegion}
                loadingEnabled={true}
                customMapStyle={RetroStyle}
            >
                {stopsArray.map(createMarker)}
                {LinePolylines()}
            </MapView>
            <View>
                {DisplayedStops(stopsArray)}
                <Searchbar
                    placeholder="Recherche par nom"
                    onChangeText={(q: string) => setSearchQuery(q)}
                    value={searchQuery}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    }
});