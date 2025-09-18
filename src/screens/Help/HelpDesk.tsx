import { View, Text, StatusBar, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { MainStyle } from '../../Assets/Style/MainStyle';
import { socityContact } from '../../Assets/StaticData/StaticData';
import ContactCard from '../../Components/CardComponent/ContactCard';
import AddNewContactDetails from '../../Components/ModalComponents/AddNewContect';

const HelpDesk = () => {
  const navigation = useNavigation();
  const [addContactDetailsVisible, setAddDetailsContactDetailsVisible] =
    useState(false);

  const renderContact = ({ item }: { item: (typeof socityContact)[0] }) => (
    <ContactCard
      Icon={item.icon}
      name={item.name}
      contact={item.contact}
      onPressCall={() => console.log(`Calling ${item.name}...`)}
    />
  );

  const handleAdd = () => {
    setAddDetailsContactDetailsVisible(true);
    // open modal or navigate
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Help Desk"
            isMoreVisible={true}
            isExtraOptionVisible={true}
            onAddPress={handleAdd}
            onBackPress={() => navigation.goBack()}
          />
          <View style={MainStyle.section}>
            <View style={MainStyle.cardListWrapper}>
              <FlatList
                data={socityContact}
                renderItem={renderContact}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
        <AddNewContactDetails
          visible={addContactDetailsVisible}
          onClose={() => setAddDetailsContactDetailsVisible(false)}
        />
      </SafeAreaView>
    </>
  );
};

export default HelpDesk;
