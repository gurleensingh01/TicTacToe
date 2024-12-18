import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
} from "react-native";
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
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.playerContainer}>
                    {/* Title Section */}
                    <Text style={styles.text}>Enter Player names</Text>

                    {/* Player 1 Input */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>X</Text>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor="#A8BFC9"
                            value={player1Name}
                            onChangeText={setPlayer1Name}
                        />
                    </View>

                    {/* Player 2 Input */}
                    <View style={styles.inputRow}>
                        <Text style={styles.label}>O</Text>
                        <TextInput
                            style={styles.input}
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
                        onChangeText={(text) => {
                            const numericValue = text.replace(/[^0-9]/g, '');
                            setNumRounds(numericValue);
                        }}
                        keyboardType="numeric"
                    />
                </View>

                {/* Confirm Button */}
                <TouchableOpacity style={CommonStyle.button} onPress={handleConfirm}>
                    <Text style={CommonStyle.buttonText}>Play!</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A2A33',
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        gap: 50,
        alignItems: 'center',
        paddingVertical: 20,
    },
    input: {
        backgroundColor: "#A8BFC9",
        color: "#1F3641",
        width: 200,
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
        margin: 10,
    },
    label: {
        fontSize: 18,
        color: "#A8BFC9",
        fontWeight: "bold",
        backgroundColor: "#1A2A33",
        padding: 13,
        paddingHorizontal: 20,
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
    playerContainer: {
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
