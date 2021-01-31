import React from 'react';
import { Image } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { Navigation, Stop } from '../../types';

export const StopMarkers = (navigation: Navigation): [Array<JSX.Element>, any] => {

    const markerLocsArray: Array<Stop> = require("../../../assets/map/marker_locs.json");
    const arrLength = markerLocsArray.length;

    const refArray = React.useRef(new Array);
    const [markerRefs, setMarkerRefs] = React.useState([]);

    const addToRefs = (el: any) => {
        console.log(el);
    }

    function createMarker(stop: Stop, index: number): JSX.Element {
        return (
            <Marker
                ref={(marker:any) => refArray.current.push(marker)}
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
                    source={require("../../../assets/img/onlyCircleMetroIcon.png")} />

                {/* <Callout
                    onPress={() =>
                        navigation.navigate('MetroStop', { stopName: stop.name })
                    }
                /> */}

            </Marker>
        )
    }
    return [markerLocsArray.map(createMarker), refArray];
}
