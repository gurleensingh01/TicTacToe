import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Home({ navigation }): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            {/* Title Section */}
            <View style={CommonStyle.titleContainer}>
                <Text style={[CommonStyle.text, CommonStyle.title]}>Tic Tac Toe</Text>
                <Text style={[CommonStyle.text, CommonStyle.subtitle]}>
                    Let the best player win!
                </Text>
            </View>

            {/* Start Button */}
            <TouchableOpacity
                style={CommonStyle.button}
                onPress={() => navigation.navigate("Selection")}
            >
                <Text style={CommonStyle.buttonText}>Start Game</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;
