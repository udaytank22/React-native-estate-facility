import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SocietyPageList from '../screens/SocietyPageList/SocietyPageList';
import PreApproval from '../screens/PreApproval/PreApproval';
import PreCabBook from '../screens/PreApproval/PreCabBook';
import BottomNav from './CommanBottomTab';
import GateUpdate from '../screens/GateUpdate/GateUpdate';
import Bill from '../screens/Bill/Bill';
import { AppStackParamList } from './NavigationType';
import VisitPass from '../screens/VisitPass/VisitPass';

const stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <>
      <stack.Navigator>
        <stack.Screen
          name="bottomBar"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="preApproved"
          component={PreApproval}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="SocietyList"
          component={SocietyPageList}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="PreCabBook"
          component={PreCabBook}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="GateUpdate"
          component={GateUpdate}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Bill"
          component={Bill}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="VisitPass"
          component={VisitPass}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </>
  );
};

export default AppStack;
