import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BlockWiseBillCardProps {
  item: {
    Billid: string;
    month: string;
    flat: string;
    amount: string;
    dueDate: string;
    penalty: string;
    status: 'Paid' | 'Unpaid' | 'Overdue';
  };
}

export const BlockWiseBillCard: React.FC<BlockWiseBillCardProps> = ({
  item,
}) => {
  return (
    <View style={styles.blockWiseBillCardWrapper}>
      <Text style={styles.title}>Bill ID: {item.Billid}</Text>
      <Text style={styles.subText}>Month: {item.month}</Text>
      <Text style={styles.subText}>Flat: {item.flat}</Text>
      <Text style={styles.subText}>Amount: {item.amount}</Text>
      <Text style={styles.subText}>Due Date: {item.dueDate}</Text>
      <Text style={styles.subText}>Penalty: {item.penalty}</Text>
      <Text style={[styles.subText, { color: '#000000' }]}>
        Status:{' '}
        <Text
          style={[
            styles.status,
            {
              color: item.status === 'Paid' ? '#35962A' : '#FF446D',
            }, // This color should be dynamic based on status
          ]}
        >
          {' '}
          {item.status}{' '}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  blockWiseBillCardWrapper: {
    width: 180,
    paddingLeft: 14,
    paddingVertical: 16,
    borderColor: 'rgba(0,0,0,0.06)',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginVertical: 8,
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
