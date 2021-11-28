import React, { useState } from "react";
import {View, Picker, Button, Text, TextInput, TouchableOpacity, FlatList} from "react-native";
import { Card } from 'react-native-paper';

const DATA = [
    {
      id: '1',
      category: 'American slangs and cultural references (movies, shows, musics)',
    },
    {
      id: '2',
      category: 'American traditions and cultural values',
    },
    {
      id: '3',
      category: 'American social trends',
    },
  ];

export default class InternationalStudentAppForm  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: DATA,
            selectedItem: null,
            selectedMajor: "Physical Sciences & Math",
            selectedPersonalityExtraversion: "Loud",
            firstName: "",
            lastName: "",
            email: "",
            origin: "",
        };
    }

    onPressHandler(id) {
        let dataSource=[...this.state.dataSource];
        for(let data of dataSource){
          if(data.id==id){
            data.selected=(data.selected==null)?true:!data.selected;
            break;
          }
        }
        this.setState({dataSource});
    }

    render(){
        return (
            <View>
                <Text>Let's first get some information!</Text>
                <Text>First Name</Text>
                <TextInput onChangeText={(firstName) => this.setState({firstName})} placeholder="First Name" value={this.props.firstName}/>
                <Text>Last Name</Text>
                <TextInput onChangeText={(lastName) => this.setState({lastName})} placeholder="Last Name" value={this.props.lastName}/>
                <Text>Where are you from?</Text>
                <TextInput onChangeText={(origin) => this.setState({origin})} placeholder="Origin" value={this.props.origin}/>
                <Text>Major</Text>
                <Picker
                    selectedValue={this.props.selectedMajor}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(selectedMajor) => this.setState({selectedMajor})}>
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
                    selectedValue={this.props.selectedPersonalityExtraversion}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(selectedPersonalityExtraversion) => this.setState({selectedPersonalityExtraversion})}>
                    <Picker.Item label="Loud (going out)" value="Loud" />
                    <Picker.Item label="Quiet (stayingn in)" value="Quiet" />
                    <Picker.Item label="Somewhere in the middle (either)" value="Ambivert" />
                </Picker>
                <Text>What aspect(s) do you want to learn more about?</Text>
                <FlatList
                    data={this.state.dataSource}
                    keyExtractor={item => item.id.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
                        <Card
                            style={
                            item.selected==true
                                ? {
                                    padding: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#7f9fd4',
                                }
                                : {
                                    padding: 10,
                                    borderRadius: 5,
                                    backgroundColor: '#cbd0d1',
                                }
                            }>
                            <Text>{item.category}</Text>
                        </Card>
                        </TouchableOpacity>
                    )}
                    />
                <Text>Email</Text>
                <TextInput onChangeText={(email) => this.setState({email})} placeholder="Email Address (myemail@example.com)" value={this.props.email}/>
                <Button title="I'm ready to meet new people!" onPress={() =>
                this.props.navigation.navigate('Marketplace')}></Button>
            </View>
        );
    }
}