import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScanScreen from './src/screens/ScanScreen';
import ItemScreen from './src/screens/ItemScreen';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName={HomeScreen}>
          <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
          <Stack.Screen name = 'ScanScreen' component={ScanScreen}/>
          <Stack.Screen name = "ItemScreen" component={ItemScreen}/>   
        </Stack.Navigator>
    </NavigationContainer>
  )
}