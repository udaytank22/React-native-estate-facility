import { View, Text } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { PdfFile } from '../../Assets/Constant/Images';

const DocumentCard = ({ item }: any) => {
  return (
    <View
      style={{
        paddingHorizontal: scale(14),
        paddingVertical: verticalScale(16),
        borderColor: 'rgba(0, 0, 0, 0.06)',
        borderWidth: 1,
        borderRadius: moderateScale(4),
        justifyContent: 'center',
        width: 150,
        alignItems: 'center',
        gap: 11,
      }}
    >
      <PdfFile height={46} width={46} />
      <Text
        style={{
          fontSize: 14,
          fontFamily: 'Inter-Regular',
          fontWeight: '400',
          color: '#000000',
          textAlign: 'center',
        }}
      >
        {item.title}
      </Text>
    </View>
  );
};

export default DocumentCard;
