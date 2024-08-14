import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'; 
import Button from './Button';
import { ScreenProps } from "../types";

const { width, height } = Dimensions.get('window');

const Politica: React.FC<ScreenProps> = ({ onNavigate }) => {
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
                <Text style={styles.text}>Política Integral</Text> 
            </TouchableOpacity>
            <Text style={styles.contenido}>
                El Tecnológico Nacional de México, a través del Instituto Tecnológico de Colima establece el compromiso de orientar sus procesos y actividades hacia la satisfacción de sus clientes, sustentado en la calidad del proceso educativo, con respeto al medio ambiente, a través del cumplimiento de la legislación ambiental y los requisitos aplicables, así como la promoción entre la comunidad tecnológica y partes interesadas, de la prevención de la contaminación y el uso racional de los recursos, mediante la eficacia y mejora continua del Sistema de Gestión Integral, conforme a las Normas ISO 9001:2015 e ISO 14001:2015. La política se comunica a todo el personal en forma digital a través del portal institucional o por el jefe inmediato, y se revisa anualmente en la Revisión por la Dirección.
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

export default Politica;

