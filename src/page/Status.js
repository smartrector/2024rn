import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;

  return (
    <SafeAreaView>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({});
