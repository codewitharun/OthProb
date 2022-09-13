import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StyleSheet from './Style';
const Form = props => {
  return (
    <View style={StyleSheet.container}>
      <View>
        {/* <Image /> */}
        <Text style={StyleSheet.title}>Login To Get Started</Text>
        <View style={StyleSheet.formContainer}>
          <View style={StyleSheet.TextInputView}>
            <Text style={StyleSheet.InputHeading}>Email :</Text>
            <TextInput
              style={StyleSheet.TextInput}
              placeholder="Please Enter a valid Email"
              placeholderTextColor={'grey'}
              autoCapitalize={false}
            />
            <Text style={StyleSheet.InputHeading}>Password :</Text>
            <TextInput
              style={StyleSheet.TextInput}
              placeholder="Please Enter a valid Password"
              placeholderTextColor={'grey'}
            />
          </View>
          <TouchableOpacity>
            <View style={StyleSheet.buttonView}>
              <Text style={StyleSheet.button}>Submit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={StyleSheet.buttonView}>
              <Text style={StyleSheet.button}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;
