import { SafeAreaView, 
         StyleSheet, 
         TextInput,
          Button, 
          Alert,
          Card,
          Title,
          View,
          Text,
          Divider,
          TouchableOpacity,
          Touchable
        } from 'react-native'

import React from 'react'

import { PageTitle, SubText, Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

  return (
    <LinearGradient
        style={styles.container}
        // Background Linear Gradient
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 0.6, 1]}
    >
         
        <PageTitle>Login Now</PageTitle>
        <SubText>Sign in to your account!</SubText>
        <TextInput
          style={styles.input}
          onChangeText={text => setEmail(text)}
          placeholder="Email"
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}   />
      
        <View>
            <Text style={styles.forgotPassword}>Forgot you password?</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
   <Card.Title style={{fontSize: 16, textAlign: 'left'}}>Participating tasks</Card.Title>
   <Card.Title style={{fontSize: 12, textAlign: 'right'}}>View More</Card.Title>        
</View>

        <TouchableOpacity 
          title="Login" 
          style={styles.button}
          onPress={() => Alert.alert('This is the login button')}
          >
          <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
         <Text style={styles.registerNow}>Or Register</Text>
        </TouchableOpacity>

    
  </LinearGradient>
  

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 10,
        padding: 10,
        width: 350,
        borderRadius: 10,
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
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
      },
      forgotPassword: {
        color: 'white',
        margin: 14,
        textAlign: 'right'
      },
      registerNow: {
        color: 'white',
        marginTop: 40,
        
      }

     
      

      
});