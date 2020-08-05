import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/template/Header';
import Footer from './src/components/template/Footer';
import Main from './src/components/template/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
