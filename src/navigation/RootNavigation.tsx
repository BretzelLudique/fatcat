import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

import { MapHomeScreen } from '../screens/MapHomeScreen';
import { MetroStop } from '../screens/MetroStopScreen';

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';

import merge from 'deepmerge';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    return (
        <PaperProvider
            theme={CombinedDefaultTheme}>

            <NavigationContainer
                theme={CombinedDefaultTheme}>

                <RootStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>

                    <RootStack.Screen
                        name="MapHomeScreen"
                        component={MapHomeScreen}
                        options={{ headerShown: false }}

                    //options={{ title: 'Welcome' }}
                    />
                    <RootStack.Screen
                        name='MetroStop'
                        component={MetroStop}
                        options={({route})=>({title:route.params.name})}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default RootNavigation;