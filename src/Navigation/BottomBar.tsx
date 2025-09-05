import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Society from '../screens/Society/Society';
import Timeline from '../screens/Timeline/Timeline';
import Profile from '../screens/Profile/Profile';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

type TabName = 'Home' | 'Society' | 'Timeline' | 'Profile';

const tabs: {
  name: TabName;
  component: React.ComponentType<any>;
  icon: string;
}[] = [
  { name: 'Home', component: Home, icon: 'home' },
  { name: 'Society', component: Society, icon: 'building' },
  { name: 'Timeline', component: Timeline, icon: 'th-large' }, // pick better grid-like icon if needed
  { name: 'Profile', component: Profile, icon: 'user' },
];

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { icon, name } = tabs[index];

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.tabButton]}
          >
            <View style={[styles.innerTab]}>
              {isFocused && <View style={styles.activeIndicator} />}
              <Icon
                name={icon}
                size={24}
                color={isFocused ? '#003366' : '#000'}
                solid={isFocused}
              />
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? '#003366' : '#000' },
                ]}
              >
                {name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      {tabs.map(tab => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  innerTab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: '60%', // adjust width to control pill size
    height: 4, // thickness of bar
    backgroundColor: '#003366',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});
