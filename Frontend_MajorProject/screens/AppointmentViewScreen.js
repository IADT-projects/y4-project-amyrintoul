import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
  
} from 'react-native';
import dayjs from 'dayjs';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'
import axios from '../config'
import { getData, storeData, removeData, getAllData } from '../config/localStorage';

const AppointmentViewScreen = ({isMechanic, navigation}) => {
 
    const [ appointments, setAppointments] = useState([]);

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
    
      const AppointmentList = appointments.map((appointment) => {
        let date = dayjs(appointment.date).format('ddd DD, MM-YYYY');
        let time_object = new Date();
        time_object.setTime(Date.parse( appointment.start_time ));

        let min = time_object.getUTCMinutes();
        let hour = time_object.getUTCHours();
   

        return (
          <View 
          key={appointment.id}
          style={{
            backgroundColor: 'white',
            borderRadius: 15,
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16, 
            ...styles.shadow
          }}>
            <View style={{flexDirection: 'row' }}> 
              <Ionicons name="person" size={24} color="black" style={{marginRight: 5}}/>
              <Text style={styles.make} key={appointment.id}>{appointment.customer.name}</Text>
            </View>
            <View style={{flexDirection: 'row' }}> 
              <Text style={{marginBottom: 5 , marginTop: 5, color: 'grey', fontWeight: 600}}>Reg:</Text>
              <Text style={{marginBottom: 10 , marginTop: 5, color: 'grey'}} key={appointment.id}> {appointment.vehicle.reg} </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginBottom: 5 ,  color: 'grey', fontWeight: 600}}>Make:</Text>
              <Text style={{marginBottom: 10 , color: 'grey'}} key={appointment.id}> {appointment.vehicle.make} </Text>
              <Text style={{marginBottom: 10 , color: 'grey'}} key={appointment.id}> {appointment.vehicle.model} </Text> 
            </View>
            <View style={{flexDirection: 'row' }}> 
              <Ionicons name="location" size={16} color="grey" />
              <Text style={{marginBottom: 10 , color: 'grey'}} key={appointment.id}> {appointment.location} </Text> 
            </View>
            <View style={{flexDirection: 'row' }}> 
              <Text style={{marginBottom: 5 , color: 'grey', fontWeight: 600}}>Service:</Text>
              <Text style={{marginBottom: 5 , color: 'grey'}} key={appointment.id}> {appointment.service.title}</Text>
              <Text style={{marginBottom: 5 , color: 'grey', fontWeight: 600, marginLeft: 5}}>Status:</Text>
              <Text style={{marginBottom: 5 , color: 'grey'}} key={appointment.id}> {appointment.status}</Text>
            </View> 
            <Divider style={{ backgroundColor: 'blue' }} />
            
            <View style={{flexDirection: "row", marginTop: 5}}>
              <MaterialIcons name="date-range" size={14} color="#6A5BFF" style={{marginTop: 10}} />   
              <Text style={styles.date} key={appointment.id}>{date}</Text> 
              <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 10, marginLeft: 10}} />  
              <Text style={styles.date} key={appointment.id}>{hour}: {min}</Text> 

              <TouchableOpacity 
                title="CreateReport" 
                style={styles.button}
                onPress={() => navigation.navigate('Report', {
                  customer: appointment.customer,
                  vehicle: appointment.vehicle
                })}
                >
                <Text style={styles.text}>Create Report</Text>
              </TouchableOpacity>  
            </View>
          </View>
        )
      })

    

  return (
    
    <SafeAreaView style={styles.container}>
     <ScrollView
        indicatorStyle="black"
      >
        <View>
          <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Appointments</Text>
          { AppointmentList }
       </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppointmentViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffff'
  },
  button: {
    backgroundColor: '#213681',
    width: 110,
    height: 25,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 40,    
  },
  text:{ 
    color: 'white',
    fontWeight: '600',
    marginTop: 3
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },
  make: {
    fontSize: 24,
  },
  date: {
    fontSize: 14,
    color: '#6A5BFF',
    marginLeft: 3,
    marginTop: 10
  },
  shadow: {
    shadowColor:'#BCBCBC',
    shadowOffset: {
      width: 4, 
      height: 7,

    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 8

  }
});