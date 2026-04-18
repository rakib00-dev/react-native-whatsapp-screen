import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HomeChatFilter() {
  const chatFilters = [
    {
      name: 'All',
      navTo: '',
      isActive: true,
    },
    {
      name: 'Group',
      navTo: '',
      isActive: false,
    },
    {
      name: 'Unread',
      navTo: '',
      isActive: false,
    },
    {
      name: 'MyFamily',
      navTo: '',
      isActive: false,
    },
  ];
  return (
    <View style={styles.filterContainer}>
      {chatFilters.map(({ name, navTo, isActive }) => (
        <View key={name} style={styles.filterButtonContainer}>
          <Text
            style={[styles.filterButton, isActive && styles.filterButtonActive]}
          >
            {name}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  filterButton: {
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontWeight: '500',
    marginVertical: 10,
  },
  filterButtonActive: {
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButtonContainer: {
    backgroundColor: '',
  },
});
