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
    button: {
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default CommonStyle;