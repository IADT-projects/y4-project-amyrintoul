import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const ChatScreen = () => {
  return (
    // <LinearGradient
    //     style={styles.container}
    //     // Background Linear Gradient
    //     colors={["#213681","#0F0445"]}
    //     start={{x: 0, y: 0}}
    //     end={{x: 1, y: 1}}
    //     locations={[0, 0.22, ]}
    // >
    <View style={styles.container}>
    <Text>Another Screen</Text>
  </View>
  //     </LinearGradient>
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