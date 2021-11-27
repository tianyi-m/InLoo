import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectRole from "./src/SelectRole";
import LocalStudentAppForm from "./src/LocalStudentAppForm";
import InternationalStudentAppForm from "./src/internationalStudentAppForm";
import Marketplace from './src/Marketplace';
import LocalStudentProfile from './src/LocalStudentProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={SelectRole} />
        <Stack.Screen name="LocalForm" component={LocalStudentAppForm} />
        <Stack.Screen name="InternationalForm" component={InternationalStudentAppForm} />
        <Stack.Screen name="Marketplace" component={Marketplace} />
        <Stack.Screen name="LocalProfile" component={LocalStudentProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
