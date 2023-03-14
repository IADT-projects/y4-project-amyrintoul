import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Appointment Screen</Text>
    </View>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
 
  
})