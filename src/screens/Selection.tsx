import React from "react";

import { View, Text, Button } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Selection({navigation}): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <Text style={CommonStyle.text}>Selection Screen</Text>
            <Button
            title="Play !"
            onPress={() => navigation.navigate('Game')}
            />
        </View>
    );
}

export default Selection;