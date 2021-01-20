import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
    Button,
} from 'react-native';
import { Props } from './types';

import MapView from "react-native-map-clustering";
import { Marker, Callout } from 'react-native-maps';


export const MapHomeScreen = ({ navigation }: Props) => {

    const initialRegion = {
        latitude: 48.856614,
        longitude: 2.3322219,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
    }

    const jsondata = require("../assets/marker_locs.json");
    const stopMarkersArray = jsondata.stops.map((stop: any) => {
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
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={initialRegion}
            >
                {stopMarkersArray}
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