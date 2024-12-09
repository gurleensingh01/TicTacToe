import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CommonStyle from "../styles/CommonStyle";

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type GameOverProps = {
    navigation: StackNavigationProp<any, any>;
    route: RouteProp<{ params: { winner: string } }, 'params'>;
};

function GameOver({ navigation, route }: GameOverProps): React.JSX.Element {
    const winner = route?.params?.winner || "Tie"; // Default to "Tie" if undefined

    return (
        <View style={CommonStyle.container}>
            {/* Title Section */}
            <Text style={[CommonStyle.text, CommonStyle.title]}>Game Over !</Text>

            <View style={styles.container}>
                {/* Winner/Tie Message */}
            <View>
                <Text style={[CommonStyle.text, CommonStyle.resultText]}>
                    {winner === "Tie" ? "It's a Tie!" : `Player ${winner} Wins!`}
                </Text>
            </View>

            {/* Play Again Button */}
            <TouchableOpacity
                style={[styles.button]}
                onPress={() => navigation.navigate("Selection")}
            >
                <Text style={styles.buttonText}>Play Again</Text>
            </TouchableOpacity>

            {/* Main Menu Button */}
            <TouchableOpacity
                style={[styles.button,]}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.buttonText}>Exit to main menu</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
    backgroundColor: "#31C3BD",
    padding: 10,
    width: 200,
    margin: 10,
    alignContent: "center",
    borderRadius: 10,
    },

    buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    },

    container: {
        backgroundColor: "#A8BFC9",
        width: 300,
        borderRadius: 20,
        padding: 20,
        paddingVertical: 40,
        alignItems: "center",
        marginTop: 50,
        marginBottom: 200,
    }});


export default GameOver;
