import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';

import RightArrow from '../../Assets/Image/Icons/RightArrow.svg';
import Cab from '../../Assets/Image/Icons/Cab.svg';
import Delivery from '../../Assets/Image/Icons/Delivery.svg';
import Courior from '../../Assets/Image/Icons/Courior.svg';
import Guest from '../../Assets/Image/Icons/Guest.svg';
import Other from '../../Assets/Image/Icons/Other.svg';
import Dailtahelp from '../../Assets/Image/Icons/DailyHelp1.svg';

const PreApprovalCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <TouchableOpacity
      style={{
        borderColor: 'rgba(0,0,0,0.06)',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 14,
        paddingVertical: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10, // 👈 so cards don’t stick together
      }}
      onPress={item?.screen}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View
          style={{
            height: verticalScale(36),
            width: scale(36),
            borderRadius: 3.5,
            backgroundColor: '#FEB2371A',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon height={30} width={30} />
          {/* You can render icon here if needed */}
        </View>
        <Text style={{ fontSize: scale(16), fontFamily: 'Inter-Medium' }}>
          {item.label}
        </Text>
      </View>
      <RightArrow height={verticalScale(12)} width={scale(6)} />
    </TouchableOpacity>
  );
};

const PreApproval = () => {
  const navigation = useNavigation();

  const PreApprovalListData = [
    {
      id: 1,
      label: 'Cab',
      icon: Cab,
      screen: () => navigation.navigate('PreCabBook'),
    },
    {
      id: 2,
      label: 'Delivery',
      icon: Delivery,
    },
    {
      id: 3,
      label: 'Collect at Gate',
      icon: Courior,
    },
    {
      id: 4,
      label: 'Guest',
      icon: Guest,
    },
    {
      id: 5,
      label: 'Others',
      icon: Other,
    },
  ];

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Notify Gate"
            onBackPress={() => navigation.goBack()}
          />
          <View style={{ paddingHorizontal: 24 }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                marginTop: 20,
                shadowColor: '#727272',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
                padding: 14,
              }}
            >
              <FlatList
                data={PreApprovalListData}
                renderItem={({ item }) => <PreApprovalCard item={item} />}
                keyExtractor={item => item.id.toString()}
              />
            </View>

            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                marginTop: 24,
                shadowColor: '#727272',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
                padding: 14,
              }}
            >
              <View
                style={{
                  borderColor: 'rgba(0,0,0,0.06)',
                  borderWidth: 1,
                  borderRadius: 4,
                  paddingHorizontal: 14,
                  paddingVertical: 10,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10, // 👈 so cards don’t stick together
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12,
                  }}
                >
                  <View
                    style={{
                      height: verticalScale(36),
                      width: scale(36),
                      borderRadius: 3.5,
                      backgroundColor: '#FEB2371A',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Dailtahelp height={30} width={30} />
                    {/* You can render icon here if needed */}
                  </View>
                  <Text
                    style={{ fontSize: scale(16), fontFamily: 'Inter-Medium' }}
                  >
                    Daily Help
                  </Text>
                </View>
                <RightArrow height={verticalScale(12)} width={scale(6)} />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PreApproval;
