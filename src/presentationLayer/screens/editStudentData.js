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

export default function EditRecordScreen({route, navigation}) {
  const [S_Id, setID] = useState('');
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState();
  const [S_Address, setAddress] = useState('');

  useEffect(() => {
    setID(route.params.student_id);
    setName(route.params.student_name);
    setPhone(route.params.student_phone.toString());
    setAddress(route.params.student_address);
  }, []);

  // Edit
  const editData = () => {
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Student_Table set student_name=?, student_phone=? , student_address=? where student_id=?',
        [S_Name, S_Phone, S_Address, S_Id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            //   Alert.alert('Record Updated Successfully...');
            Alert.alert(
              'Done',
              'Record Updated Successfully..',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('ViewAllStudentScreen'),
                },
              ],
              {cancelable: false},
            );
          } else {
            Alert.alert('Error');
          }
        },
      );
    });
  };

  // delete
  const deleteRecord = () => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Student_Table where student_id=?',
        [S_Id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Done',
              'Record Deleted Successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('ViewAllStudentScreen'),
                },
              ],
              {cancelable: false},
            );
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 24, textAlign: 'center', color: '#000'}}>
          Edit Record In SQLite Database
        </Text>

        <Input
          onChangeText={text => setName(text)}
          placeholder="Enter Student Name"
          value={S_Name}
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
          onPress={editData}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Click Here To Edit Record{' '}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.touchableOpacity,
            {marginTop: 20, backgroundColor: '#33691E'},
          ]}
          onPress={deleteRecord}>
          <Text style={styles.touchableOpacityText}>
            {' '}
            Click Here To Delete Current Record{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
