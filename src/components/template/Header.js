import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get('window').width; //full width

export default function Header () {
    return (
      <View style={styles.header}>
          <Text style={styles.title}>Calculo IMC</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    header: {
      backgroundColor: '#3A3B40',
      alignItems: 'center',
      justifyContent: 'center',
      height: 100,
    },
    title : {
      color: 'white',
      fontSize: 26,
      width: width,
      textAlign: "center"
    },
  });
  