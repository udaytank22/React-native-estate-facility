import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Society from '../screens/Society/Society';
import Timeline from '../screens/Timeline/Timeline';
import Profile from '../screens/Profile/Profile';
import bottomBar from './BottomBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const stack = createNativeStackNavigator();
const Stack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="bottomBar"
          component={bottomBar}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Stack;
