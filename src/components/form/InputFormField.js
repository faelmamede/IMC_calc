import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function InputFormField(props) {

    return (
        <View style={styles.formField}>
            <Text style={styles.label} > {props.label}: </Text> 
            <TextInput
                style={styles.inputField}
                onChangeText={text => props.onChangeValue(`${props.keyChange}`,text)}
                value={props.value}
                keyboardType="numbers-and-punctuation"
                placeholder = {props.placeholder}
                placeholderTextColor = "#999"
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        color: 'white', 
        marginRight: 5, 
        fontSize: 20,
    },
    formField: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
    },
    inputField: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
    }
})