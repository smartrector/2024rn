import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './page/HomeScreen';
import ProfileScreen from './page/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        headerTitleAlign:'center',
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'skyblue'
        }

      }}
      >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>   
    
  )
}

export default App

const styles = StyleSheet.create({})