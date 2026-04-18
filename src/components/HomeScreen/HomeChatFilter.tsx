import { ScrollView, StyleSheet, Text, View } from 'react-native';
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
    {
      name: 'Favourite',
      navTo: '',
      isActive: false,
    },
    {
      name: 'Add A Filter',
      navTo: '',
      isActive: false,
    },
  ];

  return (
    <ScrollView horizontal style={styles.filterContainer}>
      {chatFilters.map(({ name, navTo, isActive }) => (
        <View key={name} style={styles.filterButtonContainer}>
          <Text
            style={[styles.filterButton, isActive && styles.filterButtonActive]}
          >
            {name}
          </Text>
        </View>
      ))}
    </ScrollView>
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
    fontWeight: 400,
    color: '#393939',
    marginVertical: 10,
  },
  filterButtonActive: {
    borderRadius: 20,
    fontWeight: '500',
    color: '#000',
    backgroundColor: '#f0f0f0',
  },
  filterButtonContainer: {
    backgroundColor: '',
  },
});
