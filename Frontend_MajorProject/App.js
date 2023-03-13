import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Navigation from './components/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style="light" />
      </SafeAreaProvider>
  )
}

export default App
