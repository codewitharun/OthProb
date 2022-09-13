import React, {useState} from 'react';
import {Button, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
const Hello = props => {
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      const res = await confirm.confirm(code);
      console.log('Signup Sucessfull', res);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <SafeAreaView>
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+918601279944')}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </SafeAreaView>
  );
};

export default Hello;

const styles = StyleSheet.create({});
