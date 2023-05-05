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

const ReportScreen = ({isMechanic, navigation}) => {
  const [ reports, setReports] = useState([]);

  useEffect(() => {
    getData('token')
      .then((token) => {
        axios.get('/reports/', {
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
      let report_date = dayjs(report.date).format('ddd DD, MM-YYYY');
      console.log(report_date);


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
    

    

  return (
    
    <SafeAreaView style={styles.container}>
     <ScrollView
        indicatorStyle="black"
      >
       <View>
         <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Reports</Text>
           { ReportList }
         </View>
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