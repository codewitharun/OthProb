import React, {useState} from 'react';
import {Button, TextInput, SafeAreaView, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const PhoneSignIn = props => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [Numberr, setNumber] = useState('');
  const [country, setCountry] = useState('+91');

  // Handle the button press
  async function signInWithPhoneNumber() {
    const confirmation = await auth().signInWithPhoneNumber('+91' + Numberr);
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // const phone = auth.PhoneAuthProvider.PROVIDER_ID;
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      var res = await confirm.confirm(code);
      console.log('Signup Done', res);
      props.navigation.navigate('Dashboard');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <SafeAreaView>
        <TextInput
          placeholder="Enter Phone Number here"
          onChangeText={txt => setNumber(txt)}
          maxLength={10}
          style={{
            color: 'black',
            backgroundColor: 'green',
            paddingHorizontal: 20,
          }}
        />
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber()}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <TextInput
          value={code}
          onChangeText={text => setCode(text)}
          maxLength={6}
          style={{color: 'black', backgroundColor: 'green'}}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    </SafeAreaView>
  );
};
export default PhoneSignIn;
