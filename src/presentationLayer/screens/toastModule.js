// Toast Module Implementation
import React from 'react';
import {View, StyleSheet, ToastAndroid, Button, StatusBar} from 'react-native';
import {ToastExample} from '../components/Toast';

const ToastModule = () => {
  //   const showToast = () => {
  //     ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  //   };

  //   const showToastWithGravity = () => {
  //     ToastAndroid.showWithGravity(
  //       'All Your Base Are Belong To Us',
  //       ToastAndroid.SHORT,
  //       ToastAndroid.CENTER,
  //     );
  //   };

  //   const showToastWithGravityAndOffset = () => {
  //     ToastAndroid.showWithGravityAndOffset(
  //       'A wild toast appeared!',
  //       ToastAndroid.LONG,
  //       ToastAndroid.BOTTOM,
  //       25,
  //       50,
  //     );
  //   };

  return (
    <View style={styles.container}>
      <Button
        // title="Toggle Toast"

        title="Button "
        //   onPress={() => showToast()}
        onPress={() => ToastExample.show('Toast Button 1', ToastExample.LONG)}
      />
      <Button
        // title="Toggle Toast With Gravity"
        color="#7627b8"
        style={{paddingTop: 10}}
        title="Button 2"
        onPress={() => ToastExample.show('Toast Button 2', ToastExample.SHORT)}
      />
      <Button
        title="Button 3"
        //   onPress={() => showToastWithGravityAndOffset()}
        onPress={() => {
          ToastExample.show('Toast Button 3', ToastExample.LONG);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: '#888888',
    margin: 20,
    padding: 15,
  },
});

export default ToastModule;
