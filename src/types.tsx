import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
	MapHomeScreen: undefined, // undefined because you aren't passing any params to the home screen
	MetroStop: { stopName: string }; 
};

export type MetroStopScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MapHomeScreen'
>;

export type Props = {
    navigation: MetroStopScreenNavigationProp;
};