import { SafeAreaView, 
         StyleSheet,  
          Alert,
          View,
          Text,
          Image,
          TouchableOpacity,
        } from 'react-native'

import React from 'react'

import { PageTitle, SubText, Background} from '../components/styles';
import { LinearGradient } from 'expo-linear-gradient';

const SecondScreen = ({navigation}) => {
    

  return (
    <LinearGradient
        style={styles.container}
        // Background Linear Gradient
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 0.6, 1]}
    >
         
       
        
        <Image
        // style={styles.tinyLogo}
        style={styles.vanLogo}
        source={require('../assets/truck.png')}
        
      />
      <Text style={styles.welcomeText}>
            Vehicle Types
      </Text>

 
                <View
      style={{
        flexDirection: 'row',
        height: 180,
        width: 350,
      }}>
      
      <Text style={styles.subText}>We carry out vehicle inspections on all types of vehicles including city cars, SUVs, and commercial vehicles. 
      Our team has experience in all types of vehicles and our inspections are built around the vehicles   </Text>
    </View>
      
        
        <TouchableOpacity 
          title="Get Started" 
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
          >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>

        

    
  </LinearGradient>
  

  )
}

export default SecondScreen

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
        width: 200,
        height: 60,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10
      },
      vanLogo: {
        width: 500,
        height: 280,
        justifyContent: 'flex-end',
        marginLeft: 150
      
      },
      welcomeText: {
        fontSize: 35,
        marginTop: 20,
        marginBottom: 15,
        fontWeight: 'bold', 
        color: 'white',
        textAlign: 'center'

      },
      subText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,  
        
      },

     
      

      
});