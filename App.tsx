import React, { useEffect } from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Stack from './src/Navigation/AppStack';
import { Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppNav from './src/Navigation/AppNav';
import AuthProvider from './src/Context/AuthContex';
import { requestCameraPermission } from './src/Utils/PermissionUtils';

function App() {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNav />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
