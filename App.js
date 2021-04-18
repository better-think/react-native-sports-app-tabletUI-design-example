/**
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {SelectGame} from './src/Screens/SelectGame';
import {GameLogs} from './src/Screens/GameLogs';
import {Games} from './src/Screens/Games';
import {Players} from './src/Screens/Players';
import {Teams} from './src/Screens/Teams';
import {UpdateLineUp} from './src/Screens/UpdateLineUp';
import {Period} from './src/Screens/Period';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="updatelineup" component={UpdateLineUp} /> */}
        <Stack.Screen name="selectgame" component={SelectGame} />
        <Stack.Screen name="gamelogs" component={GameLogs} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Players" component={Players} />
        <Stack.Screen name="Teams" component={Teams} />
        <Stack.Screen name="updatelineup" component={UpdateLineUp} />
        <Stack.Screen name="period" component={Period} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
