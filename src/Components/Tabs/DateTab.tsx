import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Date } from '../../Assets/Constant/Images';

const DateTab = ({ date = '30 August 2025', onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={['#034175', '#37B7FE']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 5 }}
      >
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 4.5,
          }}
        >
          <View style={styles.container}>
            <Text style={styles.text}>{date}</Text>
            <Date height={24} width={24} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6, // extra padding inside
  },
  text: {
    fontFamily: 'Inter',
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    marginRight: 8, // spacing between text and icon
  },
});

export default DateTab;
