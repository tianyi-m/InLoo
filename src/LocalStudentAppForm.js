import React, { useState } from "react";
import {View, Picker, Button, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList} from "react-native";

const LocalStudentAppForm = ({ navigation }) => {
    const [selectedValueMajor, setSelectedValueMajor] = useState("Physical Sciences & Math");
    const [selectedValuePersonalityExtraversion, setSelectedValuePersonalityExtraversion] = useState("Loud");
    const [selectedValuePreference, setSelectedValuePreference] = useState("opposite");
    return (
        <View>
            <Text>Let's first get some information!</Text>
            <Text>First Name</Text>
            <Text>Last Name</Text>
            <Text>Major</Text>
            <Picker
                selectedValue={selectedValueMajor}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValueMajor(itemValue)}>
                <Picker.Item label="Physical Sciences & Math" value="Physical Sciences & Math" />
                <Picker.Item label="Life Sciences" value="Life Sciences" />
                <Picker.Item label="Social Sciences" value="Social Sciences" />
                <Picker.Item label="Cultural & Gender Studies" value="Cultural & Gender Studies" />
                <Picker.Item label="the Arts" value="the Arts" />
                <Picker.Item label="Enginneering" value="Engineering" />
                <Picker.Item label="Comp Sci/Data Sci" value="Comp Sci/Data Sci" />
                <Picker.Item label="Humanties" value="Humanties" />
            </Picker>
            <Text>Personality</Text>
            <Picker
                selectedValue={selectedValuePersonalityExtraversion}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValuePersonalityExtraversion(itemValue)}>
                <Picker.Item label="Loud (going out)" value="Loud" />
                <Picker.Item label="Quiet (stayingn in)" value="Quiet" />
                <Picker.Item label="Somewhere in the middle (either)" value="Ambivert" />
            </Picker>
            <Text>Specializations</Text>
            <Text>Email</Text>
            <Button title="I'm ready to meet new people!" onPress={() =>
            navigation.navigate('LocalProfile')}></Button>
        </View>
    );
}
    

export default LocalStudentAppForm;