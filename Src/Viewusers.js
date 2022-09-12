import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import firestore from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';

const {height, width} = Dimensions.get('screen');
// const usersCollection = firestore().collection('Users');

const authh = firebase.auth().currentUser;

// console.log(authh.displayName);
const Users = props => {
  //   async function onButtonPress() {
  //     const users = await firestore().collection('Users').get();
  //     const user = await firestore().collection('Users').doc(authLogedIn).get();
  //   }

  useEffect(() => {
    if (authh.uid) {
      //   firebase.auth().currentUser;
      const res = firestore()
        .collection('Users')
        .doc(authh.uid)
        .get()
        .then(documentSnapshot => {
          /*
                  A DocumentSnapshot belongs to a specific document,
                  With snapshot you can view a documents data,
                  metadata and whether a document actually exists.
                */
          let userDetails = {};
          // Document fields
          userDetails = documentSnapshot.data();
          // All the document related data
          userDetails[authh.uid] = documentSnapshot.id;
          setUserData(userDetails);
          console.log('User data is ===> phone me dekho');
        });
    }
  }, []);

  let [userId, setUserId] = useState('');
  let [userData, setUserData] = useState({});
  const [userss, setUsers] = useState('name');
  const [userName, setUserName] = useState('name');
  const [userEmail, setUserEmail] = useState('email');
  const [userPhone, setUserPhone] = useState('phone');
  const [userMessage, setUserMessage] = useState('message');
  console.log(userData);
  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          height: height * 0.3,
          //   backgroundColor: 'green',
          width: width * 0.9,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              bottom: 10,
            }}>
            Connect with us
          </Text>

          <Text>User Id: {userData ? userData.email : ''}</Text>
          <Text>User Name: {userData ? userData.name : ''}</Text>
          <Text>User Contact: {userData ? userData.phone : ''}</Text>
          <Text>User Address: {userData ? userData.Message : ''}</Text>
        </View>
      </View>

      <View
        style={{
          height: height * 0.1,
          width: width * 0.9,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Volunteer')}>
          <View
            style={{
              height: height * 0.06,
              width: width * 0.9,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#F26837',
              borderRadius: 4,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Update
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  textInputView: {
    height: height * 0.1,
    justifyContent: 'center',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    // backgroundColor:'red'
  },
  messInputView: {
    height: height * 0.15,
    // justifyContent: 'center',

    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    // backgroundColor:'red'
  },
  phoneInputView: {
    height: height * 0.1,
    justifyContent: 'space-between',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DropView: {
    height: height * 0.05,
    width: width * 0.1,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    // borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#555555',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textInputMainView: {
    height: height * 0.07,
    width: width * 0.9,
    // alignSelf: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
});
