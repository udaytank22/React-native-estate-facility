import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { scale } from 'react-native-size-matters';

const CustomCheckBox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <View
        style={{
          height: 27,
          width: 27,
          borderWidth: 1.5,
          borderColor: '#000',
          borderRadius: 4,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: checked ? '#106099' : '#fff',
        }}
      >
        {checked && <Text style={{ color: '#fff', fontSize: 16 }}>✓</Text>}
      </View>
      <Text
        style={{
          fontSize: scale(16),
          color: '#000000',
          fontFamily: 'Inter-Medium',
          fontWeight: '500',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;
