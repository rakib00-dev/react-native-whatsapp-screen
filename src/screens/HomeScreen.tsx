import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../components/HomeScreen/HomeHeader';
import HomeChatFilter from '../components/HomeScreen/HomeChatFilter';
import HomeChatList from '../components/HomeScreen/HomeChatList';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: 'white', height: '100%', padding: 20 }}
      >
        <HomeHeader />
        <HomeChatFilter />
        <HomeChatList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
