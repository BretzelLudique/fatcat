import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { NavProps } from './types';

import { ParisMapView } from './components/map/ParisMapView';
import { StopMarkers } from './components/map/StopMarkers';
import { LinePolylines } from './components/map/LinePolylines'

export const MapHomeScreen = ({ navigation }: NavProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <ParisMapView>
                {StopMarkers(navigation)}
                {LinePolylines()}
            </ParisMapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});