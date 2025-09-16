import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bottomBar from './BottomBar';
import SplashScreen from '../screens/Splash/Splash';
import Login from '../screens/Authentcation/Login';
import RegisterUser from '../screens/Authentcation/RegisterUser';
import OtpVerify from '../screens/Authentcation/OtpVerify';
import LoginWithMobile from '../screens/Authentcation/LoginWithMobile';
import ResetPassword from '../screens/Authentcation/ResetPassword';
import OnGoing from '../screens/OnGoing/OnGoing';
import AddSociety from '../screens/Authentcation/AddSociety';
import { AuthStackParamList } from './NavigationType';

const stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <>
      <stack.Navigator>
        <stack.Screen
          name="OnGoing"
          component={OnGoing}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="LoginWithMobile"
          component={LoginWithMobile}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="OtpVerify"
          component={OtpVerify}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="AddSociety"
          component={AddSociety}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </>
  );
};

export default AuthStack;
