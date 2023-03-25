import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React , {useState, useEffect} from 'react';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen'
import WelcomeScreen from '../screens/WelcomeScreen'
import SecondScreen from '../screens/SecondScreen';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import Tabs from '../navigation/tabs'
import { getData, storeData, removeData, getAllData } from '../config/localStorage';
import AnotherScreen from '../screens/AnotherScreen';

//creates the stack, components used for configuring the navigator
const Stack = createNativeStackNavigator();

export default function Navigation() {
    //set loggedin to false
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [isMechanic, setIsMechanic] = useState(false);

    
    // const [token, setToken] = useState(null);

    useEffect(() => {
      getData('token')
        .then(data => {
          if(data){
            setIsLoggedIn(true);
          }
        })
        .catch(e => {
          console.log(e);
        });

      getAllData().then(data => console.log(data))

  }, []);


  const onisLoggedin = (auth, token) => {

    // console.log("AUTH: ", auth);
    // console.log("Token: ", token);
    setIsLoggedIn(auth);

    if(auth){
      storeData('token', token).then(data => {
        console.log("redirect to welcome")
      })
      .catch(e => console.log(e));;
    }
    else{
      removeData('token')
        .then(data => {
          console.log("redirect to login")
        })
        .catch(e => console.log(e));
    }
};

  return (
    
    <NavigationContainer>
        {/* if logged in is true, show homepage otherwise show the other screns */}


        {isLoggedin ? 
        <Stack.Navigator initialRouteName="Root" screenOptions={{headerShown: false}}>

        <Stack.Screen name="Root">
          {props => <Tabs {...props} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />}
        </Stack.Screen>
        <Stack.Screen name="AnotherScreen"component={AnotherScreen} screenOptions={{headerShown: true}}/>


        </Stack.Navigator> : 
        <Stack.Navigator screenOptions={{headerShown: false}} >

            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="SecondScreen" component={SecondScreen} />
            <Stack.Screen name="Login">
            {props => <LoginScreen {...props} onisLoggedin={onisLoggedin} />}
            </Stack.Screen>
            
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