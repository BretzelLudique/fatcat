import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
	MapHomeScreen: undefined, // undefined because you aren't passing any params to the home screen
	MetroStop: { stopName: string }; 
};

export type MetroStopScreenRouteProp = RouteProp<RootStackParamList, 'MetroStop'>;

export type MetroStopScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'MetroStop'
>;

export type Props = {
    route: MetroStopScreenRouteProp;
    navigation: MetroStopScreenNavigationProp;
};
