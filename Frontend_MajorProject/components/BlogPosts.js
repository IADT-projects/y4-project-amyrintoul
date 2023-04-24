import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from '../navigation/tabs'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




const BlogPost = ({navigation}) => {
  return (
  <SafeAreaView style={styles.container}>
    <ScrollView>
    <View>
      <Text style={{marginLeft: 30, fontSize: 30, marginTop: 20, fontWeight: 600}}>Recent News</Text>
    </View>
    <TouchableOpacity
        // onPress={() => navigation.navigate('SingleReport')}
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
          <Text style={styles.title} >BMW unveils powerhouse</Text>
          <Image
            style={styles.Image}
            source={require('../assets/blueCar.png') } 
            
          />
          <Text style={{marginBottom: 5 , color: 'grey', fontSize: 16}} > 
            BMW’s i7 M70 xDrive is the most powerful model with an all-electric drive system in the group’s portfolio.
            With an electric motor at the front and rear axles a maximum system output of 660hp is generated.
          </Text>
          <Text style={{marginBottom: 5 , color: 'grey', fontSize: 16}}> 
            The range-topper zips from zero to 100kmh in just 3.7 seconds.
            op speed is electronically limited to 250kmh.
            Following on from the i4 M50, the iX M60, the new car made its global debut at the Shanghai show this week. 
          </Text> 
                      
          
          <View style={{flexDirection: "row", marginTop: 5}}>
            <MaterialIcons name="date-range" size={14} color="#6A5BFF" style={{marginTop: 6}} />   
            <Text style={styles.date} >April, 19, 2023</Text> 
            <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 6, marginLeft: 10}} />  
            <Text style={styles.date}>02:30 AM</Text> 
          </View>
        </View>
    </TouchableOpacity>
    <TouchableOpacity
        // onPress={() => navigation.navigate('SingleReport')}
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
          <Text style={styles.title} >Another example of a blog post</Text>
          <Image
            style={styles.Image}
            source={require('../assets/Bmw_blogpost.jpeg') } 
            
          />
          <Text style={{marginBottom: 5 , color: 'grey', fontSize: 16}} > 
            BMW’s i7 M70 xDrive is the most powerful model with an all-electric drive system in the group’s portfolio.
            With an electric motor at the front and rear axles a maximum system output of 660hp is generated.
          </Text>
          <Text style={{marginBottom: 5 , color: 'grey', fontSize: 16}}> 
            The range-topper zips from zero to 100kmh in just 3.7 seconds.
            op speed is electronically limited to 250kmh.
            Following on from the i4 M50, the iX M60, the new car made its global debut at the Shanghai show this week. 
          </Text> 
                      
          
          <View style={{flexDirection: "row", marginTop: 5}}>
            <MaterialIcons name="date-range" size={14} color="#6A5BFF" style={{marginTop: 6}} />   
            <Text style={styles.date} >April, 19, 2023</Text> 
            <AntDesign name="clockcircle" size={14} color="#6A5BFF" style={{marginTop: 6, marginLeft: 10}} />  
            <Text style={styles.date}>02:30 AM</Text> 
          </View>
        </View>
    </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
  );
};

export default BlogPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  },
  title: {
    fontSize: 26,
    fontWeight: 600,
    marginBottom: 10
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

  },
  Image: {
    width: 350,
    height: 200,
    marginBottom: 20
  }
 
  
});