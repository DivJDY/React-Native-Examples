import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer, useIsFocused} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
// import ViewAllStudentScreen from './src/presentationLayer/screens/viewAllStudentList';
// import EditRecordScreen from './src/presentationLayer/screens/editStudentData';
// import HomeScreen from './src/presentationLayer/screens/homeScreen';
import EncryptionModule from './src/presentationLayer/screens/encryptionModule';
import ToastModule from './src/presentationLayer/screens/toastModule';

// stack navigation
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* React-native-sqlite-storage */}
      {/* <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen
          name="ViewAllStudentScreen"
          component={ViewAllStudentScreen}
        />

        <Stack.Screen name="EditRecordScreen" component={EditRecordScreen} />
      </Stack.Navigator> */}
      {/* ********************************************* */}

      {/* Native modules */}
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={EncryptionModule} />
        <Stack.Screen name="ToastScreen" component={ToastModule} />
      </Stack.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen name="ToastScreen" component={ToastModule} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
