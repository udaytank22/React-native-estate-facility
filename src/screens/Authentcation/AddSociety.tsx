import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageBackground,
  TextInput,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { MainStyle } from '../../Assets/Style/MainStyle';
import CustomStatusBar from '../../Components/StatusBar';
import Header from '../../Components/Header';
import { Dropdown } from 'react-native-element-dropdown';
import RadioButton from '../../Components/FormComponent/RadioButton';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import { useNavigation } from '@react-navigation/native';

import Icon from '../../Assets/Image/Icons/Right.svg';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { useAuth } from '../../CustomHooks/CustomHooks';

const BlockSelection = ({ data, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handlePress = item => {
    setSelected(item.id);
    onSelect && onSelect(item);
  };

  const renderItem = ({ item }) => (
    <ImageBackground
      source={require('../../Assets/Image/building.png')}
      style={{ opacity: selected === item.id ? 0.85 : 0.2 }}
    >
      <TouchableOpacity
        style={[styles.block, selected === item.id && styles.blockSelected]}
        onPress={() => handlePress(item)}
      >
        <Text style={styles.blockText}>{item.label}</Text>
      </TouchableOpacity>
    </ImageBackground>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={{ width: 12 }} />} // perfect spacing
    />
  );
};

const data = [
  { label: 'Ahmedabad-Opal', value: 'Ahmedabad-Opal' },
  { label: 'Ahmedabad-Opa2', value: 'Ahmedabad-Opa2' },
  { label: 'Ahmedabad-Opa3', value: 'Ahmedabad-Opa3' },
  { label: 'Ahmedabad-Opa4', value: 'Ahmedabad-Opa4' },
];

const flatdata = [
  { label: 'A-101', value: 'A-101' },
  { label: 'B-302', value: 'B-302' },
  { label: 'C-409', value: 'C-409' },
  { label: 'd-909', value: 'd-909' },
];

const sampleData = [
  { id: 1, label: 'Block 1' },
  { id: 2, label: 'Block 2' },
  { id: 3, label: 'Block 3' },
  { id: 4, label: 'Block 4' },
  { id: 5, label: 'Block 5' },
];

