import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplaceScreen from './SplaceScreen';
import IntroScreen from './IntroScreen';
import Login from './Login';
import Register from './Register';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName='SplaceScreen'>
       <Stack.Screen name='SplaceScree' component={SplaceScreen} options={{ headerShown: false }} />
       <Stack.Screen name='IntroScreen' component={IntroScreen} options={{ headerShown: false }} />
       <Stack.Screen name='Login' component={Login} options={{ headerTitle: '', }} />

       <Stack.Screen name='Register' component={Register} options={{ }} />

       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})