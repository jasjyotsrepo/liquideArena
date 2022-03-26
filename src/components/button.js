import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const alertConstant = 'Please select atleast 3 of your favourites to proceed';

export default function Button({text, disabled, selectedItems, navigation}) {
  const getStyles = () => {
    const viewStyle = {
      backgroundColor: disabled ? '#C0C0C0' : '#3CB371',
      alignSelf: 'center',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginHorizontal: 20,
    };
    return viewStyle;
  };

  const showInterestsSelected = () => {
    if (!disabled) {
      navigation.navigate('Interest-List', {selectedItems: selectedItems});
    } else {
      alert(alertConstant);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={showInterestsSelected}>
      <View style={getStyles()}>
        <Text style={styles.textStyle}>{text} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
});
