import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const FIlterTab = ({ tabs = [], onTabChange }: any) => {
  const [activeTab, setActiveTab] = useState(tabs[0]); // default first tab

  const handlePress = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab: string, index: any) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            index !== tabs.length - 1 && { marginRight: moderateScale(10) },
          ]}
          onPress={() => handlePress(tab)}
          activeOpacity={0.8}
        >
          {activeTab === tab ? (
            <LinearGradient
              colors={['#034175', '#37B7FE']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientTab}
            >
              <Text style={[styles.tabText, { color: '#fff' }]}>{tab}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.inactiveTab}>
              <Text style={[styles.tabText, { color: '#000' }]}>{tab}</Text>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FIlterTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tab: {
    flex: 1,
    maxWidth: scale(180),
  },
  gradientTab: {
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(4),
  },
  inactiveTab: {
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(4),
    shadowColor: '#727272',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  tabText: {
    fontSize: scale(16),
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
});
