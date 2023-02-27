import { SafeAreaView, 
         StyleSheet, 
         TextInput,
          Button, 
          Alert
        } from 'react-native'

import React from 'react'

const LoginScreen = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
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
        onPress={() => Alert.alert('This is the login button')}
        color="#841584"
      />
  </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      title: {
        textAlign: 'center',
        marginVertical: 5,
      },
});