import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import SearchFilterBar from '../../Components/FilterFieldComponent';

import { Request, PhoneCall } from '../../Assets/Constant/Images';
import { socityContact, tabs } from '../../Assets/StaticData/StaticData';
import ContactCard from '../../Components/CardComponent/ContactCard';
import { MainStyle } from '../../Assets/Style/MainStyle';

const People = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<number | null>(tabs[0].id);

  const renderContact = ({ item }: { item: (typeof socityContact)[0] }) => (
    <ContactCard
      Icon={item.icon}
      name={item.name}
      contact={item.contact}
      CallIcon={PhoneCall}
      onPressCall={() => console.log(`Calling ${item.name}...`)}
    />
  );

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <View style={{ flex: 1 }}>
          <View>
            <ListHeader
              title="People"
              isMoreVisible={false}
              onBackPress={() => navigation.goBack()}
            />
            <ScrollView
              style={{ backgroundColor: '#FBFBFB' }}
              showsVerticalScrollIndicator={false}
            >
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={[MainStyle.section, { flexDirection: 'row' }]}>
                  {tabs.map(tab => {
                    const Icon = tab.icon;
                    const isSelected = selected === tab.id;

                    return (
                      <TouchableOpacity
                        key={tab.id}
                        style={[
                          styles.card,
                          isSelected && styles.selectedCard, // highlight border
                        ]}
                        onPress={() => setSelected(tab.id)}
                      >
                        <View
                          style={[
                            styles.helpIconWrapper,
                            { backgroundColor: tab.bgColor },
                          ]}
                        >
                          <Icon height={30} width={30} />
                        </View>
                        <Text style={styles.label}>{tab.label}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>

              {/* new Request */}
              <View style={MainStyle.section}>
                <TouchableOpacity style={styles.requestCard}>
                  {/* Left side: icon + text */}
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View
                      style={[
                        styles.helpIconWrapper,
                        { backgroundColor: '#e6f4ff' },
                      ]}
                    >
                      <Request height={30} width={30} />
                    </View>
                    <Text style={styles.label}>New Request</Text>
                  </View>

                  {/* Right side: number */}
                  <View
                    style={{
                      borderRadius: 22,
                      height: 22,
                      width: 22,
                      backgroundColor: '#FF3B3B',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#FFFFFF',
                      }}
                    >
                      2
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              {/* search section  */}
              <View style={MainStyle.section}>
                <SearchFilterBar
                  filterOptions={[]}
                  onSelectFilter={selected =>
                    console.log('Selected:', selected)
                  }
                />
              </View>

              {/* Block A contact */}
              <View style={MainStyle.section}>
                <Text style={styles.greeting}>Block A</Text>
                <View style={MainStyle.cardListWrapper}>
                  <FlatList
                    data={socityContact}
                    renderItem={renderContact}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>

              {/* Block B contact */}
              <View style={MainStyle.section}>
                <Text style={styles.greeting}>Block B</Text>
                <View style={MainStyle.cardListWrapper}>
                  <FlatList
                    data={socityContact}
                    renderItem={renderContact}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>

              {/* BLock B contact */}
              <View style={[MainStyle.section, { paddingBottom: 150 }]}>
                <Text style={styles.greeting}>Block c</Text>
                <View style={MainStyle.cardListWrapper}>
                  <FlatList
                    data={socityContact}
                    renderItem={renderContact}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default People;

const styles = StyleSheet.create({
  card: {
    width: scale(154),
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    backgroundColor: '#fff',
    borderRadius: scale(4),
    marginHorizontal: scale(5),
    shadowColor: '#727272',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCard: {
    borderColor: '#034175', // blue border for selected
    borderWidth: 1,
  },
  helpIconWrapper: {
    height: verticalScale(36),
    width: scale(36),
    borderRadius: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    paddingLeft: scale(8),
  },
  section: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: verticalScale(10),
  },
  requestCard: {
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // 🔑 pushes left + right apart
    paddingHorizontal: 14, // use horizontal padding instead of only left
    backgroundColor: '#fff',
    borderRadius: scale(4),
    marginHorizontal: scale(5),
    shadowColor: '#727272',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  greeting: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(16),
    fontWeight: '500',
    color: '#000000',
  },
});
