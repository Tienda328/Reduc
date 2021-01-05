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

  onXoa = (item) => {
    const {dataTest} = this.state;
    const deletes = dataTest.indexOf(item);
    dataTest.splice(deletes, 1);
    Alert.alert(
      'Alert Title',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            this.setState({
              dataTest,
            }),
        },
      ],
      {cancelable: false},
    );
  };

  renderItem = (item) => (
    <View style={styles.containerItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => this.onXoa(item)}>
        <Text style={styles.txtXoa}>xoa</Text>
      </TouchableOpacity>
    </View>
  );

  onAdd = () => {
    const {value, dataTest} = this.state;
    if (value === '') {
      return;
    }
    let datanew = dataTest;
    datanew.push(value);
    this.setState({
      value: '',
      dataTest: datanew,
    });
  };
  onChangeText = (text) => {
    this.setState({
      value: text,
    });
  };

  render() {
    const {value, dataTest} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <TextInput
            value={value}
            onChangeText={this.onChangeText}
            style={styles.input}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={this.onAdd}>
            <Text style={styles.txtAdd}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={dataTest}
            renderItem={({item}) => this.renderItem(item)}
            // keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    flexDirection: 'row',
  },
  containerItem: {
    marginTop: 8,
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
    borderRadius: 4,
    backgroundColor: 'yellow',
    borderColor: 'yellow',
    height: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 8,
    borderRadius: 4,
    borderWidth: 1,
    marginHorizontal: 8,
    height: 40,
    flex: 1,
  },
  txtXoa: {
    color: 'red',
  },
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginRight: 8,
    borderRadius: 4,
  },
  txtAdd: {
    paddingHorizontal: 10,
    color: 'white',
  },
});
