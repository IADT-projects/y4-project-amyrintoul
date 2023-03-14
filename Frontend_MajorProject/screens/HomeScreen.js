import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaProvider style={styles.container}>
        <StatusBar style='dark-content'/>
        <View
          style={{
            width: '100%',
            marginTop: 45,
            padding: 10,
           
          }}
        > 
            <Text 
              style={{
                fontSize: 26, 
                fontWeight: 500, 
                letterSpacing: 1, 
                padding: 10, 
                marginBottom: 10
              }}
            >
              Hi Christine,{'\n'}Welcome Back!
            </Text>

            <View
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                backgroundColor: '#213681',
                borderRadius: '25',  
                alignItems: 'center',
                padding: 10,
                ...styles.shadow
                
                
            
              }}
            >  
            <View >
            <Image
                  source={require('../assets/truck.png')} 
                  style={{width: 190, height: 100, marginTop:10, 
                }}  
                />
            </View>
             <View style={{padding: 15, marginRight:10}}>
             <Text style={{color: 'white', marginTop: 10, fontSize: 20, fontWeight: '500'}}>Simply ways for{'\n'}a healthier cars</Text>
              <Text style={{color: 'white', marginTop: 5}}>Click here to view more {'\n'}about this</Text>
              <TouchableOpacity>
              <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Entypo name="forward" size={24} color="white"  />
              </View>   
              </TouchableOpacity>   
              </View>
           </View>
          {/* ........APPOINTMENTS........ */}
           <View
              style={{
                width: '100%',
                padding: 10,
              }}
            >
              <Text 
              style={{
                fontSize: 18, 
                fontWeight: 500, 
                letterSpacing: 1, 
                marginTop: 10,
                }}>
                  Upcoming Appointments
              </Text>
              <View
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                borderRadius: '20',  
                alignItems: 'center',
                padding: 20,
                marginTop: 20,
                borderWidth: '0.2',
                borderColor: '#748c94'
                
                
            
              }}
            >  
              <View>

                <Text style={{color: 'black',fontSize: 16, fontWeight: '500', marginBottom: 5}}>
                     Appointment with John
                </Text>
                <Text>13:00PM - 15:00</Text>
              </View>
              <View
              style={{
                borderRadius: '10',  
                backgroundColor: '#6A5BFF',
                alignItems: 'center',
                padding: 10,
                marginRight: 5
              }}
              >
                <Text style={styles.dateText}>12</Text>
                <Text style={styles.dateText}>Nov</Text>
              </View>
            </View>
            
           </View>
           <View
              style={{
                width: '100%',
                padding: 10,
              }}
            >
              <Text 
              style={{
                fontSize: 18, 
                fontWeight: 500, 
                letterSpacing: 1, 
                marginTop: 10,
                }}>
                  Meet The Team
              </Text>
           </View>

           {/* ..........SERVICE............ */}
           <View
              style={{
                width: '100%',
                padding: 10,
              }}
            >
              <Text 
              style={{
                fontSize: 18, 
                fontWeight: 500, 
                letterSpacing: 1, 
                marginTop: 10,
                }}>
                  Choose A service
              </Text>
           </View>
           {/* /////////////..GOLD..///////////// */}
           <View
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                backgroundColor: '#213681',
                borderRadius: '20',  
                alignItems: 'center',
                padding: 20,
                marginTop: 10
                
                
            
              }}
            >  
              <View>
                <Text style={{color: 'white', fontWeight: '500'}}>GOLD</Text>
              </View>
              
            </View>
            {/* /////////////..SILVER..///////////// */}
            <View
              style={{
                flexDirection: 'row', 
                justifyContent: 'space-between',
                borderRadius: '20',  
                borderWidth: 0.2,
                alignItems: 'center',
                padding: 20,
                marginTop: 20,
                
                
            
              }}
            >  
            <View>
              <Text style={{color: 'black', fontWeight: '500'}}>SILVER</Text>
            </View>
            </View>
            
           
           
      </View>    
    </SafeAreaProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
    
  },
  shadow: {
    shadowColor:'#929CC1',
    shadowOffset: {
      width: 0, 
      height: 9,

    },
    shadowOpacity: 1, 
    shadowRadius: 3.5, 
    elevation: 8 

  },
  button: {
    backgroundColor: '#75BEF4',
    width: 350,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginLeft:  10
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold'
    
  },
  dateText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
    alignItems: 'center',
    
  }
 
  
})