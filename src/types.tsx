import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LatLng } from 'react-native-maps';

export type RootStackParamList = {
    MapHomeScreen: undefined;
    MetroStop: Stop;
};

export type Route = RouteProp<RootStackParamList, 'MetroStop'>;

export type Navigation = StackNavigationProp<RootStackParamList, 'MetroStop'>;

export type RouteNav = {
    route: Route;
    navigation: Navigation;
};

export type LinesArray = Array<string>;

export type Stop = {
    name: string;
    coordinate: LatLng;
    line: LinesArray;
    id: number;
    displayed_at_minzoom: Boolean;
    description:string;
    path_img_principale:string;
};

export type Poly = {
    ratpid: number;
    coordinates: Array<LatLng>;
    line: string;
    color: string;
};

export type WithChildren<T = {}> = T & { children?: React.ReactNode };
