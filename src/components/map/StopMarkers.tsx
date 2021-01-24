import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { MetroStopScreenNavigationProp, Stop } from '../../types';
import Metro from '../../../assets/img/metro.svg';

export const StopMarkers = (navigation: MetroStopScreenNavigationProp): JSX.Element[] => {

    const markerLocs = require("../../../assets/marker_locs.json");

    const stopMarkersArray = markerLocs.stops.map((stop: Stop) => {
        return (
            <Marker
                key={stop.name}
                title={stop.name}
                description={"Découvrir son histoire"}
                coordinate={stop.coordinate}

                anchor={{ 'x': 0.5, 'y': 0.5 }}
                calloutAnchor={{ 'x': 0.5, 'y': 0 }} //in same coord system as anchor
                tracksViewChanges={false}
                stopPropagation={true}

                onCalloutPress={() =>
                    navigation.navigate('MetroStop', { stopName: stop.name })}

            >
                <Metro
                    width={20}
                    height={20}
                />
                {/* <Image style={{ width: 20, height: 20 }}
                    source={require("../assets/img/metro.png")}/> */}

                {/* <Callout
                    onPress={() =>
                        navigation.navigate('MetroStop', { stopName: stop.name })
                    }
                /> */}
            </Marker>
        )
    })
    return (stopMarkersArray);
}
