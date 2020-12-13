import React, {useState} from 'react'
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native'

export default function App() {
  const [color, setColor] = useState('')

  function randomColor() {
    const randomNumber = new Date().getTime()
    const lastNumber = randomNumber.toString().charAt(12)
  
    switch(Number(lastNumber)) {
      case 0:
        return 'white'
      case 1:
        return 'black'
      case 2:
        return 'blue'
      case 3:
        return 'green'
      case 4:
        return 'pink'
      case 5:
        return 'red'
      case 6:
        return 'purple'
      case 7:
        return 'yellow'
      case 8:
        return 'grey'
      case 9:
        return 'lilac'
    }
  }
  
  function handleChangeColor() {
    setColor(randomColor)
  }
  
  return (
    <>
    <StatusBar barStyle="light-content"/>
  <View style={{backgroundColor: color, flex: 1}}>
  </View>

  <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleChangeColor}>
    <Text style={styles.buttonText}>
      Toque para randomizar cor do fundo
    </Text>
  </TouchableOpacity>
  </>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  button: {
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})