import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({onChangeText}) => {
  const onChangeInput = text => {
    onChangeText(text);
  };
  return (
    <>
      <TextInput style={styles.input} onChangeText={onChangeInput} />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
