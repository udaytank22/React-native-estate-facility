import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';

import FilterIcon from '../Assets/Image/Icons/FilterIcon.svg';
import Search from '../Assets/Image/Icons/SearchIcon.svg';

type SearchFilterBarProps = {
  filterOptions?: string[];
  onSelectFilter?: (option: string) => void;
  onSearchChange?: (text: string) => void;
};

export default function SearchFilterBar({
  filterOptions = [],
  onSelectFilter,
  onSearchChange,
}: SearchFilterBarProps) {
  const [filterOptionModalVisible, setFilterOptionModalVisible] =
    useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setFilterOptionModalVisible(false);
    if (onSelectFilter) {
      onSelectFilter(option);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <Search height={14.96} width={14.96} />
          <TextInput
            style={styles.input}
            placeholder="search"
            placeholderTextColor="#999"
            onChangeText={onSearchChange}
          />
        </View>

        {/* Filter Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setFilterOptionModalVisible(true)}
        >
          <LinearGradient
            colors={['#106099', '#2181bf']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.filterBtn}
          >
            <FilterIcon height={16} width={16} />
            <Text style={styles.filterText}>Filter</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Modal
        visible={filterOptionModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setFilterOptionModalVisible(false)}
      >
        <TouchableWithoutFeedback
          onPress={() => setFilterOptionModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <FlatList
                data={filterOptions}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.optionBtn,
                      selectedOption === item && styles.optionSelected,
                    ]}
                    onPress={() => handleSelect(item)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        selectedOption === item && styles.optionTextSelected,
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.27)',
    borderRadius: 10,
    paddingHorizontal: 11.5,
    height: 38,
    width: 297,
  },
  input: {
    flex: 1,
    fontSize: scale(12),
    color: '#000',
    marginLeft: 8,
    paddingVertical: 0, // removes extra top/bottom padding
    includeFontPadding: false, // Android only - removes font extra space
    textAlignVertical: 'center', // Android only - aligns text properly
  },
  filterBtn: {
    height: 32,
    width: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 8,
  },
  filterText: {
    fontFamily: 'Inter-Medium',
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    paddingLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    top: scale(190),
    right: 22,
    alignItems: 'flex-end',
  },
  modalContainer: {
    width: scale(297),
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  optionBtn: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  optionSelected: {
    backgroundColor: '#E6F4FF',
    borderColor: '#106099',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  optionTextSelected: {
    color: '#106099',
    fontWeight: '600',
  },
});
