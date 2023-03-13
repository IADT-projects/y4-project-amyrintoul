import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReportScreen from "../screens/ReportScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import ChatScreen from "../screens/ChatScreen";
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          tabBarActiveTintColor: '#6A5BFF',
          bottom: 30,
          left: 20,
          right: 20,
          elevation: 0, 
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}>
        <Tab.Screen name='Home' component={HomeScreen}  
          options={{
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <AntDesign name="home" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
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
          tabBarIcon: ({ color, size, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <AntDesign name="plus" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}} />  
            </View>
          ),
        }} />
      <Tab.Screen name='Chat' component={ChatScreen} options={{
        tabBarIcon: ({focused,  size}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="chatbox-ellipses-outline" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}}/>
            
          </View>
        ),
        
      }}
      
         />

    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor:'#75BEF4',
    shadowOffset: {
      width: 0, 
      height: 10,

    },
    shadowOpacity: 0.25, 
    shadowRadius: 3.5, 
    elevation: 5

  }

})
export default Tabs;