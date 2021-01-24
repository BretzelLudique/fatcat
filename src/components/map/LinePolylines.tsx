import React from 'react';
import { Poly } from '../../types';
import { Polyline } from 'react-native-maps';

export const LinePolylines = (): JSX.Element[] => {

    const polylineLocs = require("../../../assets/polyline_locs.json");

    const linePolylinesArray = polylineLocs.polylines.map((polyline: Poly) => {
        return (
            <Polyline
                key={polyline.ratpid}
                coordinates={polyline.coordinates}
                strokeColor={polyline.color}
                strokeWidth={4}
                //geodesic={true}
            />
        )
    })
    return (linePolylinesArray);
}
