import { StyleSheet, Text, View, SafeAreaProvider} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../navigation/tabs'


const ShowTab = () => {
  return (
      <Tabs/>
  )
}

export default ShowTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
})