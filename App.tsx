import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './page/components/IconButton';
import Icons from './page/Icons';
import Input from './page/components/Input';

const App = () => {
  const onChangeText = text => {
    console.log(text);
  };

  return (
    <View>
      <Text style={styles.title}>MY TODOLIST</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10}}>
        <Input onChangeText={onChangeText} />
      </View>

      {/* <IconButton icon={Icons.check} onPress={() => alert('check')} />
      <IconButton icon={Icons.checked} onPress={() => alert('checked')} />
      <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
      <IconButton icon={Icons.delete} onPress={() => alert('delete')} /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'skyblue',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
