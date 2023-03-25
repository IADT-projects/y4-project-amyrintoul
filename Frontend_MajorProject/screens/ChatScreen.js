import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ChatScreen = () => {
  return (

    <View style={styles.container}>
    <Text>Messenger Screen</Text>
  </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
 
  
})