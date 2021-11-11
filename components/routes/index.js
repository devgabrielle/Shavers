import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Image from 'react-native'

import Home from '../home';
import Login from '../login';
import Welcome from '../Welcome';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login}
            options={{
              headerShown: false,
            }}

        />
        <Stack.Screen name="Welcome" component={Welcome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
