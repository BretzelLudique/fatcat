import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { Props } from './types';

import MapView from "react-native-map-clustering";
import { Marker, Callout, Polyline } from 'react-native-maps';


export const MapHomeScreen = ({ navigation }: Props) => {

    const initialRegion = {
        latitude: 48.856614,
        longitude: 2.3322219,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
    }

    const markerLocs = require("../assets/marker_locs.json");
    const stopMarkersArray = markerLocs.stops.map((stop: any) => {
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
            </Marker>
        )
    })

    const polylineLocs = require("../assets/polyline_locs.json");
    const linesArray = polylineLocs.polylines.map((polyline: any) => {
        return (
            <Polyline
                key={polyline.ratpid}
                coordinates={polyline.coordinates}
                strokeColor={polyline.color}
                strokeWidth={4}
            />
        )
    })

    /* linegeojson.features.map((LineString: any) => {
        console.log(LineString)
    }) */

    //console.log(lineLocs[0].fields.geo_shape)
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {stopMarkersArray}
                {linesArray}
            </MapView>
            <Button
                title="(temporary button) Alesia"
                onPress={() =>
                    navigation.navigate('MetroStop', { stopName: "alesia" })
                }
            />
            <Button
                title="(temporary button) Cluny - La Sorbonne"
                onPress={() =>
                    navigation.navigate('MetroStop', { stopName: "clunylasorbonne" })
                }
            />

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