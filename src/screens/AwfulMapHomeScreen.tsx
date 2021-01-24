import { PinchGestureHandler, State } from 'react-native-gesture-handler';
import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Button,
} from 'react-native';

import { NavProps } from '../types';

const win = Dimensions.get('window');
const ratio = win.width / 2268;

export const MapHomeScreen = ({ navigation }: NavProps) => {

    return (
        <ScrollView
            horizontal
            bounces={false}
        >
            <ScrollView
                nestedScrollEnabled
                bounces={false}
                // You will need to figure out the height of inner content yourself
                contentContainerStyle={{ height: 2268 }}
            >
                <Button
                    title="MetroStop"
                    onPress={() =>
                        navigation.navigate('MetroStop', { stopName: "yo" })
                    }
                />
                <Image
                    style={styles.map2}
                    source={require('../../assets/img/ratp_plan_metro.jpg')}
                    resizeMethod="scale"
                />
            </ScrollView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        //height: Dimensions.get('window').height,
        //transform: [{ scale: scale }],
    },
    map2: {
        width: 1568,
        height: 68,
    },
});