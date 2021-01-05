import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dataTest: [],
    };
  }

  componentDidMount() {
    this.getLoginAPI();
  }

  getLoginAPI = () => {
    let details = {
      type: 2,
      phone_number: '0364758718',
      password: 'Tiendat328',
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://sandboxappkh.tienngay.vn/auth/signin', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);

        // AlertIOS.alert(
        //   'POST Response',
        //   'Response Body ' + JSON.stringify(responseData.role),
        // );
      })
      .done();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>fasfdas</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
