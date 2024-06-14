import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyImage from '../assets/image/img1.jpg'

const HomeScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
        <Image source={MyImage} style={{width:'100%'}}/>
        <Button title='go Profile' 
        onPress={()=>navigation.navigate('Profile')} />
    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:10,
        // alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:16
    }
})