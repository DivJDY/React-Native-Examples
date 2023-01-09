import {TextInput} from 'react-native';
import {styles} from '../../styles/styles';

// Input Compomnent
const input = ({value, onChangeText, placeholder, keyboardType}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.textInputStyle}
      keyboardType={keyboardType ? keyboardType : ''}
    />
  );
};

export default input;
