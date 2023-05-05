import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


const MechanicHome = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Text>Mechanic Home Page</Text>
    </SafeAreaView>
  )
}

export default MechanicHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
})