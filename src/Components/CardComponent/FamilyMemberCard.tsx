// Components/FamilyMemberCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface FamilyMemberCardProps {
  name: string;
  relation: string;
  gender: string;
  mobileNo: string;
  contact: string;
}

const FamilyMemberCard: React.FC<FamilyMemberCardProps> = ({
  name,
  relation,
  gender,
  mobileNo,
  contact,
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
        <Text style={styles.label}>{name}</Text>
        <Text style={styles.value}>Relation: {relation}</Text>
        <Text style={styles.value}>Gender: {gender}</Text>
        <Text style={styles.value}>Mobile Number: {mobileNo}</Text>
        <Text style={styles.value}>Contact: {contact}</Text>
      </View>
    </View>
  );
};

export default FamilyMemberCard;

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
