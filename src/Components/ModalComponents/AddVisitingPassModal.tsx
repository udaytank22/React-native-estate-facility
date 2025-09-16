import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { scale } from 'react-native-size-matters';
import { MainButtonComponent } from '../FormComponent/ButtonComponent';
import CameraModalComponent from './ImageOptionModal';
import TextInputComponent from '../FormComponent/TextInputComponent';
import DropdownComponent from '../FormComponent/DropDownComponents';
import { pickFromCamera, pickFromGallery } from '../../Utils/imagePicker';

const categoryData = [
  { label: 'A-101', value: 'A-101' },
  { label: 'B-203', value: 'B-203' },
  { label: 'c-500', value: 'c-500' },
];

const statusData = [
  { label: 'Pending', value: 'Pending' },
  { label: 'Approved', value: 'Approved' },
];

type AddVisitingPassModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AddVisitingPassModal: React.FC<AddVisitingPassModalProps> = ({
  visible,
  onClose,
}) => {
  const [visitorName, setVisitorName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [valid, setValid] = useState('');
  const [visitingFlat, setVisitingFlat] = useState('');
  const [status, setStatus] = useState('');
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
                <Text style={styles.modalTitle}>Add New Visit Pass</Text>
                <Text style={styles.cancelText} onPress={onClose}>
                  Cancel
                </Text>
              </View>
              <View style={styles.separator} />

              {/* Business Name */}
              <TextInputComponent
                label="Visitor Name"
                onChange={text => setVisitorName(text)}
                value={visitorName}
              />

              {/* Visiting Flat */}
              <DropdownComponent
                label="Visiting Flat"
                data={categoryData}
                value={visitingFlat}
                onChange={item => {
                  setVisitingFlat(item.value);
                }}
                labelField="label"
                valueField="value"
              />

              {/* purpose */}
              <TextInputComponent
                label="Purpose"
                onChange={text => setPurpose(text)}
                value={purpose}
              />

              {/* valid */}
              <TextInputComponent
                label="Valid"
                onChange={text => setValid(text)}
                value={valid}
              />

              {/* Attachment */}
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter-Medium',
                  }}
                >
                  Add QR Code
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

              {/* status */}
              <DropdownComponent
                label="Status"
                data={statusData}
                value={status}
                onChange={item => {
                  setStatus(item.value);
                }}
                labelField="label"
                valueField="value"
              />

              <View style={{ marginTop: 30 }}>
                <MainButtonComponent title="Add New Pass" />
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

export default AddVisitingPassModal;

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
