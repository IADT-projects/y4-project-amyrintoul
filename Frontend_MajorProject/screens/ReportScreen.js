import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-elements'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    make: 'Audi A1',
    date: 'Friday, 08 July 2020',
    time: '12:00am',
    reg: '161-D-12302'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    make: 'Golf',
    date: 'Saturday, 10 June 2021',
    time: '12:00am',
    reg: '131-LD-23029'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    make: 'Voslkwagen',
    date: 'Monday, 13 June 2021',
    time: '12:00am',
    reg: '191-WW-12302'
  },
];

const Item = ({make, date, time, reg}) => (
  <View 
  style={{
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16, 
    ...styles.shadow
  }}>
    <Text style={styles.make}>{make}</Text>
    <Text style={{marginBottom: 5 , color: 'grey'}}>Reg: {reg}</Text>
    <Divider style={{ backgroundColor: 'blue' }} />

    <View
    style={{flexDirection: "row", marginTop: 5}}>
    <MaterialIcons name="date-range" size={14} color="#6A5BFF" style={{marginTop: 6}} />   
     <Text style={styles.date}>{date}</Text> 
     <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 6, marginLeft: 10}} />  
        <Text style={styles.date}>{time}</Text> 

    </View>
  </View>


);


const ReportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Reports</Text>
    <FlatList
        data={DATA}
        renderItem={({item}) => <Item make={item.make} date={item.date} time={item.time} reg={item.reg} /> }
        keyExtractor={item => item.id}
      />
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
    fontSize: 28,
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