import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CommonStyle from "../styles/CommonStyle";
import { NavigationProp, RouteProp } from "@react-navigation/native";

function Game({
    navigation,
    route,
}: {
    navigation: NavigationProp<any>;
    route: RouteProp<{ params: { player1Name: string; player2Name: string; numRounds: number } }, "params">;
}): React.JSX.Element {
    const { player1Name, player2Name, numRounds } = route.params;

    const getRandomTurn = () => (Math.random() < 0.5 ? "X" : "O");

    const [turn, setTurn] = useState(getRandomTurn());
    const [grid, setGrid] = useState(Array(9).fill(null));
    const [winningLine, setWinningLine] = useState<number[] | null>(null);
    const [currentRound, setCurrentRound] = useState(1);
    const [scores, setScores] = useState({ player1: 0, player2: 0, draw: 0 });
    const [winningPlayer, setWinningPlayer] = useState<string | null>(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const resetGame = () => {
        setGrid(Array(9).fill(null));
        setTurn(turn === "X" ? "O" : "X");
        setWinningLine(null);
        setWinningPlayer(null);
    };

    const handleGameOver = (winner: string, winningPlayer: string | null) => {
        if (winner === "X") {
            setScores((prev) => ({ ...prev, player1: prev.player1 + 1 }));
        } else if (winner === "O") {
            setScores((prev) => ({ ...prev, player2: prev.player2 + 1 }));
        } else {
            setScores((prev) => ({ ...prev, draw: prev.draw + 1 }));
        }

        if (currentRound < numRounds) {
            setTimeout(() => {
                setCurrentRound((prev) => prev + 1);
                resetGame();
            }, 2000);
        } else {
            setTimeout(() => {
                navigation.navigate("GameOver", { winner: winningPlayer || "Tie" });
            }, 2000);
        }
    };

    const handlePress = (index: number) => {
        if (grid[index] || winningLine) return;

        const newGrid = [...grid];
        newGrid[index] = turn;
        setGrid(newGrid);

        const winningCombination = winningCombinations.find((combination) =>
            combination.every((i) => newGrid[i] === turn)
        );

        if (winningCombination) {
            setWinningLine(winningCombination);
            handleGameOver(turn, turn === "X" ? player1Name : player2Name);
            return;
        }

        if (!newGrid.includes(null)) {
            handleGameOver("Tie", null);
            return;
        }

        setTurn(turn === "X" ? "O" : "X");
    };

    const getLineStyle = (combination: number[]) => {
        if (combination[0] === 0 && combination[1] === 1 && combination[2] === 2) {
            return { top: 85, left: 50, width: 300 };
        } else if (combination[0] === 3 && combination[1] === 4 && combination[2] === 5) {
            return { top: 195, left: 50, width: 300 };
        } else if (combination[0] === 6 && combination[1] === 7 && combination[2] === 8) {
            return { top: 305, left: 50, width: 300 };
        } else if (combination[0] === 0 && combination[1] === 3 && combination[2] === 6) {
            return { top: 50, left: 82, height: 300 };
        } else if (combination[0] === 1 && combination[1] === 4 && combination[2] === 7) {
            return { top: 50, left: 196, height: 300 };
        } else if (combination[0] === 2 && combination[1] === 5 && combination[2] === 8) {
            return { top: 50, left: 311, height: 300 };
        } else if (combination[0] === 0 && combination[1] === 4 && combination[2] === 8) {
            return { top: 196, left: 0, width: 400, transform: [{ rotate: "44deg" }] };
        } else if (combination[0] === 2 && combination[1] === 4 && combination[2] === 6) {
            return { top: 196, left: 0, width: 400, transform: [{ rotate: "-44deg" }] };
        }
    };

    return (
        <View style={[CommonStyle.container, { justifyContent: "flex-start" }]}>
            <View style={styles.namesView}>
                <Text style={styles.xStyle}>X - {player1Name}</Text>
                <Text style={styles.oStyle}>O - {player2Name}</Text>
            </View>

            <View style={styles.secondView}>
                <View style={styles.turnView}>
                    <Text style={styles.turnStyle}>{turn} Turn</Text>
                </View>

                <View style={styles.turnView}>
                    <Text style={styles.turnStyle}>Round {currentRound}/{numRounds}</Text>
                </View>
            </View>

            {winningPlayer && (
                <Text style={styles.winnerText}>
                    Winner: {winningPlayer}
                </Text>
            )}

            <View style={styles.gridView}>
                {winningLine && <View style={[styles.winningLine, getLineStyle(winningLine)]} />}
                {[0, 1, 2].map((row) => (
                    <View key={row} style={styles.gridRow}>
                        {[0, 1, 2].map((col) => {
                            const cellIndex = row * 3 + col;
                            return (
                                <TouchableOpacity
                                    key={cellIndex}
                                    style={styles.button}
                                    onPress={() => handlePress(cellIndex)}
                                >
                                    <Text style={styles.btnText}>{grid[cellIndex]}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                ))}
            </View>

            <View style={styles.scoreView}>
                <View style={styles.p1Style}>
                    <Text style={styles.scoreText}>{player1Name}</Text>
                    <Text style={styles.scoreText}>{scores.player1}</Text>
                </View>
                <View style={styles.drawStyle}>
                    <Text style={styles.scoreText}>Draw</Text>
                    <Text style={styles.scoreText}>{scores.draw}</Text>
                </View>
                <View style={styles.p2Style}>
                    <Text style={styles.scoreText}>{player2Name}</Text>
                    <Text style={styles.scoreText}>{scores.player2}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    winnerText: {
        position: "absolute",
        top: 12,
        height: 105,
        zIndex: 1,
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "#F2B137",
        color: "#1A2A33",
        padding: 10,
        borderRadius: 10,
        width: 165,
        textAlign: "center",
    },
    xStyle: {
        color: "#31C3BD",
        fontSize: 25,
        fontWeight: "bold",
    },
    oStyle: {
        color: "#F2B137",
        fontSize: 25,
        fontWeight: "bold",
    },
    turnStyle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#A8BFC9",
    },
    secondView: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 10,
    },
    turnView: {
        backgroundColor: "#1F3641",
        height: 35,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        backgroundColor: "#1F3641",
        height: 100,
        width: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 7,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    gridView: {
        width: "90%",
        height: "50%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 20,
    },
    gridRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        width: "100%",
    },
    btnText: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
    },
    winningLine: {
        position: "absolute",
        height: 10,
        width: 10,
        backgroundColor: "#A8BFC9",
        zIndex: 1,
        borderRadius: 5,
    },
    p1Style:{
        backgroundColor:'#31C3BD',
        height:80,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    drawStyle:{
        backgroundColor:'#A8BFC9',
        height:80,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    },
    p2Style:{
        backgroundColor:'#F2B137',
        height:80,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    scoreView:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"60%",
        marginRight:50,
    },
    scoreText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#1A2A33'
    },
    namesView:{
        marginTop:10,
        borderRadius:20,
        backgroundColor:'#1F3641',
        padding:20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default Game;
