import {
  View,
  Text,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { Profile2, RightBackArrow } from '../../Assets/Constant/Images';
import { useNavigation } from '@react-navigation/native';

type AddNewRequestModalProps = {
  visible: boolean;
  onClose: () => void;
  onCardPress: () => void;
};

const mockRequests = [
  {
    id: '1',
    name: 'Ajay Mehta',
    flat: 'A-003',
    image: Profile2,
  },
  {
    id: '2',
    name: 'Bhaumik Muhra',
    flat: 'D-205',
    image: Profile2,
  },
];

const AddNewRequestModal: React.FC<AddNewRequestModalProps> = ({
  visible,
  onClose,
  onCardPress,
}) => {
  const navigation = useNavigation();

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.indecator} />
          </View>

          <View style={styles.headerRow}>
            <Text style={styles.modalTitle}>New Request</Text>
            <Text style={styles.cancelText} onPress={onClose}>
              Cancel
            </Text>
          </View>

          <View style={styles.separator} />

          <ScrollView showsVerticalScrollIndicator={false}>
            {mockRequests.map(item => (
              <View key={item.id} style={styles.cardContainer}>
                {/* Card Top */}
                <Pressable style={styles.card} onPress={onCardPress}>
                  <item.image style={styles.avatar} />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.flat}>{item.flat}</Text>
                  </View>
                  <RightBackArrow style={styles.avatar} />
                </Pressable>

                {/* Actions */}
                <View style={styles.actionRow}>
                  <TouchableOpacity style={styles.rejectBtn}>
                    <Text style={styles.rejectText}>Reject</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <LinearGradient
                      colors={['#034175', '#37B7FE']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={{ borderRadius: moderateScale(4) }}
                    >
                      <View style={styles.acceptBtn}>
                        <Text style={styles.acceptText}>Accept</Text>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewRequestModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    padding: scale(16),
  },
  indecator: {
    height: 6,
    width: 32,
    borderRadius: 1000,
    backgroundColor: '#F3F4F6',
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    fontFamily: 'Poppins',
  },
  cancelText: {
    color: '#3FB6F9',
    fontSize: scale(14),
    fontWeight: '500',
  },
  separator: {
    borderColor: '#F3F4F6',
    borderTopWidth: 1,
    marginVertical: scale(16),
  },
  cardContainer: {
    marginBottom: verticalScale(16),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.06)',
    borderWidth: 1,
    borderRadius: moderateScale(4),
    padding: scale(12),
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: 20,
    marginRight: scale(12),
  },
  name: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(16),
    fontWeight: '500',
    color: '#000',
  },
  flat: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(12),
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.37)',
    marginTop: 2,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: scale(10),
    gap: 10,
  },
  rejectBtn: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(10),
  },
  rejectText: {
    fontSize: scale(14),
    color: '#000',
    fontWeight: '500',
  },
  acceptBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(10),
  },
  acceptText: {
    fontSize: scale(14),
    color: '#fff',
    fontWeight: '600',
  },
  addContactBtn: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(14),
  },
  addContactText: {
    fontSize: scale(16),
    color: '#fff',
    fontWeight: '600',
  },
});
