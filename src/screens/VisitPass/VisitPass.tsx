import { View, StatusBar, FlatList, ListRenderItem } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { VisitPassData } from '../../Assets/StaticData/StaticData';
import VisitPassCard from '../../Components/CardComponent/VisitPassCard';
import { MainStyle } from '../../Assets/Style/MainStyle';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import AddVisitingPassModal from '../../Components/ModalComponents/AddVisitingPassModal';

export type VisitPass = {
  id: number;
  passid: string;
  icon: React.ComponentType<any>;
  name: string;
  Flat: string;
  purpose: string;
  valid: string;
  status: 'Active' | 'Expired' | 'Inactive' | string;
};

const VisitPass = () => {
  const navigation = useNavigation();
  const [addBillModalVisible, setAddBillModalModalVisible] = useState(false);

  const handleAdd = () => {
    setAddBillModalModalVisible(true);
  };

  const renderVisitCard: ListRenderItem<VisitPass> = ({ item }) => {
    return <VisitPassCard item={item} />;
  };

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          {/* header section */}
          <ListHeader
            title="Visit Pass"
            isMoreVisible={true}
            onBackPress={() => navigation.goBack()}
            onAddPress={handleAdd}
            isExtraOptionVisible={true}
          />

          {/* render list */}
          <View style={MainStyle.section}>
            <FlatList
              data={VisitPassData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderVisitCard}
              showsVerticalScrollIndicator={false}
            />
          </View>

          {/* Add Visiting modal */}
          <View
            style={[
              MainStyle.section,
              { position: 'absolute', bottom: 70, flex: 1, width: '100%' },
            ]}
          >
            <MainButtonComponent
              title="Create New Pass"
              handleButtonPress={() => setAddBillModalModalVisible(true)}
            />
          </View>

          {/* Add visiting pass modal */}
          <AddVisitingPassModal
            visible={addBillModalVisible}
            onClose={() => setAddBillModalModalVisible(false)}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default VisitPass;
