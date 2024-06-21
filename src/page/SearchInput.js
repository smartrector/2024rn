import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const SearchInput = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Ionic
        name="search"
        style={{
          fontSize: 18,
          opacity: 0.8,
          position: 'absolute',
          left: 25,
          zIndex: 1,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: '94%',
          backgroundColor: '#ebebeb',
          borderRadius: 10,
          //   alignItems:'center',
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
        }}
      />
    </View>
  );
};

export default SearchInput;
