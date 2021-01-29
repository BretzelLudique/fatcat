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

    const DisplayedStops = (MatchedStops: Stop[]): JSX.Element[] => {
        let displayCount = 0;
        const DisplayedStops: JSX.Element[] = [];

        for (let stop of MatchedStops) {
            DisplayedStops[displayCount] =
                <List.Item
                    key={displayCount}
                    title={stop.name}
                    onPress={() => Alert.alert(stop.name)}
                //description= lignes
                />
            if (displayCount++ == 10)
                break;
        }
        return DisplayedStops;
    }

    return (
        <View>
            {DisplayedStops(markerLocsArray.filter(MatchesStopQuery))}
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