import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import MapView from "react-native-map-clustering";
import { Region } from 'react-native-maps';

import { WithChildren } from '../../types'

export const ParisMapView = ({ children }: WithChildren): JSX.Element => {

    const ParisRegion: Region = {
        latitude: 48.856614,
        longitude: 2.3322219,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={ParisRegion}
            loadingEnabled={true}
            tracksViewChanges={false}

            showsCompass={false}
            showsScale={false}
            showsBuildings={false}
            showsTraffic={false}
            showsIndoors={false}

            //minPoints={2}
            //radius={Dimensions.get("window").width * 0.06}
            clusterColor="#0A0082"
        >
            {children}
        </MapView>

    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
});
