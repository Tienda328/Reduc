import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MianScreen from '../screens/main';
import Home1Screen from '../screens/home';

const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={styles.cotainer}>
      <Text>Details Screen</Text>
    </View>
  );
}
class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          <Stack.Screen name="main" component={MianScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="home1" component={Home1Screen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
