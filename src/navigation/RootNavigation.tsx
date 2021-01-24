import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { MapHomeScreen } from '../screens/MapHomeScreen';
import { MetroStop } from '../screens/MetroStopScreen';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <RootStack.Screen
                    name="MapHomeScreen"
                    component={MapHomeScreen}
                //options={{ title: 'Welcome' }}
                />
                <RootStack.Screen
                    name='MetroStop'
                    component={MetroStop}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;