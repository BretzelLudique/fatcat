import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { RouteNav, Stop } from '../types';

import { ParisMapView } from '../components/map/ParisMapView';
import { StopMarkers } from '../components/map/StopMarkers';
import { LinePolylines } from '../components/map/LinePolylines'

import { StopSearch } from '../components/map/StopSearch'

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {

    //const markerLocsArray: Array<Stop> = require("../../../assets/map/marker_locs.json");
    
    const myref = React.useRef(null);
    //markerLocsArray.map(oneStopMarker)
    return (
        <View style={styles.container}>
            <ParisMapView>
                {StopMarkers(navigation)}
                {LinePolylines()}
            </ParisMapView>
            <StopSearch/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});