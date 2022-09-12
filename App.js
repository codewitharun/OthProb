// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Login from './Src/Login';
import Elogin from './Src/EmailLogin';
import PhoneSignIn from './Src/PhoneLog';
import Volunteer from './Src/Volunteer';
import Users from './Src/Viewusers';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Login" component={Elogin} />
        <Stack.Screen name="PLogin" component={PhoneSignIn} />
        <Stack.Screen name="Volunteer" component={Volunteer} />
        <Stack.Screen name="Users" component={Users} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
