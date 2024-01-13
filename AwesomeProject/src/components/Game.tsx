import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../styles/color';

export default function Game(): JSX.Element {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
