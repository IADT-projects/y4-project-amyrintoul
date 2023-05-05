import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Navigation from './components/Navigation';

const App = () => {
  
  return (
    <SafeAreaProvider>
      <Navigation />
      </SafeAreaProvider>
  )
}

export default App
