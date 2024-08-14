import React from 'react';
import YouTube from 'react-native-youtube';
import { YouTubeStandaloneIOS } from 'react-native-youtube';
import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; 
import AddButtonStyles from '../styles/ButtonStyles';
import Button from './Button';
import {ScreenProps} from "../types"

const Video: React.FC<ScreenProps> = ({ onNavigate }) => {
    const API_KEY = 'AIzaSyBSn0wKWcA76Ap1KP6V-oK4q2FpXpcA42A'; // Reemplaza con tu propia clave de API de YouTube
    const VIDEO_ID = 'mLI_QxszYrU'; // Reemplaza con el ID de tu vídeo de YouTube
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
            source={require("./images/logotecnac.png")}
            style={styles.imagen}
          />
          <Image
            source={require("./images/logoteccol.png")}
            style={styles.imagencol}
          />
        </View>
        <View></View>
        
        
  
        <View style={styles.imagecontainer}>
          <Button
            text="Atrás"
            style={styles.customButton}
            onPress={() => onNavigate('Home')}
          />
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FFFFF'
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
        marginTop: 128,
        marginRight: 280
    }
});

export default Video;
