import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/detail';
import TestApiScreen from '../screens/testApi';

const Stack = createStackNavigator();

class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen name="TestApi" component={TestApiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
