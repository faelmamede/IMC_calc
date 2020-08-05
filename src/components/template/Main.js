import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import IMC from './../pages/IMC';

const width = Dimensions.get('window').width; //full width

export default function Main() {
    
    return (
        <View style={styles.main}>
            <IMC />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#707081',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: width,
    }
})