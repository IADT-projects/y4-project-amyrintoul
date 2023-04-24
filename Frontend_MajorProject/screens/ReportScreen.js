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
import axios from 'axios'
import { getData, storeData, removeData, getAllData } from '../config/localStorage';

const ReportScreen = ({isMechanic, navigation}) => {
  const [ reports, setReports] = useState([]);
  // let time_object = new Date();
  //   time_object.setTime(Date.parse( appointment.start_time ));

  //   let min = time_object.getUTCMinutes();
  //   let hour = time_object.getUTCHours();


  useEffect(() => {
    getData('token')
      .then((token) => {
        axios.get('http://192.168.0.227:3000/api/reports/', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then((res) => {
          console.log(res)
          setReports(res.data)
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

    const ReportList = reports.map((report) => {
      // var date = new Date();

      // date.setDate(Date.parse(report.date));

      // var year = date.getUTCFullYear;
      // var day = date.getUTCDay;
      // var month = date.getUTCMonth;

      let report_date = dayjs(report.date).format('ddd DD, MM-YYYY');

      console.log(report_date);


      // report_date = "test";

      return (
        <TouchableOpacity
        onPress={() => navigation.navigate('SingleReport')}
        >
        <View 
        style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <Text style={styles.make} key={report.id}>{report.vehicle.make}</Text>
          <Text style={{marginBottom: 5 , color: 'grey'}} key={report.id}>Reg: {report.vehicle.reg}</Text> 
          {/* <Text style={{marginBottom: 5 , color: 'grey'}} key={report.id}>Mechanic: {report.user.name}</Text>  */}
          {/* <TouchableOpacity
          onPress={() => navigation.navigate('SingleReport')}
          >
              <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <Entypo name="forward" size={24} color="grey"  />
              </View>   
              </TouchableOpacity>    */}
          <Divider style={{ backgroundColor: 'blue' }} />

          <View style={{flexDirection: "row", marginTop: 5}}>
            <MaterialIcons name="date-range" size={14} color="#6A5BFF" style={{marginTop: 6}} />   
            <Text style={styles.date} key={report.id}>{report_date}</Text> 
            <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 6, marginLeft: 10}} />  
            <Text style={styles.date}>time</Text> 
          </View>
        </View>
        </TouchableOpacity>
      )
    })
    const [ appointments, setAppointments] = useState([]);

    useEffect(() => {
      getData('token')
        .then((token) => {
          axios.get('http://192.168.0.227:3000/api/apps/', {
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
              <MaterialIcons name="date-range" size={14} color="#6A5BFF" style={{marginTop: 6}} />   
              <Text style={styles.date} key={appointment.id}>{date}</Text> 
              <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 6, marginLeft: 10}} />  
              <Text style={styles.date} key={appointment.id}>{hour}: {min}</Text> 
            </View>
          </View>
        )
      })

    let mechanicText = (
      <SafeAreaView style={styles.container}>
      <View>
        <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Reports</Text>
          { ReportList }
        </View>
      </SafeAreaView>
    )

    if (isMechanic) {
      mechanicText = (
      <SafeAreaView>
        <View>
          <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Appointments</Text>
          { AppointmentList }
       </View>
      </SafeAreaView>
       
       ) 
    } 

  return (
    
    <SafeAreaView style={styles.container}>
     <ScrollView
        indicatorStyle="black"
      >
        { mechanicText}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReportScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffff'
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
    marginTop: 5
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