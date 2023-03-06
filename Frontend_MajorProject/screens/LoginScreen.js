import { SafeAreaView, 
         StyleSheet, 
         TextInput,
          Alert,
          View,
          Text,
          Divider,
          TouchableOpacity,
          
        } from 'react-native'

import React from 'react'
import { useState } from 'react';
import { PageTitle, SubText, Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from '../config/index';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [values, setValues] = React.useState({
      email: "",
      password: ""
  });
    const [errorMessage, setErrorMessage] = useState("");

    const handleForm = (text, eventName) => {
      


      setValues(prevState => ({
          ...prevState,
          [eventName] : text
      }));
  };

  const submitForm = () => {
    console.log("Email: ", form.email);
    console.log("Password: ", form.password);

    axios.post('/users/login', {
            email: form.email,
            password: form.password
        })
         .then((response) => {
            console.log(response.data);
            setErrorMessage("");
            props.onAuthenticated(true, response.data.token);
         })
         .catch((err) => {
            console.error(err);
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
         });
};



  return (

    <LinearGradient
        style={styles.container}
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 0.6, 1]}>
         
        <PageTitle>Login Now</PageTitle>
        <SubText>Sign in to your account!</SubText>
      <View> 
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          value={email}
          id='email'
          required
          
        />          
          
        

        <TextInput
          style={styles.input}
          name="password"
          type="password"
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true} 
          id="password"
          value={password}  
        />
        
        <View>
            <Text style={styles.forgotPassword}>Forgot you password?</Text>
        </View>

        <TouchableOpacity 
          title="Login" 
          style={styles.button}
          onPress={submitForm}
          >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25, width: 320, marginLeft: 24 }}>
            <View style={{flex: 1, height: 2, backgroundColor: '#F89AEE'}} />
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.registerNow}>Or Register</Text>
            </TouchableOpacity>
            </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#F89AEE'}} />
        </View>
      </View>
    
  </LinearGradient>
  

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        height: 55,
        margin: 10,
        padding: 10,
        width: 350,
        borderRadius: 15,
        alignItems: 'center',
        backgroundColor: 'white'
      },
      title: {
        textAlign: 'center',
        marginVertical: 5,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        fontSize: 16,
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold'
        
      },
      button: {
        backgroundColor: '#213681',
        width: 350,
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
        marginLeft:  10
      },
      forgotPassword: {
        color: 'white',
        margin: 14,
        textAlign: 'right'
        
      },
      registerNow: {
        color: 'white',
        textAlign: 'center',
        width: 100,   
        fontWeight: 'bold'
      }

     
      

      
});