import { StyleSheet, 
         TextInput,
          Alert,
          View,
          Text,
          TouchableOpacity,
} from 'react-native'

import React from 'react'
import { PageTitle, SubTextRegister, Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <LinearGradient
        // Background Linear Gradient
        style={styles.container}
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 0.6, 1]}
      >
         
        <PageTitle>Create An Account</PageTitle>
        <SubTextRegister>Please enter the details below!</SubTextRegister>

        <View> 
          <View style={styles.sectionStyle}>
            <Ionicons style={styles.iconStyle} name="person" size={24} color="black" />
              <TextInput
                style={{flex: 1}}
                placeholder="Full Name"
                required
                onChangeText={text => setName(text)}
                underlineColorAndroid="transparent"
                value={name}

              />
          </View>

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
        </View>
       
     
        

        <TouchableOpacity 
          title="Register" 
          style={styles.button}
          onPress={() => Alert.alert('This is the register button')}
          >
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25, width: 320, marginTop: 30 }}>
            <View style={{flex: 1, height: 2, backgroundColor: '#F89AEE'}} />
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginNow}>Or Login</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, height: 2, backgroundColor: '#F89AEE'}} />
        </View>
      
    
    </LinearGradient>
  

  )
}

export default RegisterScreen

const styles = StyleSheet.create({
   
      title: {
        textAlign: 'center',
        marginVertical: 5,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'linear-gradient(red 40%, yellow 30%, blue 65%);',
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
        marginTop: 30
      },
    
      loginNow: {
        color: 'white',
        width: 80,   
        fontWeight: 'bold',
        textAlign: 'center',

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

     
      

      
});