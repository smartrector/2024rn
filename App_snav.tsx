import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './page/HomeScreen';
import ProfileScreen from './page/ProfileScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerTitleAlign:'center'
      }}
      >
        <Stack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          title:'홈',
          headerTitleAlign:'left',
          headerStyle:{
            backgroundColor:'skyblue'
          },
          // headerShown:false
          
        }}
         />
        <Stack.Screen name='Profile' component={ProfileScreen} 
        options={{
          
          
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>   
    
  )
}

export default App

const styles = StyleSheet.create({})