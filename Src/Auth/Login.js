import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Form} from '../Components/Index';
const Login = props => {
  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <Form />
        <Text>Hellos</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
