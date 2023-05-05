import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchBar } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Avatar, Divider, ListItem } from 'react-native-elements';


// const [images, setimages] = useState([
//   require('../assets/mechanic1.png'),
//   require('../assets/mechanic1.png'),
//   require('../assets/mechanic1.png')
 
// ]);

const DATA = [
  {
    id: '1',
    title: 'Danny Rintoul',
    message: 'Thank you. Just on the way now',
    time: '14:30'

  },
  {
    id: '2',
    title: 'Jamie Donaldson',
    message: 'Thank you. Just on the way now',
    time: '18:10'

  },
  {
    id: '3',
    title: 'Roisin O Regan',
    message: 'Thank you. Just on the way now',
    time: 'Yesterday'

  },
  {
    id: '4',
    title: 'Irene Browne',
    message: 'Thank you. Just on the way now',
    time: 'Yesterday'

  },
  {
    id: '5',
    title: 'Michelle Ryan',
    message: 'Thank you. Just on the way now',
    time: 'Sunday'

  },
];

const Item = ({title, message, time}) => (
  <TouchableOpacity>
    
    <View style={styles.item}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
        <Text style={styles.message}>{message}</Text>
    </View>
  </TouchableOpacity>


);


const ChatScreen = () => {
  const [filteredData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, padding: 15, fontWeight: 600}}>Messenger</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
        <View style={styles.sectionStyle}>
          <AntDesign name="search1" size={20} color="black" style={{marginRight: 5}} />
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            required
          />
        </View> 
        <TouchableOpacity>
          <View style={{backgroundColor: '#6A5BFF', padding: 12, borderRadius: 10, marginRight: 12}}>
            <Entypo name="new-message" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </View>
  
      <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} message={item.message} time={item.time}/> }
          keyExtractor={item => item.id}
        />
  
      
  </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 45,
    width: 350,
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'grey'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderRadius: 10,
    borderWidth: 1
    
  },
  title: {
    fontSize: 18,
  },
  message: {
    fontSize: 14,
    color: 'grey'
  },
  time: {
      fontSize: 18,
      marginBottom: 5,
      color: '#6A5BFF'

  },
  
 
 
  
})