import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { JSX } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>App</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
