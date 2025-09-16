import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import FIlterTab from '../../Components/Tabs/FilterTab';
import { MainStyle } from '../../Assets/Style/MainStyle';
import SearchFilterBar from '../../Components/FilterFieldComponent';
import { scale } from 'react-native-size-matters';
import {
  GeneralFees,
  MaintananceBill,
  MaintanceCardBillBlockWise,
} from '../../Assets/StaticData/StaticData';
import PaymentCard from '../../Components/CardComponent/PaymentCard';
import { Delete, Edit } from '../../Assets/Constant/Images';
import { BlockWiseBillCard } from '../../Components/CardComponent/BlockWiseBillCard';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import AddBillModal from '../../Components/ModalComponents/AddBillModalComponent';

const Bill = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('General Bills');
  const [addBillModalVisible, setAddBillModalModalVisible] = useState(false);

  const handleAdd = () => {
    console.log('111');
    setAddBillModalModalVisible(true);
  };

  const handleTabChange = (tab: any) => {
    setSelectedTab(tab);
  };

  const renderPaymentCard = ({ item }: any) => {
    return <PaymentCard item={item} />;
  };

  const renderBlockWiseBillCard = ({ item }: any) => {
    return <BlockWiseBillCard item={item} />;
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Bills"
            isMoreVisible={true}
            onBackPress={() => navigation.goBack()}
            onAddPress={handleAdd}
            isExtraOptionVisible={
              selectedTab === 'Maintenance Bills' ? true : false
            }
          />

          {/* filter section */}
          <View style={MainStyle.section}>
            <FIlterTab
              tabs={['General Bills', 'Maintenance Bills']}
              onTabChange={handleTabChange}
            />

            {/* tab section for general bill */}
            {selectedTab === 'General Bills' ? (
              <View style={{ marginTop: 20 }}>
                <SearchFilterBar
                  filterOptions={['Paid', 'Unpaid', 'Overdue']}
                  onSelectFilter={selected =>
                    console.log('Selected:', selected)
                  }
                />
              </View>
            ) : (
              <View style={MainStyle.cardListWrapper}>
                <View style={styles.card}>
                  <View style={styles.row}>
                    {/* Left Side - Text */}
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>
                        Bill ID: {MaintananceBill[0]?.name}
                      </Text>
                      <Text style={styles.subText}>
                        Month: {MaintananceBill[0]?.month}
                      </Text>
                      <Text style={styles.subText}>
                        Amount: {MaintananceBill[0]?.amount}
                      </Text>
                      <Text style={styles.subText}>
                        Due Date: {MaintananceBill[0]?.dueDate}
                      </Text>
                    </View>

                    {/* Right Side - Icons */}
                    <View style={styles.iconColumn}>
                      <TouchableOpacity
                        onPress={() => console.log('Edit pressed')}
                      >
                        <Edit height={24} width={24} />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => console.log('Delete pressed')}
                      >
                        <Delete height={24} width={24} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}

            {/* filter tab for the Maintance tab */}
            {selectedTab === 'Maintenance Bills' && (
              <View style={{ marginTop: 20 }}>
                <SearchFilterBar
                  filterOptions={['Paid', 'Unpaid', 'Overdue']}
                  onSelectFilter={selected =>
                    console.log('Selected:', selected)
                  }
                />
              </View>
            )}

            {/* general bills */}
            {selectedTab === 'General Bills' && (
              <View style={MainStyle.cardListWrapper}>
                <FlatList
                  data={GeneralFees}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderPaymentCard}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            )}

            {selectedTab === 'Maintenance Bills' && (
              <>
                <View style={{ marginTop: 15 }}>
                  <Text style={styles.label}>Block A</Text>
                </View>

                <View style={{ marginTop: 10 }}>
                  <FlatList
                    data={MaintanceCardBillBlockWise}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderBlockWiseBillCard}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => (
                      <View style={{ marginHorizontal: 5 }} />
                    )}
                  />
                </View>
              </>
            )}
          </View>

          <View
            style={[
              MainStyle.section,
              { position: 'absolute', bottom: 70, flex: 1, width: '100%' },
            ]}
          >
            <MainButtonComponent
              title="Download Pdf"
              handleButtonPress={() => console.log('Download Pdf pressed')}
            />
          </View>
        </View>
      </SafeAreaView>

      <AddBillModal
        visible={addBillModalVisible}
        onClose={() => setAddBillModalModalVisible(false)}
      />
    </>
  );
};

export default Bill;

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
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(16),
    fontWeight: '500',
    color: '#000000',
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
