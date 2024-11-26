import React from "react";

import { View, Text, Button } from "react-native";
import CommonStyle from "../styles/CommonStyle";

function Home({navigation}): React.JSX.Element {
    return (
        <View style={CommonStyle.container}>
            <View>
            <Text style={[CommonStyle.text,{fontSize:50,}]}>Tic Tac Toe</Text>
            <Text style={CommonStyle.text}>Home Screen</Text>
            <Button
            title="Start"
            onPress={() => navigation.navigate('Selection')}
            />
            </View>
        </View>
    );
}

export default Home;