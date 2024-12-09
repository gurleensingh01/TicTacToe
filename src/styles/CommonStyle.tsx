import { StyleSheet } from 'react-native';

const CommonStyle = StyleSheet.create({
    container: {
        backgroundColor: '#1A2A33',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: '#A8BFC9',
        fontWeight: 'bold',
    },
    
    resultText: {
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0057D9",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: "80%",
        alignItems: "center",
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },

    playAgainButton: {
        backgroundColor: "#31C3BD",
    },
    mainMenuButton: {
        backgroundColor: "#F2B137",
    },

    titleContainer: {
        marginBottom: 50,
        alignItems: "center",
    },
    title: {
        fontSize: 60,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 20,
        color: "#A8BFC9",
        marginTop: 10,
    },
    toggleContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        width: "60%",
    },
    toggleButton: {
        backgroundColor: "#1F3641",
        padding: 15,
        borderRadius: 8,
        width: "40%",
        alignItems: "center",
    },
    
    selectedText: {
        color: "#1A2A33",
    },
    backIcon: {
        marginLeft: 10,
        padding: 5,
    },
});

export default CommonStyle;