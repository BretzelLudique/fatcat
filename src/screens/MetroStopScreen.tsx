import React from 'react';
import {StyleSheet, Text, ScrollView, Image} from 'react-native';
import {RouteNav} from '../types';
import {useTheme} from 'react-native-paper';
import {LinesIcons} from '../components/stopscreen/LinesIcons';

export const MetroStopScreen = ({route}: RouteNav): JSX.Element => {
    const {name, line} = route.params;
    const text: Record<
        string,
        string
    > = require('../../assets/txt/ligne1.json');
    const {colors} = useTheme();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            {LinesIcons(line)}
            <Text style={styles.body}>
                {'\n\n\n'}
                {'\n\n\n'}

                {text[name] == '' &&
                    name +
                        '  est en cours de pitoufaction... Revenez plus tard !'}
                {text[name] != '' && text[name]}
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'ParisRegular',
        textAlign: 'center',
        fontSize: 30,
        color: '#014946',
        marginTop: 24,
    },
    body: {
        textAlign: 'justify',
        marginHorizontal: 16,
    },
});
