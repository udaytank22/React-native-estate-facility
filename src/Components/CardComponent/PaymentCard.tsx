import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Edit, Delete } from '../../Assets/Constant/Images';

const PaymentCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        {/* Left Side - Text */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subText}>Amount: {item.amount}</Text>
          <Text style={styles.subText}>Due Date: {item.dueDate}</Text>
          <Text style={[styles.subText, { color: '#000000' }]}>
            Status:{' '}
            <Text
              style={[
                styles.status,
                { color: item.status === 'Paid' ? '#35962A' : '#FF446D' },
              ]}
            >
              {item.status}
            </Text>
          </Text>
        </View>

        {/* Right Side - Icons */}
        <View style={styles.iconColumn}>
          <TouchableOpacity onPress={() => console.log('Edit pressed')}>
            <Edit height={24} width={24} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Delete pressed')}>
            <Delete height={24} width={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaymentCard;

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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
  },
});
