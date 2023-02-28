import { SafeAreaView, 
         StyleSheet, 
         TextInput,
          Button, 
          Alert,
          View
        } from 'react-native'

import React from 'react'
import { PageTitle, SubText, Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

  return (
           <LinearGradient
        // Background Linear Gradient
        style={styles.container}
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 0.6, 1]}
      >
         
        <PageTitle>Login Now</PageTitle>
        <SubText>Please enter the details below to continue.</SubText>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder="Email"
      value={text}
    />
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="Password"
      keyboardType="numeric"
    />
    <Button
        title="Login"
        style={styles.button}
        onPress={() => Alert.alert('This is the login button')}
        color="white"
    />
    </LinearGradient>
  

  )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: 350,
        borderRadius: 8,
        alignItems: 'center'
      },
      title: {
        textAlign: 'center',
        marginVertical: 5,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'linear-gradient(red 40%, yellow 30%, blue 65%);',
      }
      
});