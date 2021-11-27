import React from "react";
import {View, Text, Button} from "react-native";

const InternationalStudentAppForm = ({ navigation }) => {
    return (
        <View>
            <Text>Let's first get some information!</Text>
            <Button title="I'm ready to meet new people!" onPress={() =>
            navigation.navigate('Marketplace')}></Button>
        </View>
    );
}

export default InternationalStudentAppForm;