import { StyleSheet, Text, View, SafeAreaProvider} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../navigation/tabs'


const SingleReport = () => {
  return (
    <View style={styles.container}>
        <Text>This is the reports single page</Text>      
    </View>
  )
}

export default SingleReport

const styles = StyleSheet.create({
  container: {
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
 
  
})