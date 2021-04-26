import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement, doimau1, doimau2} from '../redux/action';
import {coler} from '../asset/coler';

class Counter extends React.Component {
  render() {
    return <Text>{this.props.number}</Text>;
  }
}

class Counter2 extends React.Component {
  render() {
    return <Text>{this.props.number}</Text>;
  }
}

class Home extends React.Component {
  tang = () => {
    const {isButon} = this.props;
    if (isButon === true) {
      this.props.doimau1();
    } else {
      this.props.doimau2();
    }
    // store.dispatch({
    //   type: 'INCREMENT',
    // });
    this.props.increment();
  };
  giam = () => {
    const {isButon} = this.props;
    if (isButon === true) {
      this.props.doimau1();
    } else {
      this.props.doimau2();
    }
    this.props.decrement();
  };

  render() {
    const {isButon} = this.props;
    return (
      <SafeAreaView style={styles.scrollView}>
        <NewCount1 />
        <NewCount2 />
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isButon ? coler.green : coler.yellow},
          ]}
          onPress={this.tang}>
          <Text>Tang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: isButon ? coler.green : coler.yellow},
          ]}
          onPress={this.giam}>
          <Text>Giam</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateProps = (state) => {
  return state;
};

const mapDispatchProps = {
  increment,
  decrement,
  doimau1,
  doimau2,
};

const NewCount1 = connect(mapStateProps)(Counter);
const NewCount2 = connect(mapStateProps)(Counter2);

const newsd = connect(mapStateProps, mapDispatchProps)(Home);

export default newsd;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
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
  },
});
