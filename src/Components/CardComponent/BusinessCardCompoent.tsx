import React, { memo } from 'react';
import { Image, Text, View } from 'react-native';

type BusinessCardProps = {
  title: string;
  type: string;
  name: string;
  FlatNo: string;
  Address: string;
  image: any;
};

const BusinessCardComponent = ({
  title,
  type,
  name,
  FlatNo,
  Address,
  image,
}: BusinessCardProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 16,
        borderColor: 'rgba(0,0,0,0.06)',
        borderWidth: 1,
        borderRadius: 4,
      }}
    >
      <View
        style={{
          backgroundColor: '#FFFFFF',
          shadowColor: '#727272',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Section */}
        <View
          style={{
            flex: 1,
            width: 221,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Inter-Medium',
                fontSize: 16,
                fontWeight: '500',
                color: '#000',
                marginRight: 5,
              }}
            >
              {title}
            </Text>

            <View
              style={{
                backgroundColor: '#E6F7FF',
                paddingHorizontal: 10,
                paddingVertical: 2,
                borderRadius: 12,
              }}
            >
              <Text
                style={{
                  fontFamily: 'Inter-Medium',
                  fontSize: 14,
                  fontWeight: '500',
                  color: '#000',
                }}
              >
                {type}
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: 12,
              color: 'rgb(0, 0, 0, 0.37)',
              marginTop: 5,
              fontWeight: '500',
              fontFamily: 'Inter-Medium',
            }}
          >
            Owner Name: {name}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'rgb(0, 0, 0, 0.37)',
              marginTop: 5,
              fontWeight: '500',
              fontFamily: 'Inter-Medium',
            }}
          >
            Flat: {FlatNo}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'rgb(0, 0, 0, 0.37)',
              marginTop: 5,
              fontWeight: '500',
              fontFamily: 'Inter-Medium',
            }}
          >
            Address: {Address}
          </Text>
        </View>

        {/* Right Section - Image */}
        {image ? (
          <Image
            source={image}
            style={{
              height: 86,
              width: 58,
              borderRadius: 8,
            }}
            resizeMode="cover"
          />
        ) : null}
      </View>
    </View>
  );
};

export const BusinessCard = memo(BusinessCardComponent);
