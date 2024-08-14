import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; 
import AddButtonStyles from '../styles/ButtonStyles';
import Button from './Button';
import { ScreenProps } from '../types';

const Splash: React.FC<ScreenProps>= (onNavigate, goBack) => {
    return (
        <SafeAreaView style={styles.container2}>
            
            <Image 
                source={require("./images/logotecfirst.png")}
                style={styles.imagefirst}
                resizeMode="contain"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container2: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        width: "100%",
        backgroundColor: '#1B396A'
    },
    imagen: {
        width: "58%", 
        height: 100,
        marginLeft: 15,
    },
    imagencol: {
        width: 100, 
        height: 100,
        marginLeft: 50,
    },
    imagecontainer: {
        marginTop: 30,
        flexDirection: 'row',
    },
    text:{
        color: "#FFFFFF",
        fontSize: 25,
        fontFamily: "Montserrath",
        fontWeight: "bold",
      },
    titulo: {
    marginTop:30,
    backgroundColor: "#1B396A",
    height: 60,
    width: 300  ,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    },
    contenido:{
        paddingHorizontal:20,
        marginTop:30,
        color: "black",
        fontSize: 18,
        fontFamily: "Montserrath",
        textAlign: "justify"
    },
    customButton:{
        backgroundColor: "#1B396A",
        height: 35,
        width: 100,
        bottom: 10,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 70,
        marginLeft: 20
        
    },
    customButton2:{
        backgroundColor: "#1B396A",
        height: 35,
        width: 200,
        bottom: 10,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    results:{
        marginTop:20,
        height:600,
        width:400
    },
    imagefirst:{
        width: 370,
        height: 300
    }
});

export default Splash;