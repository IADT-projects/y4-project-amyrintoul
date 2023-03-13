import { StyleSheet, 
         TextInput,
          View,
          Text,
          TouchableOpacity,
} from 'react-native'
import React, { useContext, useState } from 'react'
import { PageTitle, SubText, Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
// import axios from '../config/index';
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('rintoulamy7@gmail.com');
    const [password, setPassword] = useState('password');
   
  //   const [values, setValues] = React.useState({
  //     email: "",
  //     password: ""
  // });
    const [errorMessage, setErrorMessage] = useState("");

    
    const submitForm = () => {
      console.log("Email: ", email);
      console.log("Password: ", password);

      axios.post('http://192.168.0.227:3000/api/users/login/', {
              email: email,
              password: password
          })
           .then((response) => {
              console.log(response.data);
              // setErrorMessage("");
              // props.onAuthenticated(true, response.data.token);
           })
           .catch((err) => {
              console.error(err);
              // console.log(err.response.data);
              // setErrorMessage(err.response.data.message);
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
        <View style={styles.sectionStyle}>
            <AntDesign style={styles.iconStyle} name="mail" size={24} color="black" />
            <TextInput
              style={{flex: 1}}
              placeholder="Email"
              required
              onChangeText={text => setEmail(text)}
              underlineColorAndroid="transparent"
            />
        </View>
      

        <View style={styles.sectionStyle}>
            <AntDesign style={styles.iconStyle} name="lock1" size={24} color="black" />
            <TextInput
              style={{flex: 1}}
              placeholder="Password"
              required
              secureTextEntry={true}           
              onChangeText={text => setPassword(text)}

            />
        </View>     
          
        
        
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
            <View style={{flex: 1, height: 2, backgroundColor: '#213681'}} />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerNow}>Or Register</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#213681'}} />
        </View>
    </View>
    
  </LinearGradient>
  

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    
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
        fontSize: 18,
        color: 'white',
        marginTop: 20,
        fontWeight: 'bold'
        
      },
      button: {
        backgroundColor: '#213681',
        width: 350,
        height: 60,
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
      },
      passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
      },
      sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        width: 350,
        borderRadius: 15,
        margin: 10,
      },
      iconStyle: {
        padding: 1,
        height: 25,
        width: 25,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 5
      },
      logo: {
        width: 200,
        height: 100,
        justifyContent: 'flex-end',
        marginBottom: 20
      },

     
      

      
});