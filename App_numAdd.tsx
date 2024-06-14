import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from './page/components/Header';
import Generator from './page/components/Generator';
import NumList from './page/components/NumList';

const App = () => {
  const [mainTitle, setMainTitle] = useState('my world');
  const [random, setRandom] = useState([100, 99]);

  const pressView = () => {
    alert('view');
  };

  const onAddRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setRandom(prevRandom => [...prevRandom, randomNum]);
  };

  const listDeleteNum = delNum => {
    const newArray = random.filter((num, index) => {
      return delNum != index;
    });
    setRandom(newArray);
  };
  const onChangeText = (text: string) => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <Header title={mainTitle} onPressView={pressView} />

      {/* <View style={styles.btnCon}>
        <Button title='test'/>
        <Button title='test' />
      </View>
      <Text>App111</Text> */}

      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          // maxLength={3}
          // multiline={true}
          returnKeyType="done"
        />
      </View>

      <ScrollView>
        <Generator add={onAddRandom} />

        <NumList data={random} listDelete={listDeleteNum} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  btnCon: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWrap: {
    width: '100%',
    // backgroundColor:'#efefef',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#efefef',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
