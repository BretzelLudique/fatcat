import React from 'react';
import { Image } from 'react-native';
import { Navigation, Stop } from '../../types';
import { Marker } from 'react-native-maps';

interface StopMarkersProps {
    stops: Stop[];
    MarkerRefs: React.MutableRefObject<Marker[]>;
    navigation: Navigation;
}

/**
 * Creates markers used in the gmaps MapsHomeScreen component
 * @returns {JSX.Element} Returns a React.Fragment that contains an array of JSX.Element.
 */
const StopMarkers = ({
    stops,
    MarkerRefs,
    navigation,
}: StopMarkersProps): JSX.Element => {
    return (
        <React.Fragment>
            {stops.map((stop, index) => (
                <Marker
                    ref={(marker: Marker) =>
                        (MarkerRefs.current[index] = marker)
                    }
                    key={index}
                    title={stop.name}
                    description={'Découvrir son histoire'}
                    coordinate={stop.coordinate}
                    anchor={{ x: 0.5, y: 0.5 }}
                    calloutAnchor={{ x: 0.5, y: 0 }} //in same coord system as anchor
                    tracksViewChanges={false}
                    stopPropagation={true}
                    onCalloutPress={() =>
                        navigation.navigate('MetroStop', stop)
                    }
                >
                    <Image
                        style={{ width: 20, height: 20 }}
                        source={require('../../../assets/img/onlyCircleMetroIcon.png')}
                    />
                </Marker>
            ))}
        </React.Fragment>
    );
};

export default StopMarkers;
