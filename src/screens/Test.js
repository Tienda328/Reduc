import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {increment, decrement, congtwe} from '../redux/action';
import {connect} from 'react-redux';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.number}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.increment()}>
          <Text>Tang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.decrement()}>
          <Text>giam</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateProps = (state) => {
  return state;
};

const mapDispatchProps = {
  increment,
  decrement,
  congtwe,
};

export default connect(mapStateProps, mapDispatchProps)(Test);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '80%',
    backgroundColor: 'green',
  },
});
