import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';

const GateTabs = ({ tabs = [], onTabChange }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = (index: any) => {
    setActiveIndex(index);
    onTabChange?.(tabs[index]); // send back selected tab
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab: string, index: any) => {
        const isActive = activeIndex === index;
        return (
          <TouchableOpacity
            key={index}
            style={styles.tabWrapper}
            onPress={() => handlePress(index)}
            activeOpacity={0.8}
          >
            {isActive ? (
              <LinearGradient
                colors={['#034175', '#37B7FE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 5 }}
              >
                <View style={styles.activeTab}>
                  <Text style={styles.activeText}>{tab}</Text>
                </View>
              </LinearGradient>
            ) : (
              <View style={styles.inactiveTab}>
                <Text style={styles.inactiveText}>{tab}</Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabWrapper: {
    marginHorizontal: scale(2),
  },
  activeTab: {
    paddingVertical: 8.5,
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveTab: {
    backgroundColor: 'rgba(117, 191, 254, 0.18)',
    borderRadius: 5,
    paddingVertical: 8.5,
    paddingHorizontal: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeText: {
    fontFamily: 'Inter',
    color: '#fff',
    fontWeight: '500',
    fontSize: 12,
  },
  inactiveText: {
    fontFamily: 'Inter',
    color: '#000',
    fontWeight: '500',
    fontSize: 12,
  },
});

export default GateTabs;
