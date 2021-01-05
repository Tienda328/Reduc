import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

function Details({navigation}) {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  const onAdd = () => {
    if (value === '') {
      return;
    } else {
      let ada = data;
      ada.push(value);
      setData(ada);
    }

    // setData(['caca'])
    // data.push()
  };
  const onDelete = (item) => {
    const deletes = data.indexOf(item);

    data.splice(deletes, 1);
    console.warn(data);
    setData(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={() => onAdd()}>
          <Text style={styles.txtAdd}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View style={styles.containerItem}>
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => onDelete(item)}>
                  <Text style={styles.txtXoa}>xoa</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          // keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default Details;
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
