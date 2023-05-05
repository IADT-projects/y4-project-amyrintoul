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
import MechanicProfile from '../screens/MechanicProfile';
import ReportScreen from '../screens/ReportScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import SingleReport from './SingleReport';
import BlogPost from './BlogPosts';
//creates the stack, components used for configuring the navigator
const Stack = createNativeStackNavigator();

export default function Navigation() {
    //set loggedin to false
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const [isMechanic, setIsMechanic] = useState(false);
    const [authUser, setAuthUser] = useState({});

    
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

  useEffect(() => {
    getData('mechanic')
      .then(data => {
        if(data){
          let boolStr = (data === "true");
          setIsMechanic(boolStr);
        }
      })
      .catch(e => {
        console.log(e);
      });

    getAllData().then(data => console.log(data))

}, []);

useEffect(() => {
  getData('authUser')
    .then(data => {
      if(data){
        setAuthUser(JSON.parse(data));
      }
    })
    .catch(e => {
      console.log(e);
    });

  getAllData().then(data => console.log(data))

}, []);


  const onisLoggedin = (auth, token, mechanic = false, user = {}) => {

    // console.log("AUTH: ", auth);
    // console.log("Token: ", token);
    setIsLoggedIn(auth);

    if(auth){
      storeData('token', token).then(data => {
        setIsMechanic(mechanic)
        console.log("redirect to welcome")
      })
      .catch(e => console.log(e));

      storeData('mechanic', mechanic.toString()).then(data => {
        console.log("redirect to welcome")
      })
      .catch(e => console.log(e));

      storeData('authUser', JSON.stringify(user)).then(data => {
        setAuthUser(JSON.parse(data))
        console.log("redirect to welcome")
      })
      .catch(e => console.log(e));
    }
    else{
      removeData('token')
        .then(data => {
          console.log("redirect to login")
        })
        .catch(e => console.log(e));
        removeData('mechanic')
        .then(data => {
          console.log("redirect to login")
        })
        .catch(e => console.log(e));
        removeData('authUser')
        .then(data => {
          console.log("redirect to login")
        })
        .catch(e => console.log(e));
    }
};

  return (
    
    <NavigationContainer>
        {/* if logged in is true, show homepage otherwise show the other screens */}
        {isLoggedin ? 
        <Stack.Navigator initialRouteName="Root" screenOptions={{headerShown: false,}}>

        <Stack.Screen name="Home" screenOptions={{headerShown: true,}}>
          {props => <Tabs {...props} authUser={authUser} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />}
        </Stack.Screen>
        <Stack.Screen name="MechanicProfile" component={MechanicProfile} screenOptions={{headerShown: true, }} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />
        <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} screenOptions={{headerShown: false}} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} screenOptions={{headerShown: false}} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />
        <Stack.Screen name="SingleReport" component={SingleReport} screenOptions={{headerShown: false}} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />
        <Stack.Screen name="BlogPost" component={BlogPost} screenOptions={{headerShown: false}} onisLoggedin={onisLoggedin} isLoggedin={isLoggedin} isMechanic={isMechanic} />



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