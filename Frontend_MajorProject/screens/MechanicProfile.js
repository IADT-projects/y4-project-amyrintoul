import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import Tabs from '../navigation/tabs';

const MechanicProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
       <StatusBar style="light"/>
       <View>
      <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Mechanic Profile</Text>
    </View>
      <View style={{backgroundColor: 'white', borderRadius: 20,  padding: 40, marginTop: 50,...styles.shadow}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Avatar
            size="medium"
            rounded
            source={require('../assets/mechanic1.png')} 
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.cardTitle}>Name</Text>       
        </View>
        <Text style={styles.cardText}>Jamie Donaldson</Text>

        <Text style={styles.cardTitle}>Experience</Text>
          <Text style={styles.cardText}>15+ Years in Mechanics,{'\n'}Master Technician,{'\n'}Expertise in Hyundai, kia or BMW.</Text>
        <Text style={styles.cardTitle}>Email</Text>
          <Text  style={styles.cardText}>jamiedonaldson95@gmail.com</Text>

        <Text style={styles.cardTitle}>Phone Number</Text>
          <Text style={styles.cardText}>(+353) 878935348</Text>
{/* 
        <Text style={styles.cardTitle}>Certificate</Text>
          <Text  style={styles.cardText}></Text> */}
        
        <Text style={styles.cardTitle}>Recommended</Text>
        <View style={{flexDirection: 'row'}}>
          <FontAwesome name="star" size={24} color="#75BEF4" />
          <FontAwesome name="star" size={24} color="#75BEF4" style={{marginLeft: 2}} />
          <FontAwesome name="star" size={24} color="#75BEF4"  style={{marginLeft: 2}}/>
          <FontAwesome name="star-half-empty" size={24} color="#75BEF4"style={{marginLeft: 2}} />
          <FontAwesome name="star-o" size={24} color="#75BEF4"style={{marginLeft: 2, marginBottom: 10}} />
          </View>


        <TouchableOpacity 
          title="Book Appointment" 
          style={styles.buttonApp}
          onPress={() => navigation.navigate('AppointmentScreen')}

          
        >
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}

export default MechanicProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  buttonApp: {
    backgroundColor: '#6A5BFF',
    width: 250,
    height: 55,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginLeft:  2
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    marginTop: 17,
    fontWeight: 'bold'
    
  },
  cardTitle: { 
    marginBottom: 5, 
    fontSize: 20, 
    fontWeight: 600
  },
  cardText: {
    marginBottom: 10, 
    fontSize: 16, 
    color: 'grey'
  },
  shadow: {
    shadowColor:'#BCBCBC',
    shadowOffset: {
      width: 0, 
      height: 9,

    },
    shadowOpacity: 1, 
    shadowRadius: 3.5, 
    elevation: 8 

  },
})