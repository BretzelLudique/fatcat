import React from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { Props, Stop, Poly } from './types';

import MapView from "react-native-map-clustering";
import { Marker, Callout, Polyline, Region } from 'react-native-maps';

import Metro from '../assets/img/metro.svg';

export const MapHomeScreen = ({ navigation }: Props) => {
    const initialRegion: Region = {
        latitude: 48.856614,
        longitude: 2.3322219,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
    }

    const markerLocs = require("../assets/marker_locs.json");
    const stopMarkersArray = markerLocs.stops.map((stop: Stop) => {
        return (
            <Marker
                key={stop.name}
                title={stop.name}
                coordinate={stop.coordinate}
                description={"Découvrir son histoire"}

            >
                <Callout
                    onPress={() =>
                        navigation.navigate('MetroStop', { stopName: stop.name })
                    }
                />
                <Metro width={120} height={40} />
            </Marker>
        )
    })

    const polylineLocs = require("../assets/polyline_locs.json");
    const linesArray = polylineLocs.polylines.map((polyline: Poly) => {
        return (
            <Polyline
                key={polyline.ratpid}
                coordinates={polyline.coordinates}
                strokeColor={polyline.color}
                strokeWidth={4}
            />
        )
    })

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {stopMarkersArray}
                {linesArray}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
        //...StyleSheet.absoluteFillObject,
    },
});