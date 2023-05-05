import { StyleSheet, TextInput, View , Text, ScrollView, SafeAreaView, Keyboard, TouchableOpacity, StatusBar} from 'react-native'
import React, { useState } from 'react';
import { CheckBox} from '@rneui/themed';
import { Divider } from 'react-native-elements'
import axios from '../config'
import { getData, storeData, removeData, getAllData } from '../config/localStorage';


const AddReportScreen = ({route}) => {
  const [selectedMileage, setMileage] = React.useState(0);
  const [selectedLights, setLights] = React.useState(0);
  const [selectedWindscreen, setWindscreen] = React.useState(0);
  const [selectedWipers, setWipers] = React.useState(0);
  const [selectedHorn, setHorn] = React.useState(0);
  const [selectedAc, setAc] = React.useState(0);
  const [selectedAirFilter, setAirFilter] = React.useState(0);
  const [selectedOilFluids, setOilFluids] = React.useState(0);
  const [selectedBelts, setBelts] = React.useState(0);
  const [selectedSuspension, setSuspension] = React.useState(0);
  const [selectedSteering, setSteering] = React.useState(0);
  const [selectedExhaust, setExhaust]= React.useState(0);
  const [selectedTestDrive, setTestDrive]= React.useState(0);
  const [selectedDiagnostics, setDiagnostics]= React.useState(0);
  const [selectedBodyWork, setBodyWork ] = React.useState(0);
  const [selectedTyresFrontLeft, setTyresFrontLeft ] = React.useState(0);
  const [selectedTyresFrontRight, setTyresFrontRight ] = React.useState(0);
  const [selectedTyresBackLeft, setTyresBackLeft ] = React.useState(0);
  const [selectedTyresBackRight, setTyresBackRight ] = React.useState(0);
  const [selectedBrakesFront, setBrakesFront ] = React.useState(0);
  const [selectedBrakesBack, setBrakesBack ] = React.useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const { customer, vehicle } = route.params;



  
  const numToColor = (num) => {
    if(num === 1) return "Yellow";
    else if(num === 2) return "Red";
    else return "Green";
  }
  

  const submitForm = () => {
    // console.log("Email: ", email);
    // console.log("Password: ", password);

    getData('token')
        .then((token) => {
          axios.post('/reports/', 
          {
            customer: customer._id,
            vehicle: vehicle._id,
            mileage: numToColor(selectedMileage),
            lights: numToColor(selectedLights),
            windscreen: numToColor(selectedWindscreen),
            wipers: numToColor(selectedWipers),
            horn: numToColor(selectedHorn),
            ac: numToColor(selectedAc),
            air_filter: numToColor(selectedAirFilter),
            oil_fuilds: numToColor(selectedOilFluids),
            belts: numToColor(selectedBelts),
            suspension: numToColor(selectedSuspension), 
            steering: numToColor(selectedSteering),
            exhaust: numToColor(selectedExhaust), 
            test_drive: numToColor(selectedTestDrive), 
            diagnostics: numToColor(selectedDiagnostics),
            body_work: numToColor(selectedBodyWork), 
            tyres_front_left: numToColor(selectedTyresFrontLeft),
            tyres_front_right: numToColor(selectedTyresFrontRight),
            tyres_back_left: numToColor(selectedTyresBackLeft),
            tyres_back_right: numToColor(selectedTyresBackRight),
            brakes_front: numToColor(selectedBrakesFront),
            brakes_back: numToColor(selectedBrakesBack),
           
        }, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then((response) => {
            console.log(response.data);
            setErrorMessage("");
            // let mechanic = false
            // if(response.data.user.mechanic) {
            //   mechanic = true
            // }
            // onisLoggedin(true, response.data.token, mechanic, response.data.user);
            // console.log(mechanic, 'mechanic = mechanic')
        })
        .catch((err) => {
            console.error(err);
            console.log(err.response.data);
            setErrorMessage(err.response.data.message);
        
      });
        })
        .catch((err) => {
          console.error(err)
          
        })

};
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView indicatorStyle="black">
      <StatusBar style='dark-content'/>

      <View>
          <Text style={styles.headingText}>Create Report</Text>
           {/*........ CUSTOMER........ */}
          <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <Text style={{fontSize: 18, alignItems: 'center'}}>{customer.name}</Text>
          </View>
           {/*........ VEHICLE........ */}
           <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <Text style={{fontSize: 18, alignItems: 'center'}}>{vehicle.make}</Text>
          </View>
           
          {/*........ MILEAGE........ */}
          <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
          <Text style={styles.radioText}>Mileage</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              checked={selectedMileage === 0}
              onPress={() => setMileage(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Green"
              checkedColor='green'

            />
            <CheckBox
              checked={selectedMileage === 1}
              onPress={() => setMileage(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Yellow"
              checkedColor='#e6cc00'
            />
            <CheckBox
              checked={selectedMileage === 2}
              onPress={() => setMileage(2)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Red"
              checkedColor='red'
            /> 
          </View>
          </View>
          
         
        {/*........ LIGHTS........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Lights</Text>
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              checked={selectedLights === 0}
              onPress={() => setLights(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Green"
              checkedColor='green'

            />
            <CheckBox
              checked={selectedLights === 1}
              onPress={() => setLights(1)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Yellow"
              checkedColor='#e6cc00'
            />
            <CheckBox
              checked={selectedLights === 2}
              onPress={() => setLights(2)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              title="Red"
              checkedColor='red'
            /> 
          </View>
        </View>
        
        {/*........ WINDSCREEN........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Windscreen</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedWindscreen === 0}
                onPress={() => setWindscreen(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedWindscreen === 1}
                onPress={() => setWindscreen(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedWindscreen === 2}
                onPress={() => setWindscreen(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        
        {/*........ WIPERS........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Wipers</Text>
          </View>
            <View style={styles.checkbox}>
              <CheckBox
                checked={selectedWipers === 0}
                onPress={() => setWipers(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedWipers === 1}
                onPress={() => setWipers(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedWipers === 2}
                onPress={() => setWipers(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        
        {/*........ HORN........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Horn</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedHorn === 0}
                onPress={() => setHorn(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedHorn === 1}
                onPress={() => setHorn(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedHorn === 2}
                onPress={() => setHorn(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
       
        {/*........ AC........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Air Conditioning</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedAc === 0}
                onPress={() => setAc(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedAc === 1}
                onPress={() => setAc(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedAc === 2}
                onPress={() => setAc(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        
        {/*........ AIR FILTER........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Air Filter</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedAirFilter === 0}
                onPress={() => setAirFilter(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedAirFilter === 1}
                onPress={() => setAirFilter(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedAirFilter === 2}
                onPress={() => setAirFilter(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        
        
        {/*........ OIL FLUID........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Oil Fluid</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedOilFluids === 0}
                onPress={() => setOilFluids(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedOilFluids === 1}
                onPress={() => setOilFluids(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedOilFluids === 2}
                onPress={() => setOilFluids(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        
        {/*........ BELTS........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Belts</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedBelts === 0}
                onPress={() => setBelts(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedBelts === 1}
                onPress={() => setBelts(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedBelts === 2}
                onPress={() => setBelts(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
       
        {/*........ SUSPENSION........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Suspension</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedSuspension === 0}
                onPress={() => setSuspension(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedSuspension === 1}
                onPress={() => setSuspension(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedSuspension === 2}
                onPress={() => setSuspension(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        
        {/*........ STEERING........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Steering</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedSteering === 0}
                onPress={() => setSteering(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedSteering === 1}
                onPress={() => setSteering(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedSteering === 2}
                onPress={() => setSteering(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
       
        {/*........ EXHAUST........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Exhaust</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedExhaust === 0}
                onPress={() => setExhaust(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedExhaust === 1}
                onPress={() => setExhaust(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedExhaust === 2}
                onPress={() => setExhaust(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        {/*........ TEST DRIVE........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Test Drive</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedTestDrive === 0}
                onPress={() => setTestDrive(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedTestDrive === 1}
                onPress={() => setTestDrive(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedTestDrive === 2}
                onPress={() => setTestDrive(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        {/*........ DIAGNOSTICS........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Diagnostics</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedDiagnostics === 0}
                onPress={() => setDiagnostics(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedDiagnostics === 1}
                onPress={() => setDiagnostics(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedDiagnostics === 2}
                onPress={() => setDiagnostics(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
        {/*........ BODYWORK........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Bodywork</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedBodyWork === 0}
                onPress={() => setBodyWork(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedBodyWork === 1}
                onPress={() => setBodyWork(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedBodyWork === 2}
                onPress={() => setBodyWork(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>

        {/*........ TYRES FRONT LEFT........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Tyres Front Left</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedTyresFrontLeft === 0}
                onPress={() => setTyresFrontLeft(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedTyresFrontLeft === 1}
                onPress={() => setTyresFrontLeft(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedTyresFrontLeft === 2}
                onPress={() => setTyresFrontLeft(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>

        {/*........ TYRES FRONT RIGHT........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Tyres Front Right</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedTyresFrontRight === 0}
                onPress={() => setTyresFrontRight(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedTyresFrontRight === 1}
                onPress={() => setTyresFrontRight(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedTyresFrontRight === 2}
                onPress={() => setTyresFrontRight(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>

        {/*........ TYRES BACK LEFT........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Tyres Back Left</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedTyresBackLeft === 0}
                onPress={() => setTyresBackLeft(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedTyresBackLeft === 1}
                onPress={() => setTyresBackLeft(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedTyresBackLeft === 2}
                onPress={() => setTyresBackLeft(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>

        {/*........ TYRES BACK RIGHT........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Tyres Back Right</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedTyresBackRight === 0}
                onPress={() => setTyresBackRight(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedTyresBackRight === 1}
                onPress={() => setTyresBackRight(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedTyresBackRight === 2}
                onPress={() => setTyresBackRight(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>

        {/*........ BRAKES FRONT........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Brakes Front</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedBrakesFront === 0}
                onPress={() => setBrakesFront(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedBrakesFront === 1}
                onPress={() => setBrakesFront(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedBrakesFront === 2}
                onPress={() => setBrakesFront(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>

        {/*........ BRAKES RIGHT........ */}
        <View style={{
          backgroundColor: 'white',
          borderRadius: 15,
          padding: 10,
          marginVertical: 8,
          marginHorizontal: 16, 
          ...styles.shadow
        }}>
          <View>
            <Text style={styles.radioText}>Brakes Back</Text>
          </View>
          <View style={styles.checkbox}>
              <CheckBox
                checked={selectedBrakesBack === 0}
                onPress={() => setBrakesBack(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Green"
                checkedColor='green'

              />
              <CheckBox
                checked={selectedBrakesBack === 1}
                onPress={() => setBrakesBack(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Yellow"
                checkedColor='#e6cc00'
              />
              <CheckBox
                checked={selectedBrakesBack === 2}
                onPress={() => setBrakesBack(2)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                title="Red"
                checkedColor='red'
              /> 
          </View>
        </View>
       
         {/*........ COMMENTS........ */}
        <View style={styles.input}>
          <TextInput
            placeholder="Comments"
            required
            autoCorrect={true}
            returnKeyType='done'
            onSubmitEditing={Keyboard.dismiss}
        />
        </View> 
        
         {/*........ BUTTON........ */}
      
        <TouchableOpacity 
          title="BookApoointment" 
          style={styles.button}
          onPress={submitForm}
          >
          <Text style={styles.text}>Submit Report</Text>
        </TouchableOpacity>   
      </View>
      
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddReportScreen

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  headingText: {
    marginLeft: 30, 
    fontSize: 30, 
    marginTop: 20, 
    fontWeight: 600
  },
  button: {
    backgroundColor: '#213681',
    width: 400,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 50
    
  },
  radioText: {
    marginLeft:30, 
    fontSize: 18, 
    marginTop: 20, 
    fontWeight: 600,

  },
  checkbox: {
    flexDirection: "row",
     marginLeft: 10
  },
  input: {
    height: 80,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold'
    
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
})