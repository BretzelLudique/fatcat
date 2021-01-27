import React from 'react';
import {Image} from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { MetroStopScreenNavigationProp, Stop } from '../../types';

export const StopMarkers = (navigation: MetroStopScreenNavigationProp): Array<JSX.Element> => {

    const markerLocsArray:Array<Stop> = require("../../../assets/marker_locs.json");

    const stopMarkersArray = markerLocsArray.map((stop: Stop) => {
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
                    navigation.navigate('MetroStop', stop)}

            >

                <Image style={{ width: 20, height: 20 }}
                    source={require("../../../assets/img/onlyCircleMetroIcon.png")}/>

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
