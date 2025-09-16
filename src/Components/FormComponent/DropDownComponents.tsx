import React from 'react';
import { View, StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

export interface DropdownComponentProps<T = any> {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
  textStyle?: TextStyle;
  itemContainerStyle?: ViewStyle;
  data: T[];
  value: number | string;
  isRequired?: boolean;
  // These 2 props let you map dynamic fields to dropdown
  labelField: keyof T; // e.g., 'name' or 'label'
  valueField: keyof T; // e.g., 'id' or 'value'
  onChange: (item: T) => void; // pass the whole item for maximum flexibility
  [key: string]: any; // for ...props
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  label,
  error,
  containerStyle,
  dropdownStyle,
  placeholderStyle,
  textStyle,
  inputSearchStyle,
  data,
  value,
  isRequired,
  onChange,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            {
              fontFamily: 'Inter-Medium',
              marginBottom: moderateVerticalScale(8),
              fontWeight: '500',
              fontSize: scale(14),
            },
          ]}
        >
          {label} :{isRequired && <Text style={{ color: 'red' }}> *</Text>}
        </Text>
      )}
      <Dropdown
        style={[
          styles.dropdown,
          dropdownStyle,
          {
            borderColor: 'rgba(0,0,0,0.10)',
          },
        ]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[
          styles.selectedTextStyle,
          textStyle,
          { color: '#000000' },
        ]}
        inputSearchStyle={[
          styles.inputSearchStyle,
          inputSearchStyle,
          {
            color: '#000000',
          },
        ]}
        containerStyle={[
          styles.containerStyle,
          containerStyle,
          { backgroundColor: '#FFFFFF' },
        ]}
        itemTextStyle={{ color: '#000000' }}
        placeholder=""
        iconColor="#000000"
        activeColor="#EAF7FF"
        showsVerticalScrollIndicator={false}
        data={data}
        value={value}
        onChange={onChange}
        searchPlaceholder="Search..."
        {...props}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(7),
  },
  dropdown: {
    height: verticalScale(40),
    borderWidth: scale(1),
    borderRadius: moderateScale(8),
    paddingHorizontal: moderateScale(10),
  },
  placeholderStyle: {
    fontSize: moderateScale(14),
  },
  selectedTextStyle: {
    fontSize: moderateScale(15),
    paddingLeft: moderateScale(10),
  },
  errorText: {
    fontSize: moderateScale(12),
    color: 'red',
    marginTop: verticalScale(3),
  },

  inputSearchStyle: {
    height: moderateVerticalScale(45),
    fontSize: moderateScale(16),
  },
  containerStyle: {
    borderRadius: moderateScale(10),
    overflow: 'hidden',
  },
});
