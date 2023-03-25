import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'




const HomeScreen = ({ navigation, isLoggedin, isMechanic}) => {

  return (
    <SafeAreaProvider style={styles.container}>
    <ScrollView
          indicatorStyle="black"
    >
  
     <StatusBar style='dark-content'/>
      <View
          style={{
            width: '100%',
            marginTop: 45,
            padding: 10,
           
          }}
        >   
          {/* .....WELCOME TEXT......  */}
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
            {/* .....CARD...... */}
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
                  <View style={{flexDirection: 'row' }}> 
                    <Text style={{fontSize: 18, fontWeight: '500',}}>Mechanic: </Text>
                    <Text style={{marginLeft: 5, fontSize: 18, fontWeight: '300',}}>Danny Ryan</Text>
                  </View>


                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, }}>
                        Make: 
                      </Text>
                      <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 5, marginLeft: 5 }}>
                        Audi A1.
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 5, marginLeft: 8}}>
                      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 5, }}>
                        Reg: 
                      </Text>
                      <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 5, marginLeft: 5 }}>
                        131-D-29019.
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 5}}>
                    Service: 
                  </Text>
                  <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 5}}> Elite</Text>
                  </View>
                  <Divider style={{ backgroundColor: 'blue', marginTop: 5, marginBottom: 5 }} />

                  <View flexDirection="row">
                  <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 1, marginRight: 3,}}/>  
                  <Text style={{color: '#6A5BFF', fontWeight: 400, fontSize: 14}}>12:00am, 40mins</Text>
                  </View>
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
              {/* ..........MEET THE TEAM............ */}
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
                  }}
              >
                  Meet The Team
              </Text>
              <View
                style={{
                  flexDirection: 'row', 
                  justifyContent: 'space-between',
                }}
              >
                <View >
                <TouchableOpacity
                    title="Mechanic"
                    onPress={() => navigation.navigate('AnotherScreen')} 
                     style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        source={require('../assets/mechanic1.png')} 
                        resizeMode='cover'
                        style={{ marginTop:10, backgroundColor: '#75BEF4', borderRadius: 15, width: 120 ,height: 150}} 
                      />
                        <Text style={{marginTop: 10, fontWeight: 500}}>Danny Ryan</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('AnotherScreen')}
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      resizeMode='contain'
                      source={require('../assets/mechanic1.png')} 
                      
                      style={{ marginTop:10, backgroundColor: '#213681', borderRadius: 15,width: 120 ,height: 150}} 
                    />
                  
                      <Text style={{marginTop: 10,  fontWeight: 500}}>John Adams</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                      onPress={() => navigation.navigate('AnotherScreen')}
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        source={require('../assets/mechanic1.png')} 
                        resizeMode='contain'
                        style={{ marginTop:10, backgroundColor: '#75BEF4', borderRadius: 15, width: 120 ,height: 150}} 
                      />
                    
                        <Text style={{marginTop: 10, fontWeight: 500}}>Danny Ryan</Text>
                  </TouchableOpacity>
                </View>
                                
              </View>
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
                  Choose a service
              </Text>
           </View>
           {/* /////////////..GOLD..///////////// */}
          <View 
           style={{
            backgroundColor: '#213681', 
            borderRadius: '20',  
            padding: 20,
            marginTop: 10
            
            }}
          >
            <View
              style={{
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{color: 'white', fontWeight: '600', marginLeft: 12, fontSize: 25}}>Premium</Text>
              <MaterialCommunityIcons name="podium-gold" size={32} color="white" style={{marginRight: 12}} />
            </View>
            <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 15,
                  marginLeft: 12
                }}
            > 
                <Ionicons name="ios-shield-checkmark" size={20} color="#75BEF4" />
                <Text style={{color: 'white', marginLeft: 10}}>100 Point check over</Text>
            </View>
            <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 12
                }}
            > 
                <Ionicons name="ios-shield-checkmark" size={20} color="#75BEF4" />
                <Text style={{color: 'white', marginLeft: 10}}>Diagnostic scan/ health check</Text>
                
            </View>
            <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 12
                }}
            > 
                <Ionicons name="ios-shield-checkmark" size={20} color="#75BEF4" />
                <Text style={{color: 'white', marginLeft: 10}}>12v battery health check</Text>
                
            </View>
            <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 12
                }}
            > 
                <Ionicons name="ios-shield-checkmark" size={20} color="#75BEF4" />
                <Text style={{color: 'white', marginLeft: 10}}>30 mins test drive including motorway.</Text>
                
            </View>
            <Divider style={{ backgroundColor: 'blue', marginTop: 10 }} />
            

            <Text style={{color: 'white', fontWeight: '600', marginLeft: 12, fontSize: 25, marginTop: 5,}}>Price: €180</Text>
            <TouchableOpacity 
                title="Login" 
                style={styles.button}
                >
                <Text style={styles.text}>Get Started</Text>
              </TouchableOpacity> 
            
          </View>

            {/* /////////////..ELITE..///////////// */}
            <View
              style={{
                borderRadius: '20',  
                padding: 20,
                marginTop: 20,
                borderWidth: '0.3',
                marginBottom: 30
                
            
              }}
            >  
              <View
              style={{
                flexDirection: 'row', 
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              >
              <Text style={{color: 'black', fontWeight: '600',marginLeft: 12, fontSize: 25}}>Elite</Text>
              <MaterialCommunityIcons name="podium-silver" size={30} color="black" style={{marginRight: 12}} />
              </View>

              <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 15,
                  marginLeft: 12
                }}
              > 
                <Ionicons name="ios-shield-checkmark" size={20} color="#6A5BFF" />
                <Text style={{ marginLeft: 10}}>Basic 50 point check</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginLeft: 12,
                  marginTop: 5,
                }}
              > 
                <Ionicons name="ios-shield-checkmark" size={20} color="#6A5BFF" />
                <Text style={{ marginLeft: 10}}>Road Test Drive</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 12
                }}
              > 
                <Ionicons name="close-circle" size={20} color="grey" />
                <Text style={{ marginLeft: 10}}>12v Battery health check</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 12
                }}
              > 
              <Ionicons name="close-circle" size={20} color="grey" />
                <Text style={{ marginLeft: 10}}>Diagnostic Scan / Health Scan</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row', 
                  alignItems: 'center',
                  marginTop: 5,
                  marginLeft: 12
                }}
              > 
                <Ionicons name="close-circle" size={20} color="grey" />
                <Text style={{ marginLeft: 10}}>Motorway test drive</Text>
              </View>
              <Divider style={{ backgroundColor: 'blue', marginTop: 10 }} />

              <Text style={{color: 'black', fontWeight: '600',marginLeft: 12, fontSize: 25, marginTop: 10, marginBottom: 10}}>Price: €100</Text>

              
              <TouchableOpacity 
                title="Get S" 
                style={styles.buttonElite}
                >
                <Text style={styles.text}>Get Started</Text>
              </TouchableOpacity> 

            </View>
            
           
      
      </View> 
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
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
    height: 55,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginLeft:  10
  },
  buttonElite: {
    backgroundColor: '#6A5BFF',
    width: 350,
    height: 55,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginLeft:  10
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 17,
    fontWeight: 'bold'
    
  },
  dateText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 22,
    alignItems: 'center',
    
  }
 
  
})