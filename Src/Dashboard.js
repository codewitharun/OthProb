import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useState, useEffect} from 'react';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import {appleAuth} from '@invertase/react-native-apple-authentication';
const Dashboard = props => {
  const [userr, setUser] = useState('');
  const [password, setPassword] = useState('');
  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken, user} = await GoogleSignin.signIn();
    // const {user} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // const googleCredential = auth.GoogleAuthProvider.credential(user);
    console.log(idToken);
    console.log(user);
    alert(user.name, user.email);

    // console.log();
    // Sign-in the user with the credential
    console.log(googleCredential);
    return auth().signInWithCredential(googleCredential);
  }

  useEffect(() => {
    console.log('jdkfhjkds');
    GoogleSignin.configure({
      webClientId:
        '671370434624-f1baeqciu3hgveu3ff54m6h5sat3u7l0.apps.googleusercontent.com',
    });
  }, []);
  const signOut = () => {
    auth()
      .signOut()
      .then(
        () => props.navigation.navigate('Login'),
        console.log('User signed out!'),
      );
  };

  const SignUp = () => {
    auth()
      .createUserWithEmailAndPassword(userr, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const Login = () => {
    auth()
      .signInWithEmailAndPassword(userr, password)
      .then(res => {
        console.log('signed in!');
        console.log(res);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <SafeAreaView>
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            height: '20%',
            width: '100%',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./ots.png')}
            style={{height: 100, width: 350}}
          />
        </View>
        <View style={{bottom: 30}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
              fontSize: 25,
              color: Platform == 'android' ? 'black' : 'black',
            }}>
            Sign In
          </Text>
        </View>
        <View
          style={{
            height: '25%',
            width: '100%',
            // backgroundColor: 'lightgrey',
          }}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View style={{height: 90}}>
              <Text style={{color: Platform == 'android' ? 'black' : 'black'}}>
                Username
              </Text>
              <TextInput
                placeholder="dummyemail@gmail.com"
                keyboardType="email-address"
                onChangeText={txt => {
                  setUser(txt);
                }}
                placeholderTextColor={'grey'}
                style={{borderBottomWidth: 0.2, height: 53}}
              />
            </View>
            <View>
              <Text style={{color: Platform == 'android' ? 'black' : 'black'}}>
                Password
              </Text>
              <TextInput
                placeholder="**************"
                secureTextEntry={true}
                // keyboardType="password"
                onChangeText={txt => {
                  setPassword(txt);
                }}
                placeholderTextColor={'grey'}
                style={{borderBottomWidth: 0.2, height: 53}}
              />
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => Login()}>
            <View
              style={{
                width: '90%',
                backgroundColor: 'lightblue',
                height: 50,
                alignSelf: 'center',
                //   top: 80,
                borderRadius: 30,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 20,
                }}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            height: '10%',
            // backgroundColor: 'grey',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => SignUp()}>
            <View>
              <Text style={{color: Platform == 'android' ? 'black' : 'black'}}>
                Create Account
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text style={{color: Platform == 'android' ? 'black' : 'black'}}>
                Forget Password ?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '95%',
            height: '12%',
            alignSelf: 'center',
          }}>
          <View>
            <Text style={{color: Platform == 'android' ? 'black' : 'black'}}>
              ------------------------
            </Text>
          </View>
          <View
            style={{
              height: '55%',
              width: '12%',
              //   alignItems: 'center',
              justifyContent: 'center',
              //   alignSelf: 'center',
              borderRadius: 50,
              borderColor: 'grey',
              borderWidth: 1,
              opacity: 0.5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: Platform == 'ios' ? 'white' : 'black',
              }}>
              OR
            </Text>
          </View>
          <View>
            <Text style={{color: Platform == 'ios' ? 'white' : 'black'}}>
              ---------------------------
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 21,
              color: Platform == 'ios' ? 'white' : 'black',
            }}>
            Sign Using {userr}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: 25,
            width: '15%',
            height: '15%',
            alignSelf: 'center',
            // backgroundColor: 'red',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{height: '100%', width: '100%'}}>
            <TouchableOpacity
              onPress={() =>
                onGoogleButtonPress().then(() =>
                  console.log('Signed in with Google!'),
                )
              }>
              <Image
                style={{height: 50, width: 50}}
                source={require('./google.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{height: '100%', width: '100%'}}>
            <TouchableOpacity onPress={() => signOut()}>
              <Image
                style={{height: 50, width: 50}}
                source={require('./facebook.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
