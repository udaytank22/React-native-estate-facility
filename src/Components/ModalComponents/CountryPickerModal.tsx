import React, { useState, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

interface Country {
  code: string;
  name: string;
  dial_code: string;
  flag: string;
}

interface CountryPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (country: Country) => void;
  countryCodes: Country[];
}

const CountryPickerModal: React.FC<CountryPickerModalProps> = ({
  visible,
  onClose,
  onSelect,
  countryCodes,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter countries based on name, code, or dial_code
  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countryCodes;
    const query = searchQuery.toLowerCase();
    return countryCodes.filter(
      c =>
        c.name?.toLowerCase().includes(query) ||
        c.code?.toLowerCase().includes(query) ||
        c.dial_code?.includes(query),
    );
  }, [searchQuery, countryCodes]);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Select Country</Text>

              {/* Search Input */}
              <TextInput
                style={styles.searchInput}
                placeholder="Search country..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />

              {/* Country List */}
              <FlatList
                data={filteredCountries}
                keyExtractor={item => item.code}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.countryItem}
                    onPress={() => {
                      onSelect(item);
                      onClose();
                    }}
                  >
                    <Text style={{ fontSize: 22 }}>{item.flag}</Text>
                    <Text style={{ marginLeft: 10 }}>
                      {item.name} ({item.dial_code})
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CountryPickerModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    padding: scale(20),
  },
  modalTitle: {
    fontSize: scale(18),
    fontWeight: '700',
    marginBottom: moderateVerticalScale(10),
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    paddingVertical: moderateVerticalScale(8),
    marginBottom: moderateVerticalScale(10),
    fontSize: scale(14),
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(12),
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
});
