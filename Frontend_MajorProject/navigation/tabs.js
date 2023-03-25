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
import AnotherScreen from "../screens/AnotherScreen";

const Tab = createBottomTabNavigator();

function LogoTitle() {
  return (
    <Text style={{color:'white',fontWeight: 'bold',
    fontSize: 35}}>Mechanic{'\n'}    Profile</Text>
  
  );
}

const Tabs = ({onisLoggedin, isLoggedin, isMechanic}) => {

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
          // marginTop: 30,
          // bottom: 40,
          // left: 20,
          // right: 20,
          // elevation: 0, 
          backgroundColor: '#ffffff',
          // borderRadius: 15,
          // height: 80,
          ...styles.shadow
        }
      }}>
        
        <Tab.Screen name='Home' children={() => <HomeScreen isLoggedin={isLoggedin} isMechanic={isMechanic}  />} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="ios-home" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
            </View>
          ),
        }}/>
        
      <Tab.Screen name='Reports' component={ReportScreen}  
          options={{
          tabBarIcon: ({ color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <AntDesign name="filetext1" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
            </View>       
          ),
  
        }}/>
      <Tab.Screen name='Appointment' component={AppointmentScreen}
      
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
      <Tab.Screen name='Chat' component={AnotherScreen} options={{ 
        tabBarIcon: ({focused,  size}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="chatbox-ellipses-outline" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}}/>
            
          </View>
        ),
        headerShown: true,
        headerTitle: (props) => <LogoTitle {...props} />,
        headerStyle: {
            backgroundColor: '#213681',
            borderRadius: 2,
            height: 220,
            borderBottomRightRadius: 3000,
            borderBottomLeftRadius: 3000,
          },
          headerTintColor: '#fff',
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