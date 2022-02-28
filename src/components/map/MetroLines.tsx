import React from 'react';
import { Poly } from '../../types';
import { Polyline } from 'react-native-maps';

export const MetroLines = (): JSX.Element => {
    const polylineLocs: Array<Poly> = require('../../../assets/map/polyline_locs.json');

    const linePolylinesArray: JSX.Element[] = polylineLocs.map(
        (polyline: Poly) => {
            return (
                <Polyline
                    key={polyline.ratpid}
                    coordinates={polyline.coordinates}
                    strokeColor={polyline.color}
                    strokeWidth={3.5}
                    //geodesic={true}
                />
            );
        }
    );

    return <React.Fragment>{linePolylinesArray}</React.Fragment>;
};
