import { View, Text, StatusBar, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, scale } from 'react-native-size-matters';
import DateTab from '../../Components/Tabs/DateTab';
import GateTabs from '../../Components/Tabs/GateTab';
import {
  DeniedData,
  GateUpdateData,
  StaffData,
  VehicleData,
} from '../../Assets/StaticData/StaticData';
import moment from 'moment';
import { MainStyle } from '../../Assets/Style/MainStyle';

const GateUpdateCard = ({ item, selectedTab }: any) => {
  const [label, setLable] = useState('');

  useEffect(() => {
    switch (selectedTab) {
      case 'Visitors':
        setLable('Name');
        break;
      case 'Vehicles':
        setLable('Vehicle');
        break;
      case 'Staff':
        setLable('Staff');
        break;
      case 'Denied':
        setLable('Name');
        break;
      default:
        setLable(''); // Or any default text
        break;
    }
  }, [selectedTab]);

  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 14,
        borderColor: 'rgba(0,0,0,0.06)',
        borderWidth: 1,
        borderRadius: 4,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            fontSize: 16,
            fontWeight: '500',
          }}
        >
          {label}: {item?.item?.name}
        </Text>
        <View
          style={{
            // height: 27,
            backgroundColor:
              item?.item?.type === 'Delivery' ? '#E7F7FF' : '#FFF4E6',
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Inter-Medium',
              color: selectedTab === 'Denied' ? '#FF446D' : '#000000',
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontWeight: '500',
            }}
          >
            {item?.item?.type}
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Inter-Medium',
          color: 'rgb(0, 0, 0, 0.37)',
        }}
      >
        {selectedTab !== 'Denied' ? 'Flat:' : ''} {item?.item?.Flat}
      </Text>
      <Text
        style={{
          fontSize: 12,
          fontFamily: 'Inter-Medium',
          color: 'rgb(0, 0, 0, 0.37)',
        }}
      >
        {selectedTab === 'Denied'
          ? `Time: ${item?.item?.In}`
          : `In: ${item?.item?.In} | Out: ${item?.item?.Out}`}
      </Text>
    </View>
  );
};

const GateUpdate = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Visitors');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const renderGateUpdateCard = (item: any) => {
    return <GateUpdateCard item={item} selectedTab={selectedTab} />;
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Gate Updates"
            isMoreVisible={false}
            onBackPress={() => navigation.goBack()}
          />
          <View style={MainStyle.section}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.greeting}>Today</Text>
              <DateTab
                date={moment().format('DD MMMM YYYY')}
                onPress={() => console.log('Date tab pressed')}
              />
            </View>
            <View style={{ paddingTop: 15 }}>
              <GateTabs
                tabs={['Visitors', 'Vehicles', 'Staff', 'Denied']}
                onTabChange={handleTabChange}
                selectedTab={selectedTab}
              />
            </View>
          </View>
          <View style={MainStyle.section}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                shadowColor: '#727272',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 3,
                padding: 14,
              }}
            >
              <FlatList
                data={
                  selectedTab === 'Visitors'
                    ? GateUpdateData
                    : selectedTab === 'Vehicles'
                    ? VehicleData
                    : selectedTab === 'Staff'
                    ? StaffData
                    : selectedTab === 'Denied'
                    ? DeniedData
                    : null
                }
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderGateUpdateCard}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default GateUpdate;

const styles = StyleSheet.create({
  greeting: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(18),
    fontWeight: '600',
    color: '#000',
  },
  section: {
    padding: moderateScale(15),
  },
});
