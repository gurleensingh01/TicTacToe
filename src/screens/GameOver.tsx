import React from "react";
import { View, Text, Button } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function GameOver(): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <Text style={CommonStyle.text}>Game Over</Text>
            <Button title="Try Again" onPress={() => {}} />
        </View>
    );
}

export default GameOver;