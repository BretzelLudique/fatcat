import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { LinesArray } from '../../types';

const test: { [line: string]: number } = {
    '1': require('../../../assets/img/metroLine/M1genRVB.png'),
    '2': require('../../../assets/img/metroLine/M2genRVB.png'),
    '3': require('../../../assets/img/metroLine/M3genRVB.png'),
    '3bis': require('../../../assets/img/metroLine/M3bisgenRVB.png'),
    '4': require('../../../assets/img/metroLine/M4genRVB.png'),
    '5': require('../../../assets/img/metroLine/M5genRVB.png'),
    '6': require('../../../assets/img/metroLine/M6genRVB.png'),
    '7': require('../../../assets/img/metroLine/M7genRVB.png'),
    '7b': require('../../../assets/img/metroLine/M7bisgenRVB.png'),
    '8': require('../../../assets/img/metroLine/M8genRVB.png'),
    '9': require('../../../assets/img/metroLine/M9genRVB.png'),
    '10': require('../../../assets/img/metroLine/M10genRVB.png'),
    '11': require('../../../assets/img/metroLine/M11genRVB.png'),
    '12': require('../../../assets/img/metroLine/M12genRVB.png'),
    '13': require('../../../assets/img/metroLine/M13genRVB.png'),
    '14': require('../../../assets/img/metroLine/M14genRVB.png'),
};

export const LinesIcons = (line: LinesArray): JSX.Element => {
    const LinesIconsArray = line.map((lineNumber: string) => {
        return (
            <Image
                style={styles.icon}
                key={lineNumber}
                source={test[lineNumber]}
            />
        );
    });
    return <View style={styles.container}>{LinesIconsArray}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
    },
});
