import { StyleSheet, TextInput, View, TouchableOpacity , Text} from 'react-native'
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'



const data = [ 
  {label: 'Premium', value: '1'},
  {label: 'Elite', value: '2'}
];
const mechanic = [
  {name: 'Danny Rintoul', value1: '1'},
  {name: 'John Andrews', value1: '2'},
  {name: 'Jamie Donaldson', value1: '3'}
]

const AppointmentScreen = () => {
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [isFocus, setIsFocus] = useState(false);


    

    
  return (

    <SafeAreaProvider style={styles.container}>
       <Text 
              style={{
                fontSize: 26, 
                fontWeight: 500, 
                letterSpacing: 1, 
                padding: 10, 
                marginBottom: 10
              }}
            >
              Book An Appointment
        </Text>
       <Dropdown
          style={[styles.dropdownMechanic, isFocus && { borderColor: '#213681' }]}
          placeholderStyle={styles.placeholderStyleMechanic}
          selectedTextStyle={styles.selectedTextStyleMechanic}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyleMechanic}
          data={mechanic}
          search
          maxHeight={300}
          labelField="name"
          valueField="value1"
          placeholder={!isFocus ? 'Select Mechanic' : '...'}
          searchPlaceholder="Search..."
          value={value1}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue1(item.value1);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            
            <MaterialIcons 
              name="engineering" 
              style={styles.icon}
              color={isFocus ? '#75BEF4' : 'black'}
              size={25}
            />
          
          )}
        />
        <Dropdown
          style={[styles.dropdownService, isFocus && { borderColor: 'red' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Service' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? '#75BEF4' : 'white'}
              name="Safety"
              size={20}
            />
          )}
        />
        <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Registration"
              required

            />
        </View>    
        <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Location"
              required

            />
        </View>  
        <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Date"
              required

            />
        </View>  
        <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="Time"
              required

            />
        </View>  
        <View style={styles.sectionStyle}>
            <TextInput
              style={{flex: 1}}
              placeholder="End Time"
              required

            />
        </View>  
       <TouchableOpacity 
          title="BookApoointment" 
          style={styles.button}
          >
          <Text style={styles.text}>Book Appointment</Text>
        </TouchableOpacity>  
    </SafeAreaProvider>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 60,
    width: 350,
    borderRadius: 15,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray'
  },
  button: {
    backgroundColor: '#75BEF4',
    width: 350,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold'
    
  },
  dropdownService: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 15,
    paddingHorizontal: 8,
    width: 350,
    backgroundColor: '#213681',
    color: 'white',
  	margin: 5
  },
  dropdownMechanic: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 15,
    paddingHorizontal: 8,
    width: 350,
  	margin: 5
  },
  placeholderStyleMechanic: {
    fontSize: 16,
    color: 'black'

  },
  selectedTextStyleMechanic: {
    fontSize: 16,
    color: 'black'

  },
  iconStyleMechanic: {
    width: 20,
    height: 20,
    tintColor: 'black'
  },
  icon: {
    marginRight: 5,
    marginLeft: 8
  },

  placeholderStyle: {
    fontSize: 16,
    color: 'white',

  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white'

  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: '#ffffffff'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10
  },
 
  
})