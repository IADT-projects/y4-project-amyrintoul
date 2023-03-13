import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnotherScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Another Screen</Text>
    </View>
  )
}

export default AnotherScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
})