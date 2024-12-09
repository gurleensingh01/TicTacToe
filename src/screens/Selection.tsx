import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Selection({ navigation }): React.JSX.Element {
    const [selectedSymbol, setSelectedSymbol] = useState<"X" | "O">("X");

    const handleConfirm = () => {
        navigation.navigate("Game", { playerSymbol: selectedSymbol });
    };

    const getButtonStyle = (isSelected: boolean, color: string) => ({
        borderColor: isSelected ? color : "#A8BFC9",
        borderWidth: isSelected ? 3 : 0,
        backgroundColor: isSelected ? "#A8BFC9" : "#1F3641",
    });

    return (
        <View style={CommonStyle.container}>
            {/* Title Section */}
            <Text style={[CommonStyle.text, CommonStyle.title]}>
                Choose Your Symbol
            </Text>

            {/* Toggle Buttons */}
            <View style={CommonStyle.toggleContainer}>
                <TouchableOpacity
                    style={[CommonStyle.toggleButton, getButtonStyle(selectedSymbol === "X", "#31C3BD")]}
                    onPress={() => setSelectedSymbol("X")}
                >
                    <Text
                        style={[
                            CommonStyle.buttonText,
                            selectedSymbol === "X" && CommonStyle.selectedText,
                        ]}
                    >
                        X
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[CommonStyle.toggleButton, getButtonStyle(selectedSymbol === "O", "#F2B137")]}
                    onPress={() => setSelectedSymbol("O")}
                >
                    <Text
                        style={[
                            CommonStyle.buttonText,
                            selectedSymbol === "O" && CommonStyle.selectedText,
                        ]}
                    >
                        O
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Confirm Button */}
            <TouchableOpacity
                style={CommonStyle.button}
                onPress={handleConfirm}
            >
                <Text style={CommonStyle.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Selection;
