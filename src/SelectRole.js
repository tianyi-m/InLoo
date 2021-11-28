import React from "react";
import {View, Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SelectRole = ({ navigation }) => (
    
    <View>
        <Button title="I'm an international student" onPress={() =>
            navigation.navigate('InternationalForm')}></Button>
        <Button title="I'm a local student" onPress={() =>
            navigation.navigate('LocalForm')}></Button>
    </View>
);

export default SelectRole;