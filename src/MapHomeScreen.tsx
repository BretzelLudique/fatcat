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
import { Props } from './types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


export const MapHomeScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 48.856614,
                    longitude: 2.3322219,
                    latitudeDelta: 0.2,
                    longitudeDelta: 0.2,
                }}
            >
            </MapView>
            <Button
                title="(temporary button) MetroStop"
                onPress={() =>
                    navigation.navigate('MetroStop', { stopName: "yo" })
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
});