import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  const header = 'Choose three or more of your favourites';
  const subtitle =
    'Tap once to select it and to deselect it again, Tap Again. Happy Tapping!';
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{header}</Text>
      <Text style={styles.subtitleStyle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#4169E1',
  },
  subtitleStyle: {
    fontSize: 12,
    fontWeight: '200',
    color: '#000000',
    marginRight: 20,
  },
  viewStyle: {
    padding: 20,
    alignSelf: 'center',
    margin: 20,
    marginBottom: 0,
    flexShrink: 1,
  },
});
