import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomBarShipper from './bottomBarShipper';
import BottomBarTransporter from './bottomBarTransporter';
import { useIsFocused } from '@react-navigation/native';
import { useAuth } from '../CustomHooks/CustomHooks';
import BottomBarSubAdmin from './BottomBarSubAdmin';
import BottomBar from './BottomBar';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [userRole, setUserRole] = useState('');
  console.log('userroleBottom', userRole);

  const getUserInfo = async () => {
    const userRole = await AsyncStorage.getItem('userInfo');
    const usrInfo = JSON.parse(userRole);
    console.log('userInfoBottom', usrInfo);
    setUserRole(usrInfo?.role);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return <>{userRole === 'subAdmin' ? <BottomBarSubAdmin /> : <BottomBar />}</>;
};

export default BottomNav;
