import React from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from './types';

type MetroStopScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MapHomeScreen'
>;

type Props = {
    navigation: MetroStopScreenNavigationProp;
};

export const MapHomeScreen = ({ navigation }: Props) => {
    return (
        <View>
            <Image
                style={{resizeMode: 'cover'}}
                source={require('../ratp_plan_metro.png')}
            />
        </View>
    );
}
