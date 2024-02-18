import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'/>
        <Button title='Add goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goal</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 3
  }
});
