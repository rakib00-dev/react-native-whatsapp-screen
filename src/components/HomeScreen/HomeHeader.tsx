import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomeHeader() {
  return (
    <View>
      <View style={styles.headerContaier}>
        <View>
          <Text style={styles.heading}>Chats</Text>
        </View>
        {/* <View style={styles.buttonContainer}>
          <Text>Story</Text>
          <Text>Search</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
  },

  headerContaier: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
