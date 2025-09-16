import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Edit, Delete } from '../../Assets/Constant/Images';

const VisitPassCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Left Side - Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Pass Id: {item?.passid}</Text>
          <Text style={styles.subText}>Visitor: {item?.name}</Text>
          <Text style={styles.subText}>Visiting Flat: {item.Flat}</Text>
          <Text style={styles.subText}>Purpose: {item.purpose}</Text>
          <Text style={styles.subText}>Valid: {item.valid}</Text>
          <Text style={[styles.subText, { color: '#000000' }]}>
            Status:{' '}
            <Text
              style={[
                styles.status,
                { color: item.status === 'Active' ? '#35962A' : '#FF446D' },
              ]}
            >
              {item.status}
            </Text>
          </Text>
        </View>

        {/* Right Side - Icons */}
        <View style={styles.iconColumn}>
          <item.icon height={100} width={100} />
        </View>
      </View>
    </View>
  );
};

export default VisitPassCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderColor: 'rgba(0,0,0,0.06)',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    gap: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: '#000',
  },
  subText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
    color: 'rgba(0,0,0,0.37)',
  },
  status: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Inter-Medium',
  },
  iconColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
