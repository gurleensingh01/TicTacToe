import React from "react";

import { View, Text } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Game(): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <Text style={CommonStyle.text}>Game Screen</Text>
        </View>
    );
}

export default Game;