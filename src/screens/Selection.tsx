import React from "react";

import { View, Text } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Selection(): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <Text style={CommonStyle.text}>Selection Screen</Text>
        </View>
    );
}

export default Selection;