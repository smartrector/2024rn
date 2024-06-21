import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchInput from '../page/SearchInput';
import SearchContent from '../page/SearchContent';

const Search = () => {
  const [image, setImage] = useState(null);

  const getData = data => {
    setImage(data);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <SearchInput />
        <SearchContent data={getData} />
      </ScrollView>
      {image ? (
        <View
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            backgroundColor: 'pink',
          }}>
          <Text>{image}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
