import * as React from 'react';
import { SafeAreaView, Image, Text, StyleSheet, View, Linking, Dimensions } from 'react-native';
import Button from "./Button";
import AddButtonStyles from '../styles/ButtonStyles';
import { ScreenProps } from '../types';

const { width, height } = Dimensions.get('window');

const Home: React.FC<ScreenProps> = ({ onNavigate, goBack }) => {
    const openYouTubeLink = () => {
        const youtubeUrl = 'https://www.youtube.com/watch?v=RjpK8WFBR2k';
        Linking.openURL(youtubeUrl);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imagecontainer}>
                <Image
                    source={require("./images/tecnacblaco.png")}
                    style={styles.imagen}
                />
                <Image
                    source={require("./images/logoteccol.png")}
                    style={styles.imagencol}
                />
            </View>
            <Text style={styles.text}>Sistemas de Gestión</Text>
            <Button
                text="Política Integral"
                onPress={() => onNavigate('Politica')}
            />
            <Button
                text="Alcance del SGI"
                onPress={() => onNavigate('Alcance')}
            />
            <Button
                text="Resultados"
                onPress={() => onNavigate('Resultados')}
            />
            <Button
                text="Consumo de Recursos"
                onPress={() => onNavigate('Consumo')}
            />
            <Button
                text="Ver Video"
                onPress={openYouTubeLink}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#1B396A',
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
        fontSize: 0.05 * height, // 5% de la altura de la pantalla
        fontFamily: "Montserrat",
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Home;
