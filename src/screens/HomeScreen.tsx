import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Home Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
