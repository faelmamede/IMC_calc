import React from 'react';
import { StyleSheet, View, Alert, Keyboard, TouchableOpacity, Text  } from 'react-native';
import InputFormField from '../form/InputFormField';

const initialState = {
    height: '0',
    weight: '0'
}

export default function Main() {
    const [values, onChangeValues] = React.useState({height: '', weight: ''});

    const onChangeValue = (key, value) => onChangeValues({ ...values, [key]: value });

    const calcIMC = () => {
        const imc = values.weight/(values.height*values.height);
        Alert.alert(`Altura: ${values.height}, Peso: ${values.weight}, IMC: ${imc}`)
        Keyboard.dismiss()
    }

    const clean = () => onChangeValues(initialState)

    return (
        <View>
            
            <View style={styles.inputGroup}>
                <InputFormField label="Altura" value={values.height} placeholder="Digite sua altura aqui" onChangeValue={onChangeValue} keyChange="height"/>

                <InputFormField label="Peso" value={values.weight} placeholder="Digite seu peso aqui" onChangeValue={onChangeValue} keyChange="weight"/>
            </View>

            <TouchableOpacity style = {styles.button} onPress = {calcIMC}>
               <Text style = {styles.buttonText}> Calcular </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.button} onPress = {clean}>
               <Text style = {styles.buttonText}> Limpar </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    inputGroup: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }, 
    button: {
      backgroundColor: '#3A3B40',
      padding: 10,
      margin: 5,
      height: 40,
   },
   buttonText:{
    color: 'white',
    textAlign: 'center'
    }
})