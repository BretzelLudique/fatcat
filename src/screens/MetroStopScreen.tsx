import React from 'react';
import { StyleSheet, Text, ScrollView, Image , View} from 'react-native';
import { RouteNav } from '../types';
import { useTheme } from 'react-native-paper';
import { LinesIcons } from '../components/stopscreen/LinesIcons';

export const MetroStopScreen = ({ route }: RouteNav): JSX.Element => {
    const { name, line , description, path_img_principale} = route.params;

    const { colors } = useTheme();

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            {LinesIcons(line)}
           <View style={styles.centered}>
            <Image style={{
            height: 200,
            width: 300
          }}
          source={!!path_img_principale
            ? path_img_principale
            : require('fatcat/assets/img/bretzel.jpg')} /> 
            </View>
            <Text style={styles.body}>
                {'\n\n\n'}

                {description== '' 
                ? name +'  est en cours de pitoufaction... Revenez plus tard !'
                : description}
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'column',
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
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
