import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'; 
import Button from './Button';
import { ScreenProps } from "../types";

const { width, height } = Dimensions.get('window');

const Alcance: React.FC<ScreenProps> = ({ onNavigate, goBack }) => {
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
            <TouchableOpacity
                style={styles.titulo}
                onPress={() => console.log('Button Pressed')}>
                <Text style={styles.text}>Alcance del SGI</Text> 
            </TouchableOpacity>
            <Text style={styles.contenido}>
                El alcance del SGI comprende todas las actividades del Proceso Educativo, ya declaradas; desde la inscripción hasta el acto de recepción profesional de licenciatura.
            </Text>
            <Button
                text="Atrás"
                style={styles.customButton}
                onPress={() => onNavigate('Home')} 
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    imagen: {
        width: width * 0.4, // 40% del ancho de la pantalla
        height: height * 0.1, // 10% de la altura de la pantalla
        resizeMode: 'contain',
    },
    imagencol: {
        width: width * 0.25, // 25% del ancho de la pantalla
        height: height * 0.1, // 10% de la altura de la pantalla
        resizeMode: 'contain',
        marginLeft: 20,
    },
    imagecontainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    text: {
        color: "#FFFFFF",
        fontSize: 0.03 * height, // 3% de la altura de la pantalla
        fontFamily: "Montserrath",
        fontWeight: "bold",
    },
    titulo: {
        marginTop: 30,
        backgroundColor: "#1B396A",
        height: 60,
        width: width * 0.8, // 80% del ancho de la pantalla
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    contenido: {
        paddingHorizontal: 20,
        marginTop: 30,
        color: "black",
        fontSize: 0.02 * height, // 2% de la altura de la pantalla
        fontFamily: "Montserrath",
        textAlign: "justify"
    },
    customButton: {
        backgroundColor: "#1B396A",
        height: 35,
        width: width * 0.3, // 30% del ancho de la pantalla
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    }
});

export default Alcance;
