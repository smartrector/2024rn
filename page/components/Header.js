import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = ({title,onPressView}) => {

  return (
    <TouchableOpacity 
    onPress={()=>{onPressView()}}
    // onLongPress={()=>alert("long")}
    // onPressIn={()=>alert("in")}
    // onPressOut={()=>alert('out')}
    >
        <View style={styles.header}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:'pink',
        width:'100%',
        padding:16,
        alignItems:'center'
    }
})