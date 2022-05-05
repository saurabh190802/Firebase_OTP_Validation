import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
//import axios from 'axios'

export default function PhoneNumber(props) {
  const [phoneNumber, setPhoneNumber] = useState(null);
//   async function login(){
//     const data = await axios.post('/backend/login',phoneNumber)
//   }
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Enter Phone Number</Text>
      <TextInput
        autoFocus
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button title="Verify Phone Number" onPress={() => props.onSubmit(phoneNumber)} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightblue',
    width: 300,
    marginVertical: 30,
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 25,
  },
});
