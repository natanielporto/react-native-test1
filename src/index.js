import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const COLORS = [
  'white',
  'black',
  'blue',
  'green',
  'pink',
  'red',
  'purple',
  'yellow',
  'grey',
  'lilac',
];

export default function App() {
  const [color, setColor] = useState('white');

  const randomColor = useCallback(() => {
    const randomNumber = new Date().getTime();
    const lastNumber = randomNumber.toString().slice(-1);

    setColor(COLORS[+lastNumber]);
  }, [setColor]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{backgroundColor: color, flex: 1}} />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}
        onPress={randomColor}>
        <Text style={styles.buttonText}>Go 4all</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
