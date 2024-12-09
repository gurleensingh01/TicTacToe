import React from "react";
import Home from "./screens/Home";
import Selection from "./screens/Selection";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

function CustomHeader() {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Tic Tac Toe</Text>
        </View>
    );
}

function Main(): React.JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    header: () => <CustomHeader />,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Selection" component={Selection} />
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="GameOver" component={GameOver}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#1A2A33",
        padding: 20,
        alignItems: "center",
        paddingTop: 40,
    },
    headerTitle: {
        fontSize: 60,
        fontWeight: "bold",
        color: "#A8BFC9",
    },
});

export default Main;
