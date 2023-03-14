import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React , {useState} from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import SecondScreen from '../screens/SecondScreen';
import ShowTab from '../screens/ShowTab';

//creates the stack, components used for configuring the navigator
const Stack = createNativeStackNavigator();

export default function Navigation() {
    //set loggedin to false
    const [isLoggedin, setIsLoggedIn] = useState(true)
  return (
    <NavigationContainer>
        {/* if logged in is true, show homepage otherwise show the other screns */}


        {isLoggedin ? <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ShowTab" component={ShowTab} />
        </Stack.Navigator> : 
        <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
            <Stack.Screen  name="Login" component={LoginScreen}  />
            
            <Stack.Screen name="Register" component={RegisterScreen} /> 
            
            </Stack.Navigator>}



    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});