import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, Feather, Entypo } from '@expo/vector-icons';

export default function Login({ navigation }) {
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    const validateUser = () => {
        if (name === 'drake' && password === 'gabito') navigation.navigate('Home');
        else alert('Introduzca el nombre y el usuario');
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#FDAFAB', height: '100%'}}>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',paddingTop: 15, paddingBottom: 15 }}>
            <Entypo name="user" size={80} color="#292929" />
            </View>
            <View style={{width: '80%', padding: 5}}>
                <TextInput style={{marginBottom: 30, padding: 10, borderWidth: 1, borderRadius: 10, backgroundColor: '#FAF1D6', borderColor: '#FAF1D6', color: '#292929'}} placeholder="Introduce el usuario" onChangeText={(name) => { setName(name) }} />
                <TextInput style={{padding: 10, borderWidth: 1, borderRadius: 10,backgroundColor: '#FAF1D6', borderColor: '#FAF1D6', color: '#292929'}} secureTextEntry={true} placeholder="Introduce la contraseña" onChangeText={(password) => { setPassword(password) }} />
            </View>
            <TouchableOpacity onPress={() => { validateUser() }} style={{ width: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center', backgroundColor: '#D9F1F1', padding: 8, margin: 20, borderRadius: 10 }}>
                <SimpleLineIcons name="login" size={22} color="black" />
                <Text style={{paddingLeft: 10}}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}