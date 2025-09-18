// Components/VehicleCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface VehicleCardProps {
  carNumber: string;
  model: string;
  color: string;
  parkingSlot: string;
  contact: string;
  type: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  carNumber,
  model,
  color,
  parkingSlot,
  contact,
  type,
}) => {
  return (
    <View style={styles.card}>
      <View
        style={{
          paddingHorizontal: scale(14),
          paddingVertical: verticalScale(10),
          borderColor: 'rgba(0, 0, 0, 0.06)',
          borderWidth: 1,
          borderRadius: moderateScale(4),
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        <Text style={styles.label}>
          {type}: {carNumber}
        </Text>
        <Text style={styles.value}>Model / Brand: {model}</Text>
        <Text style={styles.value}>Color: {color}</Text>
        <Text style={styles.value}>Parking Slot: {parkingSlot}</Text>
        <Text style={styles.value}>Contact: {contact}</Text>
      </View>
    </View>
  );
};

export default VehicleCard;

const styles = StyleSheet.create({
  card: {
    marginTop: verticalScale(12),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: scale(14),
    paddingVertical: verticalScale(10),
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Inter-Medium',
  },
  value: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.37)',
    fontFamily: 'Inter-Medium',
  },
});
