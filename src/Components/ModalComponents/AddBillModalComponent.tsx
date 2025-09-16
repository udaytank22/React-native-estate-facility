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
import RadioButton from '../FormComponent/RadioButton';
import { MainButtonComponent } from '../FormComponent/ButtonComponent';
import CameraModalComponent from './ImageOptionModal';
import TextInputComponent from '../FormComponent/TextInputComponent';
import DropdownComponent from '../FormComponent/DropDownComponents';
import { pickFromCamera, pickFromGallery } from '../../Utils/imagePicker';

const data = [
  { label: 'Monthly', value: 'Monthly' },
  { label: 'No Repeat', value: 'No Repeat' },
];

const categoryData = [
  { label: 'Parking', value: 'Parking' },
  { label: 'Event Fund', value: 'Event Fund' },
  { label: 'Water', value: 'Water' },
];

const statusData = [
  { label: 'Paid', value: 'Paid' },
  { label: 'Unpaid', value: 'Unpaid' },
  { label: 'Overdue', value: 'Overdue' },
];

type AddBillModalProps = {
  visible: boolean;
  onClose: () => void;
};

const AddBillModal: React.FC<AddBillModalProps> = ({ visible, onClose }) => {
  const [selected, setSelected] = useState('Maintenance');
  const [billTitle, setBillTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [dueDate, setDaueDate] = useState('');
  const [category, setCategory] = useState('');
  const [repeat, setRepeat] = useState('');
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
                <Text style={styles.modalTitle}>Add New Bill</Text>
                <Text style={styles.cancelText} onPress={onClose}>
                  Cancel
                </Text>
              </View>
              <View style={styles.separator} />
              {/* Radio Button */}
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: 'Inter-Medium',
                  }}
                >
                  Bill Type
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 19 }}>
                  <RadioButton
                    label="General"
                    value="General"
                    selected={selected}
                    onChange={setSelected}
                  />
                  <RadioButton
                    label="Maintenance"
                    value="Maintenance"
                    selected={selected}
                    onChange={setSelected}
                  />
                </View>
              </View>

              {/* Business Name */}
              <View style={{ marginTop: 29 }}>
                <TextInputComponent
                  label="Bill Title"
                  onChange={text => setBillTitle(text)}
                  value={billTitle}
                />
              </View>

              {/* Repeat */}
              {selected === 'General' && (
                <>
                  <View>
                    <DropdownComponent
                      label="Category"
                      data={categoryData}
                      value={category}
                      onChange={item => {
                        setCategory(item.value);
                      }}
                      labelField="label"
                      valueField="value"
                    />
                  </View>
                </>
              )}

              {/* Description */}
              <View>
                <TextInputComponent
                  label="Description"
                  onChange={text => setDescription(text)}
                  value={description}
                />
              </View>

              {/* amount */}
              <View>
                <TextInputComponent
                  label="Amount(₹)"
                  onChange={text => setAmount(text)}
                  value={amount}
                />
              </View>

              {selected === 'General' && (
                <>
                  <View>
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
                  </View>
                </>
              )}

              {/* payment details */}
              {selected === 'Maintenance' && (
                <>
                  <View>
                    <TextInputComponent
                      label="Payment Details"
                      onChange={text => setPaymentDetails(text)}
                      value={paymentDetails}
                    />
                  </View>

                  {/* due Date */}
                  <View>
                    <TextInputComponent
                      label="Due Date"
                      onChange={text => setDaueDate(text)}
                      value={dueDate}
                    />
                  </View>
                </>
              )}

              {/* Attachment */}
              <View style={{ marginTop: 15 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '500',
                    fontFamily: 'Inter-Medium',
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
                    fontFamily: 'Inter-Medium',
                    color: '#37B7FE',
                  }}
                >
                  Upload Image/pdf
                </Text>
              </TouchableOpacity>

              {/* industry type */}
              {selected === 'Maintenance' && (
                <>
                  <DropdownComponent
                    label="Repeat"
                    data={data}
                    value={repeat}
                    onChange={item => {
                      setRepeat(item.value);
                    }}
                    labelField="label"
                    valueField="value"
                  />
                </>
              )}

              <View style={{ marginTop: 30 }}>
                <MainButtonComponent title="Download PDF" />
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

export default AddBillModal;

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
