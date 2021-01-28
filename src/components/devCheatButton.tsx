import React from 'react';
import {
    Button,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { Stop, MetroStopScreenNavigationProp } from '../types';
import { LatLng } from 'react-native-maps';


export const devCheatButton = (navigation: MetroStopScreenNavigationProp, stop: Stop): JSX.Element => {
    return (
        <Button
            key={stop.name}
            title={"(temporary) " + stop.name}
            onPress={() =>
                navigation.navigate('MetroStop', stop)
            }
        />
    )
}

export const QuickCheat = (navigation: MetroStopScreenNavigationProp): JSX.Element[] => {
    const zero: LatLng = {
        latitude: 0,
        longitude: 0
    }
    const chatelet: Stop = {
        name: "CHATELET",
        line: ["1", "4", "7", "11", "14"],
        coordinate: zero
    }
    const bast: Stop = {
        name: "BASTILLE",
        line: ["1", "5", "8"],
        coordinate: zero
    }
    return (
        [devCheatButton(navigation, chatelet), devCheatButton(navigation, bast)]
    )
}
