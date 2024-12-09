import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function GameOver({ navigation, route }): React.JSX.Element {
    const winner = route?.params?.winner || "Tie"; // Default to "Tie" if undefined

    return (
        <View style={CommonStyle.container}>
            {/* Title Section */}
            <Text style={[CommonStyle.text, CommonStyle.title]}>Game Over</Text>

            {/* Winner/Tie Message */}
            <View>
                <Text style={[CommonStyle.text, CommonStyle.resultText]}>
                    {winner === "Tie" ? "It's a Tie!" : `Player ${winner} Wins!`}
                </Text>
            </View>

            {/* Play Again Button */}
            <TouchableOpacity
                style={[CommonStyle.button, CommonStyle.playAgainButton]}
                onPress={() => navigation.navigate("Selection")}
            >
                <Text style={CommonStyle.buttonText}>Play Again</Text>
            </TouchableOpacity>

            {/* Main Menu Button */}
            <TouchableOpacity
                style={[CommonStyle.button, CommonStyle.mainMenuButton]}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={CommonStyle.buttonText}>Main Menu</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GameOver;
