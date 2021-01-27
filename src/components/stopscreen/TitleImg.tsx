import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native';
import { WithChildren } from '../../types';


export const TitleImg = ({ children }: WithChildren): JSX.Element => {
    return (
        <ImageBackground
            source={require("../../../assets/img/metroSign.jpeg")}
            style={styles.imgTitle}
        >
            <View
                style={styles.carreJauni}
            >
                {children}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imgTitle: {
        //flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: "center",
        //width: "100%",
        //width: undefined,
        height: 150,

    },
    carreJauni: {
        width: 302,
        backgroundColor: "#fef6c7",
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 26,

    },
});
