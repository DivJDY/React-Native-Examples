import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from '../../styles/styles';
import {db} from '../../dataLayer/sqliteDatabase';

import Input from '../components/input';

// Home Screen
export default function HomeScreen({navigation}) {
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState();
  const [S_Address, setAddress] = useState('');

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Student_Table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Student_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Student_Table(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(30), student_phone INT(15), student_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
  }, []);

  // Insert data
  const insertData = () => {
    if (S_Name == '' || S_Phone == '' || S_Address == '') {
      Alert.alert('Please Enter All the Values');
    } else {
      db.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO Student_Table (student_name, student_phone, student_address) VALUES (?,?,?)',
          [S_Name, S_Phone, S_Address],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert('Data Inserted Successfully....');
            } else {
              Alert.alert('Failed....');
            }
          },
        );
      });
      setName('');
      setPhone();
      setAddress('');
    }
  };

  navigateToViewScreen = () => {
    navigation.navigate('ViewAllStudentScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Insert Data Into SQLite Database
        </Text>

        <Input
          value={S_Name}
          placeholder="Enter Student Name"
          onChangeText={text => setName(text)}
        />

        <Input
          onChangeText={text => setPhone(text)}
          placeholder="Enter Student Phone Number"
          keyboardType={'numeric'}
          value={S_Phone}
        />

        <Input
          onChangeText={text => setAddress(text)}
          placeholder="Enter Student Address"
          value={S_Address}
        />

        <TouchableOpacity
          style={[styles.touchableOpacity, {marginTop: 20}]}
          onPress={insertData}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Click Here To Insert Data Into SQLite Database{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            {marginTop: 20, backgroundColor: '#33691E'},
          ]}
          onPress={navigateToViewScreen}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Click Here View All Students List{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
