import React from 'react';
import {
  //   Button,
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  //   TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {adddata, deleteData} from '../redux/action';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: props.datatest,
    };
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.containerItem}>
        <Text style={styles.txtName}>{item}</Text>
        {/* <TouchableOpacity style={styles.bntDelete}>
          <Text style={styles.txtXoa}>Xoa</Text>
        </TouchableOpacity> */}
      </View>
    );
  };
  onChangeText = (text) => {
    // const dates = [...this.props.datatest];
    const dates = this.props.datatest;
    // tìm kiếm theo chữ hoa
    if (text) {
      const newData = dates.filter((item) => {
        const itemData = item ? item.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      this.setState({
        value: text,
        data: newData,
      });
    } else {
      this.setState({
        value: text,
        data: dates,
      });
    }
  };
  render() {
    const {value, data} = this.state;
    // const color = arrColor[Math.floor(Math.random() * arrColor.length)];
    return (
      <View style={styles.cotainer}>
        <View style={styles.cotainerHeader}>
          <Text style={styles.txtSearch}>Tìm kiếm :</Text>
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={(text) => this.onChangeText(text)}
          />
        </View>
        <View style={styles.viewBorder} />
        <FlatList
          ListFooterComponent={<View style={styles.viewFooter} />}
          data={data}
          renderItem={(item) => this.renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
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
export default connect(mapStateProps, mapDispatchProps)(Search);

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
    height: 50,
    fontSize: 20,
    backgroundColor: '#fff',
    paddingLeft: 5,
  },
  txtXoa: {
    color: 'white',
    fontWeight: '300',
  },
  txtNumber: {
    fontSize: 25,
  },
  viewBorder: {
    height: 1,
    borderWidth: 1,
    borderBottomColor: '#FAFAFA',
    marginTop: 15,
  },
  viewFooter: {height: 35},
  bntDelete: {
    backgroundColor: 'red',
    justifyContent: 'center',
    marginRight: 16,
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
  },
  txtSearch: {
    marginHorizontal: 5,
  },
  btnAdd: {
    backgroundColor: 'blue',
    padding: 10,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  cotainerHeader: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    backgroundColor: '#58FAF4',
    shadowColor: '#000',
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  txtName: {
    flex: 1,
    marginLeft: 8,
    color: 'green',
    paddingVertical: 10,
    fontSize: 22,
  },
  containerItem: {
    marginTop: 12,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
