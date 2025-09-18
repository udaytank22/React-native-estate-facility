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
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { MainButtonComponent } from '../FormComponent/ButtonComponent';
import CameraModalComponent from './ImageOptionModal';
import { pickFromCamera, pickFromGallery } from '../../Utils/imagePicker';
import TextInputComponent from '../FormComponent/TextInputComponent';
import DropdownComponent from '../FormComponent/DropDownComponents';

const data = [
  { label: 'Sub Admin', value: 'Sub Admin' },
  { label: 'Admin', value: 'Admin' },
  { label: 'Owner', value: 'Owner' },
  { label: 'User', value: 'User' },
];

const availableData = [
  { label: 'All', Value: 'All' },
  { label: 'Married', Value: 'Married' },
  { label: 'Girls', Value: 'Girls' },
  { label: 'Boys', Value: 'Boys' },
];

type AddNewContactDetailsProps = {
  visible: boolean;
  onClose: () => void;
};

const AddNewContactDetails: React.FC<AddNewContactDetailsProps> = ({
  visible,
  onClose,
}) => {
  const [fullName, setFullName] = useState('');
  const [addDesignation, setAddDesignation] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [optionModalVisible, setOptionModalVisible] = useState(false);
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
            height: '75%',
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
                <Text style={styles.modalTitle}>Add New Contact Detail</Text>
                <Text style={styles.cancelText} onPress={onClose}>
                  Cancel
                </Text>
              </View>
              <View style={styles.separator} />

              {/* full Name */}
              <TextInputComponent
                label="Full Name"
                onChange={text => setFullName(text)}
                value={fullName}
              />

              {/* Add Designation */}
              <DropdownComponent
                label="Add Designation"
                data={data}
                value={addDesignation}
                onChange={item => {
                  setAddDesignation(item.value);
                }}
                labelField="label"
                valueField="value"
              />

              {/* Contact Details */}
              <TextInputComponent
                label="Contact Details"
                onChange={text => setContactDetails(text)}
                value={contactDetails}
              />

              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontFamily: 'Inter-Medium',
                    marginBottom: moderateVerticalScale(8),
                    fontWeight: '500',
                    fontSize: scale(14),
                  }}
                >
                  Add Image
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
                    fontFamily: 'Inter-Medium',
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

export default AddNewContactDetails;

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
