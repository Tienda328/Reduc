import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function Main({navigation, number}) {
  return (
    <View style={styles.cotainer}>
      <Text>Home Screen</Text>
      <Text>{number}</Text>
      <Button
        title="Go to Detaicasls"
        onPress={() => navigation.navigate('home1')}
      />
    </View>
  );
}

const mapStateProps = (state) => {
  return state;
};

export default connect(mapStateProps)(Main);

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
