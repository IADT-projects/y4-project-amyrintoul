import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReportScreen from "../screens/ReportScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import ChatScreen from "../screens/ChatScreen";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, Text, TouchableOpacity, View, Alert, Image} from "react-native";
import { StatusBar} from "expo-status-bar";
import { SimpleLineIcons } from '@expo/vector-icons';
import AppointmentViewScreen from "../screens/AppointmentViewScreen";
import MechanicHome from "../screens/MechanicHome";
import AddReportScreen from "../screens/AddReportScreen";
import { LinearGradient } from "expo-linear-gradient";

const Tab = createBottomTabNavigator();


const Tabs = ({navigation, onisLoggedin, isLoggedin, isMechanic, authUser}) => {

  const showAlert = () => 
  Alert.alert(
    'Confirm Logout',
    'Are you sure you want to logout?',
    [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => onisLoggedin(false),
        style: 'Yes',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
  );

  let mechanicPage = (
    <Tab.Screen name='Reports' children={() => <ReportScreen navigation={navigation} isLoggedin={isLoggedin} isMechanic={isMechanic}  />} 
          options={{
    
          tabBarIcon: ({ color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <AntDesign name="filetext1" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
            </View>       
          ),
  
        }}/>
  );

  if(isMechanic){
    mechanicPage = (
<Tab.Screen name='Appointments' children={() => <AppointmentViewScreen navigation={navigation} isLoggedin={isLoggedin} isMechanic={isMechanic}  />} 
          options={{
          tabBarIcon: ({ color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <AntDesign name="filetext1" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
            </View>       
          ),
  
        }}/>
    );
  }

  let mechanicHomePage = (
    <Tab.Screen name='Home' children={() => <HomeScreen authUser={authUser} navigation={navigation} isLoggedin={isLoggedin} isMechanic={isMechanic}  />} 
          options={{
           
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="ios-home" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
            </View>
          ),
        }}/>
  );

  if(isMechanic){
    mechanicHomePage = (
<Tab.Screen name='MechanicHome' children={() => <MechanicHome authUser={authUser} navigation={navigation} isLoggedin={isLoggedin} isMechanic={isMechanic}  />} 
          options={{
          tabBarIcon: ({ color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="ios-home" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />   
            </View>       
          ),
  
        }}/>
    );
  }

  let mechanicReport = (
    <Tab.Screen name='AppointmentScreen' navigation={navigation} component={AppointmentScreen}
      
    options={{
     headerTitle: 'Add A Report',
     tabBarIcon: ({ size, focused}) => (
       <View style={{ width: 50,
         height: 50,
         borderRadius: 30,
         backgroundColor: '#6A5BFF',}}>
        <AntDesign name="plus" size={size} style={{color: focused ? '#ffffff' : '#ffffff', marginLeft: 13, marginTop: 12}} /> 
       </View>
     ),
     tabBarButton: (props) => 
     <TouchableOpacity {...props}
     style={{
       top: -25,
       justifyContent: 'center',
       alignItems: 'center',
     }}
             
     />         
     
   }} />
  );

  if(isMechanic){
    mechanicReport = (
      <Tab.Screen name='Report' component={AddReportScreen}
            
            options={{
            headerTitle: 'Book An Appointment',
            tabBarIcon: ({ size, focused}) => (
              <View style={{ width: 50,
                height: 50,
                borderRadius: 30,
                backgroundColor: '#6A5BFF',}}>
                <AntDesign name="plus" size={size} style={{color: focused ? '#ffffff' : '#ffffff', marginLeft: 13, marginTop: 12}} /> 
              </View>
            ),
            tabBarButton: (props) => 
            <TouchableOpacity {...props}
            style={{
              top: -25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
                    
            />            
     }} />
    );
  }

  return (
    
    
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6A5BFF',
        tabBarStyle: {
          position: 'relative',
          
          tabBarActiveTintColor: '#6A5BFF',
          backgroundColor: '#ffffff',
          ...styles.shadow
        }
      }}>
        
        {mechanicHomePage}

        {mechanicPage}
        
        {mechanicReport}
      
      
      <Tab.Screen name='Chat' component={ChatScreen}  options={{ 
        
          tabBarIcon: ({focused,  size}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="chatbox-ellipses-outline" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}}/>     
          </View>
        ),
        }}
      />
      <Tab.Screen name='Logout' component={ChatScreen} options={{ 
       
        tabBarIcon: ({focused,  size}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <SimpleLineIcons name="logout" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}}/>
            
          </View>
        ),
        
        tabBarButton: (props) => 
          <TouchableOpacity {...props}
          onPress={showAlert}
          
                  
          />         
        }}
      />

    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor:'#BCBCBC',
    shadowOffset: {
      width: 0, 
      height: 7,

    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 5

  }

})
export default Tabs;