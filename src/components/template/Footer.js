import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={{color: 'white'}}> Developed by Rafael Mamede</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#3A3B40',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: width,
    }
})