import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReportScreen from "../screens/ReportScreen";
import AppointmentScreen from "../screens/AppointmentScreen";
import ChatScreen from "../screens/ChatScreen";
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SimpleLineIcons } from '@expo/vector-icons';
import AnotherScreen from "../screens/AnotherScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={{onPress}}
    >
      <View style={{
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#6A5BFF',
      }}>
        {children}
      </View>

  </TouchableOpacity>
);

const Tabs = () => {
  return (
    
      
    
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#6A5BFF',
        tabBarStyle: {
          position: 'absolute',
          tabBarActiveTintColor: '#6A5BFF',
          bottom: 40,
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
             <AntDesign name="plus" size={size} style={{color: focused ? '#6A5BFF' : '#ffffff'}} />  
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }} />
      <Tab.Screen name='Chat' component={ChatScreen} options={{ 
        tabBarIcon: ({focused,  size}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <Ionicons name="chatbox-ellipses-outline" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}}/>
            
          </View>
        ),
        }}
      />
      <Tab.Screen name='Logout' component={AnotherScreen} options={{ 
        tabBarIcon: ({focused,  size}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
             <SimpleLineIcons name="logout" size={size} style={{color: focused ? '#6A5BFF' : '#748c94'}}/>
            
          </View>
        ),
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