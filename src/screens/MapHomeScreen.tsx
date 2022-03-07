import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteNav } from '../types';
import { MetroLines } from '../components/map/MetroLines';
import MapView, { Marker, Region } from 'react-native-maps';
import stops from '../../assets/map/marker_locs_v2.json';
import retroStyle from '../../assets/map/retroMapStyle.json';
import StopMarkers from '../components/map/StopMarkers';
import { SearchModal } from '../components/SearchModal';

export const MapHomeScreen = ({ navigation }: RouteNav): JSX.Element => {
    const markerRefs = useRef<Marker[]>(new Array(stops.length));
    const mapRef = useRef<MapView>(null);

    // not elegant, need changes
    const latlngDelta = { latitudeDelta: 0.13, longitudeDelta: 0.13 };
    const latlngDeltaZoomed = { latitudeDelta: 0.015, longitudeDelta: 0.015 };

    // map personnalization
    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.342,
        ...latlngDelta,
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={ParisRegion}
                loadingEnabled={true}
                customMapStyle={retroStyle}>
                <StopMarkers
                    stops={stops}
                    markerRefs={markerRefs}
                    navigation={navigation}
                />
                <MetroLines />
            </MapView>
            <SearchModal
                stops={stops}
                mapRef={mapRef}
                markerRefs={markerRefs}
                latlngDelta={latlngDeltaZoomed}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
