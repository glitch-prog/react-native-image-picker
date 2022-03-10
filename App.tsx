import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import logo from './assets/logo.png';

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo, press the button below!
      </Text>
      <StatusBar style='auto' />
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={styles.buttonBackground}
      >
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 305, height: 159 },
  instructions: { color: 'red', fontSize: 18 },
  buttonBackground: { backgroundColor: 'blue' },
  buttonText: { fontSize: 20, color: '#fff' },
});
