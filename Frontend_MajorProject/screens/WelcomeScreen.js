import { SafeAreaView, 
         StyleSheet,  
          Alert,
          View,
          Text,
          Image,
          TouchableOpacity,
        } from 'react-native'

import React from 'react'

import { Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = ({navigation}) => {
    

  return (
    <LinearGradient
        style={styles.container}
        // Background Linear Gradient
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 0.6, 1]}
    >
      <View>
         <Image
        style={styles.logo}
        source={require('../assets/blueCar.png')} 
        />
      </View>
      <Text style={styles.welcomeText}>
            Why Get Your
            {'\n'}
            Car Inspected?
      </Text>
 
      <Text style={styles.subText}>There were over 115,000  
      {'\n'}
      used vehicles sold in Ireland in 2019
          {'\n'}
          meaning that there are thousands of 
          {'\n'}
          or sale that potentially have issues 
          {'\n'}
          many may be unaware of.
      </Text>
  
        <TouchableOpacity 
          title="Get Started" 
          style={styles.button}
          onPress={() => navigation.navigate('SecondScreen')}
          >
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>

        

    
  </LinearGradient>
  

  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    
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
        backgroundColor: '#0F0445',
        width: 210,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10
      },
      logo: {
        width: 500,
        height: 250,
        justifyContent: 'flex-end',
        marginLeft: 110
      },
      subText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,  
        
      },
      welcomeText: {
        fontSize: 35,
        marginTop: 25,
        marginBottom: 15,
        fontWeight: 'bold', 
        color: 'white',
        textAlign: 'center'

      },
      

     
      

      
});