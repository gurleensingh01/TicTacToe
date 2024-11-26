import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import CommonStyle from "../styles/CommonStyle";


function Game(): React.JSX.Element {
    const [turn, setTurn] = useState('X');
    return (
        <View style={[CommonStyle.container,{justifyContent:'flex-start'},{marginTop:20}]}>
            <Text style={[CommonStyle.text,{fontSize:50}]}>Tic Tac Toe</Text>
            <View style={styles.secondView}>
                <View style={[{flexDirection:"row"}]}>
                    <Text style={styles.xStyle}>X </Text>
                    <Text style={styles.oStyle}>O</Text>
                </View>
                <View style={styles.turnView}>
                    <Text style={styles.turnStyle}>{turn} Turn</Text>
                </View>                                   
            </View>
            <View style={styles.gridView}>
                <View style={styles.gridRow}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.bttnText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>3</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gridRow}>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>6</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.gridRow}>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button}>
                        <Text style={styles.bttnText}>9</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    xStyle:{
        color:'#31C3BD',
        fontSize:35,
        fontWeight:'bold'
    },
    oStyle:{
        color:'#F2B137',
        fontSize:35,
        fontWeight:'bold'
    },
    secondView:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"60%",
        marginTop:120
    },
    turnStyle:{
        fontSize:17,
        fontWeight:'bold',
        color:'#A8BFC9'
    },
    turnView:{
        backgroundColor:'#1F3641',
        height:35,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    button:{
        backgroundColor:'#1F3641',
        height:100,
        width:100,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
        shadowColor: '#000', // iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.25, // iOS
        shadowRadius: 3.84, // iOS
        elevation: 5, // Android
        
        
      
    },
    gridView:{
        width:"90%",
        height:'50%',
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        marginTop:20,
        
       
    },
    gridRow:{
        
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        width:"100%",
       
    },
    bttnText:{
        color:"#FFFFFF",
        fontSize:30,
        fontWeight:'bold'
    }
});
export default Game;