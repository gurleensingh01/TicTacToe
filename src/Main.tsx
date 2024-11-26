import React from "react";

import { SafeAreaView, View, Text } from "react-native";
import Home from "./screens/Home";
import Selection from "./screens/Selection";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import CommonStyle from "./styles/CommonStyle";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function Main(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GameOver">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Selection" component={Selection} />
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="GameOver" component={GameOver} />
            </Stack.Navigator>
        </NavigationContainer>
    ); 
}

export default Main;