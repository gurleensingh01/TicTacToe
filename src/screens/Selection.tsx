import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import { NavigationProp } from '@react-navigation/native';

function Selection({ navigation }: { navigation: NavigationProp<any> }): React.JSX.Element {
    const [player1Name, setPlayer1Name] = useState<string>("");
    const [player2Name, setPlayer2Name] = useState<string>("");
    const [numRounds, setNumRounds] = useState<string>("");

    const handleConfirm = () => {
        if (player1Name && player2Name && numRounds) {
            navigation.navigate("Game", { player1Name, player2Name, numRounds: parseInt(numRounds) });
        } else {
            Alert.alert("Please fill in all fields.");
        }
    };

    return (
        <View style={CommonStyle.container}>
            <View style={styles.container}>
                {/* Title Section */}
                <Text style={styles.text}>Enter Player names</Text>

                {/* Player 1 Input */}
                <View style={styles.inputRow}>
                    <Text style={styles.label}>P1</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Player 1 Name"
                        placeholderTextColor="#A8BFC9"
                        value={player1Name}
                        onChangeText={setPlayer1Name}
                    />
                </View>

                {/* Player 2 Input */}
                <View style={styles.inputRow}>
                    <Text style={styles.label}>P2</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Player 2 Name"
                        placeholderTextColor="#A8BFC9"
                        value={player2Name}
                        onChangeText={setPlayer2Name}
                    />
                </View>
            </View>

            {/* Number of Rounds */}
            <View style={styles.roundsContainer}>
                <Text style={styles.roundsText}>Rounds:</Text>
                <TextInput
                    style={styles.roundsInput}
                    placeholder="0"
                    placeholderTextColor="#A8BFC9"
                    value={numRounds}
                    onChangeText={setNumRounds}
                    keyboardType="numeric"
                />
            </View>

            {/* Confirm Button */}
            <TouchableOpacity style={CommonStyle.button} onPress={handleConfirm}>
                <Text style={CommonStyle.buttonText}>Play!</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#A8BFC9",
        color: "#1F3641",
        width: 250,
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 10, 
        borderBottomRightRadius: 10, 
        marginLeft: 0,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
    },
    label: {
        fontSize: 18,
        color: "#A8BFC9",
        fontWeight: "bold",
        backgroundColor: "#1A2A33",
        padding: 13,
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    
    text: {
        fontSize: 20,
        color: "#A8BFC9",
        fontWeight: "bold",
        marginBottom: 20,
    },
    container: {
        alignItems: "center",
        backgroundColor: "#1F3641",
        padding: 20,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    roundsContainer: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    roundsText: {
        fontSize: 24,
        color: "#1A2A33",
        fontWeight: "bold",
        backgroundColor: "#A8BFC9",
        padding: 15,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0, 
    },
    roundsInput: {
        backgroundColor: "#1A2A33",
        color: "#A8BFC9",
        padding: 16,
        paddingHorizontal: 24,
        fontWeight: "bold",
        borderTopLeftRadius: 0, 
        borderTopRightRadius: 0, 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20, 
        fontSize: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Selection;
