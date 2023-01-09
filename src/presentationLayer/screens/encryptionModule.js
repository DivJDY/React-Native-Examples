import React from 'react';
import {NativeModules, Button, Alert} from 'react-native';

const EncryptionModule = () => {
  // Encryption module
  const Encryptor = NativeModules.Encryptor;

  const encrypt = plainText => {
    // Add your additional custom logic here
    // console.warn('plainText777', Encryptor.encrypt(plainText));
    return Encryptor.encrypt(plainText);
  };

  const decrypt = encrptedText => {
    // Add your additional custom logic here
    // console.warn('Encvrypted Text777', encrptedText);
    return Encryptor.decrypt(encrptedText);
  };
  //   const enc = ncrypt.encrypt('hello', 'secret key');
  //   console.warn('eeee', enc);
  //   const dec = ncrypt.decrypt(enc);
  //   console.warn('1111', dec);

  var CalendarModule = NativeModules.CalendarModule;
  //   const {CalendarModule} = NativeModules;
  const onPress = () => {
    // console.log('We will invoke the native module here!');
    // alert(Calender.createCalendarEvent('hello', 'hii'));
    // CalendarModule.createCalendarEvent('sss', 'bb');

    //   Encryption Module
    const encryptText = encrypt('Hello');
    console.warn(typeof encryptText, '888888', encryptText);

    const decryptText = decrypt('Hello');
    Alert.alert('hello');
  };

  return (
    <Button
      title="Click to invoke your Encrypt native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default EncryptionModule;
