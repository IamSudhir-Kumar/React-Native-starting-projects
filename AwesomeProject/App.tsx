import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.design}>Hello World</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  design: {
    color: '#000000',
  },
});
