import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
} from 'react-native';

import React from 'react';
import {interests} from '../interests';

export default function AllInterests({
  selectItems,
  selectedItems,
  currentlySelectedItem,
}) {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const getViewStyle = (interestName, index) => {
    const dimensions = findWhetherAdded(interestName)
      ? currentlySelectedItem?.interestName == interestName
        ? currentlySelectedItem?.dimensions
        : 180
      : 120;
    const viewStyle = {
      backgroundColor: findWhetherAdded(interestName) ? '#4169E1' : '#ADD8E6',
      width: dimensions,
      height: dimensions,
      borderRadius: dimensions / 2,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      padding: 15,
      margin: 0,
    };
    if (index % 3 == 0) return {...viewStyle, marginTop: 30};
    if (index % 3 == 1) return {...viewStyle, marginVertical: 5};
    if (index % 3 == 2) return {...viewStyle, marginTop: 30};
  };
  const findWhetherAdded = interestName =>
    selectedItems?.find(item => item == interestName);

  return (
    <ScrollView contentContainerStyle={styles.rowFlex}>
      {interests.map((item, index) => (
        <TouchableWithoutFeedback onPress={() => selectItems(item.interest)}>
          <Animated.View style={getViewStyle(item.interest, index)}>
            <Text>{item.interest}</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rowFlex: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
