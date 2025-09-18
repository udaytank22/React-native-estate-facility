import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import RadioButton from '../../Components/FormComponent/RadioButton';

const flats = [
  {
    id: '1',
    flatNo: 'A-001',
    society: 'Ahmedabad-Ops 1',
    role: 'Owner',
    block: 'Block 1',
  },
];

const Search = () => {
  const [selectedId, setSelectedId] = useState<string | null>('1');
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string | null>('1');

  const renderFlat = ({ item }: any) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.flatCard, isSelected && styles.selectedCard]}
        onPress={() => setSelectedId(item.id)}
      >
        <View style={styles.flatRow}>
          <View style={styles.flatNoBox}>
            <Text style={styles.flatNoText}>{item.flatNo}</Text>
          </View>
          <View style={styles.flatDetails}>
            <Text style={styles.societyName}>{item.society}</Text>
            <View style={styles.tagRow}>
              <Text style={styles.Ownertag}>{item.role}</Text>
              <Text style={styles.tag}>{item.block}</Text>
            </View>
          </View>
          <RadioButton
            label=""
            value=""
            selected={selected}
            onChange={setSelected}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="x"
            size={24}
            color="#000"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Flat</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Flat List */}
      <View>
        <FlatList
          data={flats}
          keyExtractor={item => item.id}
          renderItem={renderFlat}
          contentContainerStyle={{ padding: 16 }}
        />

        {/* Add Flat */}
        <TouchableOpacity style={styles.addFlatBtn}>
          <Text style={styles.addFlatText}>+ Add Flat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(12),
  },
  headerTitle: {
    fontSize: scale(18),
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    color: '#000',
  },
  flatCard: {
    backgroundColor: '#FBFDFF',
    borderRadius: moderateScale(6),
    padding: scale(12),
    marginBottom: verticalScale(12),
    borderColor: '#034175',
    borderLeftWidth: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 1,
  },
  selectedCard: {
    borderColor: '#034175',
  },
  flatRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatNoBox: {
    borderWidth: 1,
    borderColor: '#034175',
    borderRadius: moderateScale(6),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(10),
    marginRight: scale(12),
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatNoText: {
    fontSize: scale(14),
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    color: '#034175',
  },
  flatDetails: {
    flex: 1,
  },
  societyName: {
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000',
    marginBottom: verticalScale(6),
  },
  tagRow: {
    flexDirection: 'row',
    gap: scale(8),
  },
  Ownertag: {
    backgroundColor: '#EAF5FF',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(20),
    fontSize: scale(12),
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    color: '#000',
  },
  tag: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(6),
    fontSize: scale(12),
    color: '#000',
  },
  radioWrapper: {
    marginLeft: scale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0A84FF',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0A84FF',
  },
  addFlatBtn: {
    borderWidth: 1,
    borderColor: '#0A84FF',
    borderStyle: 'dashed',
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(14),
    marginHorizontal: scale(16),
    marginBottom: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFlatText: {
    fontSize: scale(14),
    color: '#3FB6F9',
    fontFamily: 'Inter-Medium',
    fontWeight: '600',
  },
});
