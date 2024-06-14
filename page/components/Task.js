import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import Icons from '../Icons';

const Task = ({data,deleteTask,checkCompleted}) => {
  return (
    <>
      {[...data].reverse().map((item, idx) => {
        return (
          <View style={styles.container} key={idx}>
            <IconButton icon={item.completed ? Icons.checked : Icons.check} onPress={() => checkCompleted(item.id)} />
            <Text style={{flex: 1}}>{item.text}</Text>
            {item.completed || <IconButton icon={Icons.edit} onPress={() => alert('edit')} />}
            <IconButton icon={Icons.delete} onPress={() => deleteTask(item.id)} />
          </View>
        );
      })}
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
