import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { React, useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../config'

import { getData, storeData, removeData, getAllData } from '../config/localStorage';


const HomeScreen = ({ navigation, isLoggedin, isMechanic, props, authUser}) => {
 
  const [ services, setServices ] = useState([]);


  const [ appointments, setAppointments ] = useState([]);
    useEffect(() => {
      getData('token')
        .then((token) => {
          axios.get('/apps/', {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then((res) => {
            console.log(res)
            setAppointments(res.data)
          })
          .catch((err) => {
            console.error(err)
            console.log(err.response.data.message)
          })
        })
        .catch((err) => {
          console.error(err)
          
        })
      
        
    }, []);
  const appointmentList = appointments.map((appointment) => {
    let time_object = new Date();
    time_object.setTime(Date.parse( appointment.start_time ));

    let min = time_object.getUTCMinutes();
    let hour = time_object.getUTCHours();
   
    

    return (
      <View
      style={styles.appointmentBorder}
    >  
      <View>
        <View style={{flexDirection: 'row' }}> 
          <Ionicons name="ios-car-sharp" size={24} color="black" />
          <Text style={{ fontSize: 22, fontWeight: '300', marginLeft: 5}} key={appointment.id}>{appointment.vehicle.make}</Text>
          <Text style={{marginLeft: 5, fontSize: 22, fontWeight: '300',}} key={appointment.id}>{appointment.vehicle.model}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text style={styles.appointmentText}>Reg:</Text>
          <Text style={{ fontSize: 16, fontWeight: '300',}} key={appointment.id}> {appointment.vehicle.reg}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={styles.appointmentText}>Mechanic:</Text>
            <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 5, marginLeft: 5 }}>Danny Thomas </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.appointmentText}>Service:</Text>
          <Text style={{fontSize: 16, fontWeight: '300', marginBottom: 5}} key={appointment.id}> {appointment.service.title}</Text>
        </View>
        <Divider style={styles.dividerStyle } />

        <View flexDirection="row">
          <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 1, marginRight: 3,}}/>  
          <Text style={{color: '#6A5BFF', fontWeight: 400, fontSize: '14px', marginLeft: 2}} key={appointment.id}>{hour}:{min}</Text> 
          {/* <Text style={{color: '#6A5BFF', fontWeight: 400, fontSize: '14'}} key={appointment.id}>{appointment.end_time}</Text>  */}
        </View>
      </View>
      <View
        style={styles.dateBackground}
      >
        {/* <Text style={styles.dateText}key={appointment.id}>{appointment.date}12</Text> */}
        <Text style={styles.dateText}>12</Text>
        <Text style={styles.dateText}>Nov</Text>
      </View>
    </View>
   )
 });
 useEffect(() => {
  getData('token')
    .then((token) => {
      axios.get(`/services/`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res)
        setServices(res.data)
      })
      .catch((err) => {
        console.error(err)
        console.log(err.response.data.message)
      })
    })
    .catch((err) => {
      console.error(err)
      
    })
  
    
}, []);
 

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
              Hi {authUser?.name},{'\n'}Welcome Back!
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
              <TouchableOpacity
                onPress={() => navigation.navigate('BlogPost')}
              >
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
              style={styles.appointmentTitle}>
                  Upcoming Appointments
              </Text>
              { appointmentList }
            
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
                    onPress={() => navigation.navigate('MechanicProfile')} 
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
                    onPress={() => navigation.navigate('MechanicProfile')}
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                      // resizeMode='contain'
                      source={require('../assets/mechanic2.png')} 
                      style={{ marginTop:10, backgroundColor: '#213681', borderRadius: 15,width: 120 ,height: 150}} 
                    />
                  
                      <Text style={{marginTop: 10,  fontWeight: 500}}>John Adams</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                      onPress={() => navigation.navigate('MechanicProfile')}
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Image
                        source={require('../assets/mechanic3.png')} 
                        // resizeMode='contain'
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
           {/* /////////////..PREMIUM..///////////// */}
           <View 
           style={styles.premiumService}
          >
            <View
              style={styles.alignment}
            >
              <Text style={{color: 'white', fontWeight: '600', marginLeft: 12, fontSize: 25}} >Premium</Text>
              <MaterialCommunityIcons name="podium-gold" size={32} color="white" style={{marginRight: 12}} />
            </View>
            <View
                style={styles.listAlignment}
            > 
                <Ionicons name="ios-shield-checkmark" style={styles.premiumIconStyle} />
                <Text style={styles.textServiceStyle}>100 Point check</Text>
            </View>
            <View
                style={styles.listStyle}
            > 
                <Ionicons name="ios-shield-checkmark" style={styles.premiumIconStyle} />
                <Text style={styles.textServiceStyle}>Diagnostic scan/ health check</Text>
                
            </View>
            <View
                style={styles.listStyle}
            > 
                <Ionicons name="ios-shield-checkmark" style={styles.premiumIconStyle} />
                <Text style={styles.textServiceStyle}>12v battery health check</Text>
                
            </View>
            <View
                style={styles.listStyle}
            > 
                <Ionicons name="ios-shield-checkmark" style={styles.premiumIconStyle} />
                <Text style={styles.textServiceStyle}>30 mins test drive including motorway.</Text>
                
            </View>
            <Divider style={{ backgroundColor: 'blue', marginTop: 10 }} />
        
            <Text style={{color: 'white', fontWeight: '600', marginLeft: 12, fontSize: 25, marginTop: 5,}} 
            >Price: &euro;180</Text>
            <TouchableOpacity 
                title="Login" 
                style={styles.button}
                onPress={() => navigation.navigate('AppointmentScreen')}

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
                onPress={() => navigation.navigate('AppointmentScreen')}

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
  appointmentTitle: {
    fontSize: 18, 
    fontWeight: 500, 
    letterSpacing: 1, 
    marginTop: 10,
  },
  dateText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 25,
    alignItems: 'center',
    
  },
  timeText:{
    color: '#6A5BFF', 
    fontWeight: 400, 
    fontSize: 14
  },
  dividerStyle: {
    backgroundColor: 'blue', 
    marginTop: 5, 
    marginBottom: 5
  },
  appointmentBorder: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderRadius: '20',  
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderWidth: '0.2',
    borderColor: '#748c94'
  },
  dateBackground: {
    borderRadius: '10',  
    backgroundColor: '#6A5BFF',
    alignItems: 'center',
    padding: 25,
    marginRight: 5
  },
  premiumService: {
    backgroundColor: '#213681', 
    borderRadius: '20',  
    padding: 20,
    marginTop: 10 
  },
  alignment: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listAlignment: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 12
  },
  listStyle: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 12
  }, 
  textServiceStyle: {
    color: 'white', 
    marginLeft: 10
  },
  premiumIconStyle: {
    fontSize: 20,
    color:'#75BEF4' 
  },
  appointmentText: {
    fontSize: 16, 
    fontWeight: '600', 
    marginBottom: 5,
  }
 
 
  
})