import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { NavProps } from '../../types';

import { ParisMapView } from '../map/ParisMapView';
import { StopMarkers } from '../map/StopMarkers';
import { LinePolylines } from '../map/LinePolylines'

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