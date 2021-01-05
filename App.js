/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.scrollView}>
        <Text>Hehhe</Text>
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
