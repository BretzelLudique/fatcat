import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Alert,
} from 'react-native';
import { RouteNav, Stop } from '../types';

import { ParisMapView } from '../components/map/ParisMapView';
import { StopMarkers } from '../components/map/FancyStopMarkers';
import { LinePolylines } from '../components/map/LinePolylines'

import { StopSearch } from '../components/map/StopSearch'

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {

    //const markerLocsArray: Array<Stop> = require("../../../assets/map/marker_locs.json");

    const StopMarkersArray = StopMarkers(navigation);
    //console.log(StopMarkersArray[1].current);

    //markerLocsArray.map(oneStopMarker)
    return (
        <View style={styles.container}>
            <ParisMapView>
                {StopMarkersArray[0]}
                {LinePolylines()}
            </ParisMapView>
            <StopSearch />
            <Button onPress={() =>

            Alert.alert(StopMarkersArray[1].current.length)}
            title = ''/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});