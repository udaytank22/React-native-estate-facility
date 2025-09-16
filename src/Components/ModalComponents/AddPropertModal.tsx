import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { scale } from 'react-native-size-matters';
import RadioButton from '../FormComponent/RadioButton';
import { Dropdown } from 'react-native-element-dropdown';
import { MainButtonComponent } from '../FormComponent/ButtonComponent';
import CameraModalComponent from './ImageOptionModal';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { pickFromCamera, pickFromGallery } from '../../Utils/imagePicker';

const data = [
  { label: 'A-304', value: 'A-304' },
  { label: 'B-500', value: 'B-500' },
  { label: 'A-300', value: 'A-300' },
  { label: 'D-100', value: 'D-100' },
];

const availableData = [
  { label: 'All', Value: 'All' },
  { label: 'Married', Value: 'Married' },
  { label: 'Girls', Value: 'Girls' },
  { label: 'Boys', Value: 'Boys' },
];

type AddPropertyModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AddPropertyModal: React.FC<AddPropertyModalProps> = ({
  visible,
  onClose,
}) => {
  const [selected, setSelected] = useState('Rent');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [industryType, setIndustryType] = useState('');
  const [optionModalVisible, setOptionModalVisible] = useState(false);
  const [address, setAddress] = useState('');
  const [imageUri, setImageUri] = useState('');

  const openCamera = async () => {
    try {
      const asset = await pickFromCamera({
        mediaType: 'photo',
        saveToPhotos: true,
        cameraType: 'back',
      });

      setOptionModalVisible(false);

      if (asset?.uri) {
        console.log('Photo data: ', asset.uri);
        setImageUri(asset.uri);
      } else {
        console.log('User cancelled camera');
      }
    } catch (err: any) {
      setOptionModalVisible(false);
      console.log('Camera error: ', err);
      Alert.alert('Error', String(err));
    }
  };

  const openGallary = async () => {
    try {
      const asset = await pickFromGallery({ mediaType: 'photo' });

      setOptionModalVisible(false);

      if (asset?.uri) {
        console.log('Photo data: ', asset.uri);
        setImageUri(asset.uri);
      } else {
        console.log('User cancelled gallery');
      }
    } catch (err: any) {
      setOptionModalVisible(false);
      console.log('Gallery error: ', err);
      Alert.alert('Error', String(err));
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.3)',
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            height: '90%',
            backgroundColor: '#fff',
            borderTopLeftRadius: scale(20),
            borderTopRightRadius: scale(20),
            padding: scale(10),
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.indecator} />
            </View>
            <View style={{ paddingTop: 16, paddingHorizontal: 10 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.modalTitle}>
                  Add Property for Rent/Sell
                </Text>
                <Text style={styles.cancelText} onPress={onClose}>
                  Cancel
                </Text>
              </View>
              <View style={styles.separator} />
              {/* Radio Button */}
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: 500, fontFamily: 'Inter' }}
                >
                  Property for
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 19 }}>
                  <RadioButton
                    label="Rent"
                    value="Rent"
                    selected={selected}
                    onChange={setSelected}
                  />
                  <RadioButton
                    label="Sell"
                    value="Sell"
                    selected={selected}
                    onChange={setSelected}
                  />
                </View>
              </View>
              {/* industry type */}
              <View style={{ marginTop: 29 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter',
                  }}
                >
                  Select Property
                </Text>
              </View>
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
                value={industryType}
                onChange={item => {
                  setIndustryType(item.value);
                }}
              />
              {/* Business Name */}
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter',
                  }}
                >
                  Add Contact Number
                </Text>
              </View>
              <TextInput
                value={contactNumber}
                onChangeText={text => setContactNumber(text)}
                style={styles.input}
              />

              {/* Description */}
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter',
                  }}
                >
                  Description
                </Text>
              </View>
              <TextInput
                value={description}
                onChangeText={text => setDescription(text)}
                style={styles.input}
              />
              {/* Address */}
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter',
                  }}
                >
                  Property Available for
                </Text>
              </View>
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
                data={availableData}
                placeholder=""
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={industryType}
                onChange={item => {
                  setIndustryType(item.value);
                }}
              />

              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter',
                  }}
                >
                  Attachment
                </Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.input,
                  {
                    borderStyle: 'dashed',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => setOptionModalVisible(true)}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter',
                    color: '#37B7FE',
                  }}
                >
                  Upload Image/pdf
                </Text>
              </TouchableOpacity>
              <View style={{ marginTop: 30 }}>
                <MainButtonComponent title="Add Property For rent" />
              </View>
              <CameraModalComponent
                visible={optionModalVisible}
                onClose={() => setOptionModalVisible(false)}
                onCameraPress={openCamera}
                onGalleryPress={openGallary}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddPropertyModal;

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scale(10),
    fontFamily: 'Poppins',
  },
  separator: {
    borderColor: '#F3F4F6',
    borderTopWidth: 1,
    paddingTop: scale(20),
  },
  indecator: {
    height: 6,
    width: 32,
    borderRadius: 1000,
    backgroundColor: '#F3F4F6',
  },
  cancelText: {
    color: '#3FB6F9',
    fontSize: 16,
    fontWeight: 400,
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
});
