import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LatLng } from 'react-native-maps';

export type RootStackParamList = {
    MapHomeScreen: undefined,
    MetroStop: { stopName: string };
};

export type MetroStopScreenRouteProp = RouteProp<RootStackParamList, 'MetroStop'>;

export type MetroStopScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MetroStop'
>;

export type NavProps = {
    route: MetroStopScreenRouteProp;
    navigation: MetroStopScreenNavigationProp;
};

export type Stop = {
    name: string,
    coordinate: LatLng,
    line: Array<string>
}

export type Poly = {
    ratpid: number,
    coordinates: Array<LatLng>,
    line: string,
    color: string
}

export type WithChildren<T = {}> =
    T & { children?: React.ReactNode };
