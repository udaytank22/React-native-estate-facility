import {
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ListHeader from '../../Components/ListHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchFilterBar from '../../Components/FilterFieldComponent';
import FIlterTab from '../../Components/Tabs/FilterTab';
import {
  businessData,
  businessOwnerData,
  ownerpropertyList,
  propertyList,
} from '../../Assets/StaticData/StaticData';
import { BusinessCard } from '../../Components/CardComponent/BusinessCardCompoent';
import AddBusinessModal from '../../Components/ModalComponents/AddBusinessModal';
import ListPropertyCard from '../../Components/CardComponent/ListPropertyCard';
import AddPropertyModal from '../../Components/ModalComponents/AddPropertModal';
import { scale, verticalScale } from 'react-native-size-matters';
import { MainStyle } from '../../Assets/Style/MainStyle';

const SocietyPageList = ({ route }: any) => {
  const navigation = useNavigation();
  const type = route.params?.type;
  const [headerTitle, setHeaderTitle] = useState('');
  const [selectedTab, setSelectedTab] = useState(
    type === 'Business/Job' ? 'All Profession' : 'All Property',
  );
  const [addBusinessModalVisible, setAddBusinessModalVisible] = useState(false);
  const [addPropertyAddModalVisible, setAddPropertyAddModalVisible] =
    useState(false);

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };

  const handleAdd = () => {
    if (type === 'Business/Job') {
      setAddBusinessModalVisible(true);
    } else {
      setAddPropertyAddModalVisible(true);
    }
    // open modal or navigate
  };

  useEffect(() => {
    switch (type) {
      case 'Create Post':
        setHeaderTitle('Create Post');
        break;
      case 'Business/Job':
        setHeaderTitle('Business/Job');
        break;
      case 'Pre Approval':
        setHeaderTitle('Pre Approval');
        break;
      case 'Call Guard':
        setHeaderTitle('Call Guard');
        break;
      case 'Property Rent/Sell':
        setHeaderTitle('Property Rent/Sell');
        break;
      default:
        setHeaderTitle(''); // Or any default text
        break;
    }
  }, [type]);

  const renderBusinessCardItem = (businessData: any) => {
    return (
      <BusinessCard
        title={businessData?.item?.title}
        type={businessData?.item?.tag}
        name={businessData?.item?.owner}
        FlatNo={businessData?.item?.flat}
        Address={businessData?.item?.address}
        image={businessData?.item?.image}
      />
    );
  };

  const renderPropertyCard = ({ item }: any) => {
    return <ListPropertyCard property={item} />;
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title={headerTitle}
            isMoreVisible={true}
            onBackPress={() => navigation.goBack()}
            onAddPress={handleAdd}
            isExtraOptionVisible={
              selectedTab === 'My Profession'
                ? true
                : selectedTab === 'My Property'
                ? true
                : false
            }
          />
          {/* You can add the rest of the page content here */}
          <View style={MainStyle.section}>
            <FIlterTab
              tabs={
                type === 'Business/Job'
                  ? ['All Profession', 'My Profession']
                  : ['All Property', 'My Property']
              }
              onTabChange={handleTabChange}
            />
            <View style={{ marginTop: 20 }}>
              <SearchFilterBar
                filterOptions={
                  type === 'Business/Job'
                    ? ['Business', 'Job']
                    : ['Rent', 'Sell']
                }
                onSelectFilter={selected => console.log('Selected:', selected)}
              />
            </View>
            {type === 'Business/Job' && (
              <View style={MainStyle.cardListWrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <FlatList
                    data={
                      selectedTab === 'All Profession'
                        ? businessData
                        : businessOwnerData
                    }
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderBusinessCardItem}
                    horizontal={false}
                    scrollEnabled={false}
                    contentContainerStyle={{
                      paddingBottom: verticalScale(280),
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={{ height: 15 }} />
                    )}
                  />
                </ScrollView>
              </View>
            )}
            {type === 'Property Rent/Sell' && (
              <FlatList
                data={
                  selectedTab === 'My Property'
                    ? ownerpropertyList
                    : propertyList
                }
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
            )}
          </View>
        </View>
      </SafeAreaView>
      <AddBusinessModal
        visible={addBusinessModalVisible}
        onClose={() => setAddBusinessModalVisible(false)}
      />
      <AddPropertyModal
        visible={addPropertyAddModalVisible}
        onClose={() => setAddPropertyAddModalVisible(false)}
      />
    </>
  );
};

export default SocietyPageList;
