import React from 'react';
import {
  Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {adddata, deleteData} from '../redux/action';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      color: 'blue',
    };
  }

  onAdd = () => {
    const {value} = this.state;
    const arrColor = ['green', 'blue', 'gray', 'red'];
    this.setState({
      color: arrColor[Math.floor(Math.random() * arrColor.length)],
    });
    if (value === '') {
      return;
    } else {
      this.props.adddata(value);
      this.setState({
        value: '',
      });
    }
  };
  onDelete = (item) => {
    this.props.deleteData(item);
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.containerItem}>
        <Text style={styles.txtName}>{item}</Text>
        <TouchableOpacity
          style={styles.bntDelete}
          onPress={() => this.onDelete(item)}>
          <Text style={styles.txtXoa}>Xoa</Text>
        </TouchableOpacity>
      </View>
    );
  };
  onChangeText = (text) => {
    this.setState({
      value: text,
    });
  };
  render() {
    const {value, color} = this.state;
    const {number, navigation, datatest} = this.props;
    // const color = arrColor[Math.floor(Math.random() * arrColor.length)];
    return (
      <View style={styles.cotainer}>
        <View style={styles.containerNumber}>
          <Text style={styles.txtNumber}>{number}</Text>
          <Button
            title="Go to Detaicasls"
            onPress={() => navigation.navigate('home1')}
          />
        </View>
        <View style={styles.cotainerHeader}>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => this.onChangeText(text)}
          />
          <TouchableOpacity
            style={[styles.btnAdd, {backgroundColor: color}]}
            onPress={() => this.onAdd()}>
            <Text style={styles.txtAdd}>Add</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={datatest}
          renderItem={(item) => this.renderItem(item)}
          // keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const mapStateProps = (state) => {
  return state;
};
const mapDispatchProps = {
  adddata,
  deleteData,
};
export default connect(mapStateProps, mapDispatchProps)(Main);

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  txtAdd: {
    color: 'white',
  },
  containerNumber: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    marginHorizontal: 8,
    borderWidth: 1,
    paddingLeft: 5,
    borderColor: 'gray',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtXoa: {
    color: 'white',
    fontWeight: '300',
  },
  txtNumber: {
    fontSize: 25,
  },
  bntDelete: {
    backgroundColor: 'red',
    justifyContent: 'center',
    marginRight: 16,
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  btnAdd: {
    // backgroundColor: 'blue',
    padding: 10,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  cotainerHeader: {
    flexDirection: 'row',
  },
  txtName: {
    flex: 1,
    marginLeft: 8,
    color: 'green',
    fontSize: 22,
  },
  containerItem: {
    marginTop: 12,
    marginHorizontal: 12,
    backgroundColor: 'yellow',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
