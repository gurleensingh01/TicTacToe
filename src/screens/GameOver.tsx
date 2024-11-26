import React from "react";
import { View, Text, Button } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function GameOver({navigation}): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <Text style={CommonStyle.text}>Game Over</Text>
            <Button
            title="Play Again"
            onPress={() => navigation.navigate('Selection')}
            />
            <Button
            title="Exit to main menu"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default GameOver;