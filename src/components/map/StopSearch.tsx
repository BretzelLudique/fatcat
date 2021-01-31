import React from 'react';
import {
    StyleSheet,
    View,
    Alert
} from 'react-native';
import { Stop, Navigation } from '../../types';
import { Searchbar, List } from 'react-native-paper';

export const StopSearch = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const markerLocsArray: Array<Stop> = require("../../../assets/map/marker_locs.json");

    function MatchesStopQuery(stop: Stop): Boolean {
        let tmpRegex: string = '';
        for (let char of searchQuery.toUpperCase()) {
            tmpRegex += char;
        }
        if (searchQuery != '') {
            let regex = new RegExp(tmpRegex);
            return (regex.test(stop.name))
        }
        return (false);
    }

    const DisplayedStops = (stopsArray: Stop[]): Array<JSX.Element | void> => {

        function displayOneMatchedStop(stop: Stop, index: number): JSX.Element | void {
            if (MatchesStopQuery(stop)) {
                return (
                    <List.Item
                        key={index}
                        title={stop.name}
                        onPress={() => Alert.alert(stop.name + " index: " + String(index))}
                    //description= lignes
                    />
                );
            }
        }

        const DisplayedStops = stopsArray.map(displayOneMatchedStop);

        return (DisplayedStops);
    }

    return (
        <View>
            {DisplayedStops(markerLocsArray)}
            <Searchbar
                placeholder="Search"
                onChangeText={(q: string) => setSearchQuery(q)}
                value={searchQuery}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stopCandidate: {

    }
});