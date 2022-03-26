import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/header';
import AllInterests from '../components/all-interests';
import Button from '../components/button';

export default function Home({navigation}) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentlySelectedItem, setCurrentlySelectedItem] = useState({
    interestName: null,
    dimensions: 120,
  });

  useEffect(() => {
    if (currentlySelectedItem?.dimensions <= 180) {
      const id = setInterval(() => {
        setCurrentlySelectedItem(prev => {
          interestName: prev.interestName;
          dimensions: prev + 10;
        });
      }, 100);
      return () => clearInterval(id);
    }
  }, [currentlySelectedItem]);

  const findWhetherAdded = interestName =>
    selectedItems?.find(item => item == interestName);

  const selectItems = interestName => {
    if (findWhetherAdded(interestName)) {
      setSelectedItems(selectedItems?.filter(item => item != interestName));
    } else {
      setSelectedItems([...selectedItems, interestName]);
      setCurrentlySelectedItem({interestName, dimensions: 120});
    }
  };
  return (
    <View style={styles.MainContainer}>
      <Header />
      <AllInterests
        selectItems={selectItems}
        selectedItems={selectedItems}
        currentlySelectedItem={currentlySelectedItem}
      />
      <View style={styles.bottomView}>
        <Button
          text={'Confirm Interests'}
          disabled={selectedItems?.length < 3 ? true : false}
          selectedItems={selectedItems}
          navigation={navigation}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFE0',
  },

  bottomView: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
});
