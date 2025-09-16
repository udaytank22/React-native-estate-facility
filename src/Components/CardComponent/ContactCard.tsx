import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { GestureResponderEvent } from 'react-native'; // Keep this if used, or remove if not.
import { SvgProps } from 'react-native-svg';

// Types
interface ContactCardProps {
  Icon: React.FC<SvgProps>; // SVG component
  name: string;
  contact: string;
  onPressCall?: (event: GestureResponderEvent) => void;
  CallIcon: React.FC<SvgProps>; // Call button SVG
}

const ContactCard: React.FC<ContactCardProps> = ({
  Icon,
  name,
  contact,
  onPressCall,
  CallIcon,
}) => {
  return (
    <View style={styles.container}>
      {/* Left section: icon + name + contact */}
      <View style={styles.leftSection}>
        <Icon height={verticalScale(36)} width={scale(36)} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.contact}>{contact}</Text>
        </View>
      </View>

      {/* Call button */}
      <TouchableOpacity onPress={onPressCall}>
        <CallIcon height={verticalScale(28)} width={scale(28)} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(10),
    borderColor: 'rgba(0, 0, 0, 0.06)',
    borderWidth: 1,
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(20),
  },
  name: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Inter-Medium',
  },
  contact: {
    fontSize: scale(12),
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.37)',
    fontFamily: 'Inter-Medium',
  },
});

export default ContactCard;
