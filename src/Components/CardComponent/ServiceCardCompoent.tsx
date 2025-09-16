import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { GestureResponderEvent } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface ServiceCardProps {
  Icon: React.FC<SvgProps>; // SVG component
  label: string;
  bgColor: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const ServicesCard: React.FC<ServiceCardProps> = ({
  Icon,
  label,
  bgColor = '#e6ffe7',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.iconWrapper, { backgroundColor: bgColor }]}>
        <Icon height={36} width={36} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scale(180),
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    backgroundColor: '#fff',
    borderRadius: scale(4),
    flex: 1,
    marginHorizontal: scale(5),
    shadowColor: '#727272',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconWrapper: {
    height: verticalScale(36),
    width: scale(36),
    borderRadius: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    paddingLeft: scale(8),
  },
});

export default ServicesCard;
