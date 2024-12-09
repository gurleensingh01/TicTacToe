import React from "react";

import { SafeAreaView, View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

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
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={({ navigation }) => ({
                    headerTitle: "Tic Tac Toe",
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: "#1A2A33" },
                    headerTintColor: "#A8BFC9",
                    headerTitleStyle: { fontSize: 24, fontWeight: "bold" },
                    // Custom Back Button
                    headerLeft: () =>
                        navigation.canGoBack() && (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Icon
                                    name="arrow-back"
                                    size={24}
                                    color="#A8BFC9"
                                    style={CommonStyle.backIcon}
                                />
                            </TouchableOpacity>
                        ),
                })}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Selection" component={Selection} />
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="GameOver" component={GameOver} />
            </Stack.Navigator>
        </NavigationContainer>
    ); 
}

export default Main;