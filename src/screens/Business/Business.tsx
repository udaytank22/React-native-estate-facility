import { View, Text, StatusBar, ScrollView, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import SearchFilterBar from '../../Components/FilterFieldComponent';
import { MainStyle } from '../../Assets/Style/MainStyle';
import PropertyCard from '../../Components/CardComponent/ListPropertyCard';
import { propertyList } from '../../Assets/StaticData/StaticData';
import { scale } from 'react-native-size-matters';

const Business = () => {
  const navigation = useNavigation();

  const renderPropertyCard = ({ item }: any) => {
    console.log('item', item);
    return (
      <PropertyCard
        property={item}
        onPress={() =>
          navigation.navigate('BusinessDetails', { businessId: item.id })
        }
      />
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Business"
            isMoreVisible={true}
            isExtraOptionVisible={true}
            onBackPress={() => navigation.goBack()}
          />

          <View style={MainStyle.section}>
            <SearchFilterBar />

            <ScrollView showsVerticalScrollIndicator={false}>
              <FlatList
                data={propertyList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderPropertyCard}
                numColumns={2}
                horizontal={false}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                  // marginBottom: 15,
                }}
                contentContainerStyle={{
                  paddingTop: 26,
                  paddingBottom: scale(200),
                }}
              />
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Business;
