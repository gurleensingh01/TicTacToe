import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CommonStyle from "../styles/CommonStyle";

import { NavigationProp } from '@react-navigation/native';

function Home({ navigation }: { navigation: NavigationProp<any> }): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            {/* Title Section */}
            <View style={CommonStyle.titleContainer}>
            <Text style={[CommonStyle.text, CommonStyle.subtitle, { fontStyle: 'italic' }]}>
                Let's have fun !!
            </Text>

            </View>

            {/* Start Button */}
            <TouchableOpacity
                style={CommonStyle.button}
                onPress={() => navigation.navigate("Selection")}
            >
                <Text style={CommonStyle.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;
