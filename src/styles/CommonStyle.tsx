import { StyleSheet } from 'react-native';

const CommonStyle = StyleSheet.create({
    container: {
        backgroundColor: '#1A2A33',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
        color: '#A8BFC9',
    },
    
    resultText: {
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#F2B137",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        width: "50%",
        alignItems: "center",
    },

    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 48,
        fontWeight: 'bold',
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