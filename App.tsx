import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: 'white', height: '100%' }}>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}
