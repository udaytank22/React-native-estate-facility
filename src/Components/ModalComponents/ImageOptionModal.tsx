import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type CameraModalComponentProps = {
  visible: boolean;
  onClose?: () => void;
  onCameraPress?: () => void;
  onGalleryPress?: () => void;
  title?: string;
};

const CameraModalComponent: React.FC<CameraModalComponentProps> = ({
  visible,
  onClose,
  onCameraPress,
  onGalleryPress,
  title,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Choose Option</Text>
            <TouchableOpacity onPress={onClose} style={styles.modalCloseIcon}>
              <Feather name="x" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={onGalleryPress}
            >
              <FontAwesome name="image" size={24} color="black" />
              <Text style={styles.buttonText}>Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={onCameraPress}
            >
              <FontAwesome name="camera" size={24} color="black" />
              <Text style={styles.buttonText}>Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingBottom: 15,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  modalCloseIcon: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  optionButton: {
    width: '45%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderStyle: 'dashed',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
});

export default CameraModalComponent;
