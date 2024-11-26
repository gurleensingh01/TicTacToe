import React from "react";

import { SafeAreaView, View, Text } from "react-native";
import Home from "./screens/Home";
import Selection from "./screens/Selection";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import CommonStyle from "./styles/CommonStyle";


function Main(): React.JSX.Element {
    return (
        <SafeAreaView style={CommonStyle.container}>
            {/* <Home /> */}
            {/* <Selection /> */}
            <Game />
            {/* <GameOver /> */}
        </SafeAreaView>
    ); 
}

export default Main;