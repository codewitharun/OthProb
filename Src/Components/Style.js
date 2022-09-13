import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCCD',
  },

  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: '#fff',
  },

  button: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
  formContainer: {
    height: '70%',
    width: '90%',
    // backgroundColor: 'red',

    // alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 50,
    backgroundColor: 'pink',
    paddingLeft: 10,
    borderRadius: 50,
  },
  InputHeading: {
    height: 30,
    fontWeight: '500',
    top: 5,
    fontSize: 15,
  },
  buttonView: {
    backgroundColor: 'lightblue',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    borderRadius: 30,
  },
  TextInputView: {height: '50%'},
});
