import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Button from './Button';
import { ScreenProps } from "../types";

const { width, height } = Dimensions.get('window');

const Consumo: React.FC<ScreenProps> = ({ onNavigate }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const images = [
        {
            url: '',
            props: {
                source: require("./images/resultadospng.png"),
            },
        },
    ];

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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

            <TouchableOpacity onPress={toggleModal} style={styles.container} >
                <Image
                    source={require("./images/resultadospng.png")}
                    style={styles.results}
                />
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
                <Button
                    text="Atrás"
                    style={styles.customButton}
                    onPress={() => onNavigate('Home')}
                />
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                onRequestClose={toggleModal}
            >
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <ImageViewer
                        imageUrls={images}
                        onCancel={toggleModal}
                        enableSwipeDown={true}
                        renderImage={(props) => <Image {...props} style={styles.fullScreenImage} />}
                    />

            </Modal>
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
    results: {
        marginTop: 20,
        width: "100%", // 50% del ancho de la pantalla
        height: "90%", // 30% de la altura de la pantalla
        resizeMode: "contain",
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    customButton: {
        backgroundColor: "#1B396A",
        height: 35,
        width: width * 0.3, // 30% del ancho de la pantalla
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullScreenImage: {
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 1,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default Consumo;