const AddSociety = () => {
  const [societyName, setSocietyName] = useState('');
  const [petType, setPetType] = useState('');
  const [selected, setSelected] = useState('Owner');
  const [currentStatus, setCurrentStatus] = useState('Residing');
  const [petAvailability, setPetAvailability] = useState('No');
  const [confirmationModalVisible, setConfirmationMOdalVisible] =
    useState(false);

  const { login } = useAuth();

  const navigation = useNavigation();

  return (
    <>
      <View style={MainStyle.mainContainer}>
        <CustomStatusBar />
        <Header
          title="Society Details"
          description="Select your society details"
          buildingVisible
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingBottom: 50 }}
        >
          <View style={{ marginTop: 26, paddingHorizontal: 24 }}>
            {/* Select Society */}
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Inter-Medium',
              }}
            >
              Society Name
            </Text>
            <Dropdown
              style={{
                borderColor: 'rgba(0,0,0,0.10)',
                borderWidth: 1,
                borderRadius: 12,
                paddingHorizontal: 10,
                height: 50,
                marginTop: 5,
              }}
              selectedTextStyle={{ fontSize: 15, color: '#000' }}
              inputSearchStyle={{
                height: 45,
                fontSize: 14,
                borderRadius: 10,
              }}
              iconStyle={{ width: 24, height: 24, tintColor: '#000' }}
              data={data}
              placeholder=""
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={societyName}
              onChange={item => {
                setSocietyName(item.value);
              }}
            />

            {/* Select Block */}
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Inter-Medium',
                }}
              >
                Select Block
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 5 }}
              >
                <BlockSelection
                  data={sampleData}
                  onSelect={item => console.log('Selected:', item)}
                />
              </ScrollView>
            </View>

            {/* Select Flate */}
            <View style={{ marginTop: 20 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Inter-Medium',
                }}
              >
                Select Flat
              </Text>
              <Dropdown
                style={{
                  borderColor: 'rgba(0,0,0,0.10)',
                  borderWidth: 1,
                  borderRadius: 12,
                  paddingHorizontal: 10,
                  height: 50,
                  marginTop: 5,
                }}
                selectedTextStyle={{ fontSize: 15, color: '#000' }}
                inputSearchStyle={{
                  height: 45,
                  fontSize: 14,
                  borderRadius: 10,
                }}
                iconStyle={{ width: 24, height: 24, tintColor: '#000' }}
                data={flatdata}
                placeholder=""
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={societyName}
                onChange={item => {
                  setSocietyName(item.value);
                }}
              />
            </View>

            {/* type */}
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Inter-Medium',
                }}
              >
                I am an/a
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 13 }}>
                <RadioButton
                  label="Owner"
                  value="Owner"
                  selected={selected}
                  onChange={setSelected}
                />
                <RadioButton
                  label="Tenent"
                  value="Tenent"
                  selected={selected}
                  onChange={setSelected}
                />
              </View>
            </View>

            {/* current status */}
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Inter-Medium',
                }}
              >
                Currently I am
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 13 }}>
                <RadioButton
                  label="Residing"
                  value="Residing"
                  selected={currentStatus}
                  onChange={setCurrentStatus}
                />
                <RadioButton
                  label="House Vacant"
                  value="House Vacant"
                  selected={currentStatus}
                  onChange={setCurrentStatus}
                />
              </View>
              <View style={{ flexDirection: 'row', marginTop: 13 }}>
                <RadioButton
                  label="Tenants Residing"
                  value="Tenants Residing"
                  selected={currentStatus}
                  onChange={setCurrentStatus}
                />
                <RadioButton
                  label="Moving In"
                  value="Moving In"
                  selected={currentStatus}
                  onChange={setCurrentStatus}
                />
              </View>
            </View>

            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'Inter-Medium',
                }}
              >
                Do you have a pet?
              </Text>
              <View style={{ flexDirection: 'row', marginTop: 6 }}>
                <RadioButton
                  label="Yes"
                  value="Yes"
                  selected={petAvailability}
                  onChange={setPetAvailability}
                />
                <RadioButton
                  label="No"
                  value="No"
                  selected={petAvailability}
                  onChange={setPetAvailability}
                />
              </View>
            </View>

            <View style={{ marginTop: 29 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '500',
                  fontFamily: 'Inter-Medium',
                }}
              >
                Business Name
              </Text>
            </View>
            <TextInput
              value={petType}
              placeholder="Eg. Dog"
              onChangeText={text => setPetType(text)}
              style={styles.input}
            />
            <View style={{ marginTop: 21, marginBottom: 30 }}>
              <MainButtonComponent
                title="Continue"
                handleButtonPress={() => setConfirmationMOdalVisible(true)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <Modal
        visible={confirmationModalVisible}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.indecator} />
            </View>
            {/* Title */}
            <Text style={styles.modalTitle}>House Added</Text>
            <View style={styles.separator} />

            {/* Success Message */}
            <Text style={styles.successText}>Your House has been</Text>
            <Text style={styles.highlight}>successfully created!</Text>
            <Text style={styles.subText}>
              Lorem ipsum dolor sit amet consectetur. Nisl.
            </Text>

            {/* Check Icon */}
            <View style={styles.iconWrapper}>
              <LinearGradient
                colors={['#034175', '#37B7FE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.iconCircle}
              >
                <Icon height={151} width={149} />
              </LinearGradient>
            </View>

            {/* CTA Button */}
            <MainButtonComponent
              title="Go to Home page"
              handleButtonPress={login}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddSociety;

const styles = StyleSheet.create({
  container: {
    // padding: 10,
  },
  row: {
    justifyContent: 'space-around',
  },
  block: {
    height: 89,
    width: 117,
    borderColor: 'rgba(0,0,0,0.10)',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blockSelected: {
    borderColor: '#34B0F5',
  },
  blockText: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    borderColor: 'rgba(0,0,0,0.10)',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 50,
    marginTop: 5,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    // height: verticalScale(564),
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    padding: scale(10),
  },
  modalTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scale(10),
    marginTop: verticalScale(10),
    fontFamily: 'Poppins-SemiBold',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: scale(20),
  },
  successText: {
    fontSize: scale(26),
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    letterSpacing: -1,
    // marginBottom: scale(6),
    fontFamily: 'Poppins-SemiBold',
  },
  highlight: {
    fontSize: scale(26),
    fontWeight: '600',
    color: '#37B7FE',
    textAlign: 'left',
    letterSpacing: -1,
    // marginBottom: scale(6),
    fontFamily: 'Poppins-SemiBold',
  },
  subText: {
    fontSize: scale(14),
    fontWeight: '400',
    color: '#60655C',
    marginBottom: verticalScale(52),
    fontFamily: 'Poppins',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: verticalScale(41.49),
  },
  iconCircle: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    height: verticalScale(50),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#fff',
  },
  indecator: {
    height: 6,
    width: 32,
    borderRadius: 1000,
    backgroundColor: '#F3F4F6',
  },
});
