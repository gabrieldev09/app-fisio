import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import drawer from '../../assets/drawer.png';

export default function Drawer({ title, icon }) {
  return (
    <View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.drawerIconContainer}>
          <Image source={icon} style={styles.drawerIcon} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00005D',
    height: 80,
    paddingHorizontal: 20,
  },
  drawerIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    width: 30,
    height: 24,
    tintColor: '#FFF',
  },
  navTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
});
