// App.js
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';




export default function App(props) {
  
  return (
    <View style={styles.container}>
		{props.children}
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	height: '100%',
	width: '100%'
  },
});



