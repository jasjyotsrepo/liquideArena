import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SingleInterest({interest}) {
  return (
    <View style={styles.eachView}>
      <Text style={styles.textStyle}>{interest}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  eachView: {
    backgroundColor: '#4169E1',
    padding: 20,
    margin: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: 20,
  },
});
