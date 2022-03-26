import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import SingleInterest from '../components/single-interest';

export default function InterestList({route, navigation}) {
  const {selectedItems} = route.params;
  return (
    <ScrollView>
      {selectedItems.map((item, index) => (
        <SingleInterest interest={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
