import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [name,setName]=useState('')
  const handleChangeInput = (text:string)=>{
    console.log(text)
    setName(text)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.conWrap}>{name}</Text>
      <Button title="my World1" onPress={()=>{alert('test')}}/>
      <TextInput style={styles.input} value={name} onChangeText={handleChangeInput}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ddd',
    alignItems:'center',
    justifyContent:'center',
    gap:10
    
  },
  conWrap:{
    backgroundColor:'skyblue',
    padding:20,
    color:'white'
  },
  input:{
    backgroundColor:'white',
    width:100
  }
})

export default App
