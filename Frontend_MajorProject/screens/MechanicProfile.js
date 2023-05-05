import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Image} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import Tabs from '../navigation/tabs';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const MechanicProfile = () => {

  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeholder: "Search"
      },
      title: 'test'
    })
  }, [navigation])
  return (
    <View style={styles.container}>
       <StatusBar style="light"/>
       <View style={{ alignItems: 'center'}}>
       <LinearGradient
        style={{height: 180,alignItems: 'center',borderBottomLeftRadius: 30, borderBottomRightRadius: 30, width: 440}}      
        colors={["#0F0445","#1F317B", "#75BEF4", "#6A5BFF"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0, 0.22, 1., 1]}
    >
        <Text style={{color: 'white', fontSize: 30, marginTop: 80, fontWeight: 600}}>Mechanic Profile</Text>
        </LinearGradient>
       </View>
       
    
      <View style={{backgroundColor: 'white', width: 350, marginLeft: 40, borderRadius: 20,  padding: 40, marginTop: 70,...styles.shadow}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Avatar
            rounded
            source={require('../assets/mechanic1.png')} 
            style={{
              width: 50,
              height:70,
              borderRadius: 80,
              resizeMode:'contain',
              margin:8}}
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
    backgroundColor: 'white'
  },
  buttonApp: {
    backgroundColor: '#6A5BFF',
    width: 275,
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