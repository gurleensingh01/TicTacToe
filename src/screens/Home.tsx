import React from "react";

import { View, Text } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Home(): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <View>
            <Text style={CommonStyle.text}>Home Screen</Text>
            </View>
        </View>
    );
}

export default Home;