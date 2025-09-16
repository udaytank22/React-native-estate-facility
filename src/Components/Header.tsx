// Components/Header.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, scale } from 'react-native-size-matters';

import BackArrow from '../Assets/Image/Icons/arrow-narrow-left.svg';
import HeaderBuilding from '../Assets/Image/HeaderBuilding.svg';

type HeaderProps = {
  title: string;
  actionText?: string;
  onActionPress?: () => void;
  description?: string;
  backArrow?: boolean;
  buildingVisible?: boolean;
};

const Header: React.FC<HeaderProps> = ({
  title,
  actionText,
  onActionPress,
  description,
  backArrow,
  buildingVisible,
}) => {
  const navigation = useNavigation<any>();
  return (
    <LinearGradient
      colors={['#106099', '#2181bf', '#106099']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBackground}
    >
      {buildingVisible && (
        <View style={styles.buildingWrapper}>
          <HeaderBuilding width={scale(208)} height={scale(146.41)} />
        </View>
      )}
      <View style={[styles.container, { gap: 10 }]}>
        <TouchableOpacity
          onPress={onActionPress}
          style={{ height: moderateScale(24), width: moderateScale(24) }}
        >
          {backArrow && (
            <BackArrow
              width={24}
              height={24}
              onPress={() => navigation.goBack()}
            />
          )}
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.descriptionText}>{description}</Text>
            {actionText && (
              <TouchableOpacity onPress={onActionPress}>
                <Text style={styles.actionText}> {actionText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  gradientBackground: {
    height: scale(120),
  },
  container: {
    paddingHorizontal: moderateScale(24),
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: scale(32),
    fontWeight: '700',
    color: '#fff',
  },
  actionText: {
    fontSize: scale(12),
    fontWeight: '600',
    color: '#fff',
    textDecorationLine: 'underline',
    fontFamily: 'Inter-Medium',
  },
  descriptionText: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(12),
    fontWeight: '400',
    color: '#fff',
  },
  buildingWrapper: {
    position: 'absolute',
    right: -45,
    bottom: 0,
    height: scale(100), // 👈 show only half (half of 146 ≈ 73)
    overflow: 'hidden',
    zIndex: 0,
  },
});
