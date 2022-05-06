import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import * as Location from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    let text = 'Waiting..';

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            {errorMsg ? <Text>{text}</Text> :
                <View style={styles.container}>
                    <View style={{ width: '80%' }}>
                        <Text style={styles.title}>Calcular IMC</Text>
                        <TextInput placeholder="Ingresa el peso" style={styles.inputText} keyboardType="numeric" onChangeText={(value) => setPeso(parseFloat(value))} />
                        <TextInput placeholder="Ingresa la altura" style={styles.inputText} keyboardType="numeric" onChangeText={(value) => setAltura(parseFloat(value))} />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Camera', {
                            IMC: (typeof peso === 'number' && typeof altura === 'number') ?
                                (Math.round(peso / Math.pow(altura, 2))) : 'No es numero'
                        })}
                    >
                        <Text style={styles.text}>Tomar fotografia.</Text>
                    </TouchableOpacity>
                    <View style={styles.containerLocation}>
                        <MaterialIcons name="location-history" size={50} color="#292929" />
                        {text != 'Waiting..' ? <Button title='Ver la ubicacion' onPress={() => navigation.navigate('Map', { latitude: location.coords.latitude, longitude: location.coords.longitude })} /> : null}
                        <Text>  </Text>
                        <Button title = 'Alarma' onPress={() => navigation.navigate('Alarm')} />
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#B6E3E9'
    },
    title: {
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 26,
        marginBottom: 20,
        color: '#292929'
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#FAF1D6',
        backgroundColor: '#FAF1D6',
        color: '#ffffff',
        width: '100%',
        margin: 10,
        padding: 5,
        borderRadius: 10,
    },
    button: {
        width: '60%',
        borderRadius: 15,
        padding: 5,
        backgroundColor: '#FAD4AE',
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        color: '#292929',
        fontSize: 20,
    },
    containerLocation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },
    textLocation: {
        color: '#ffffff'
    }
})