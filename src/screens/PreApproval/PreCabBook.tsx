import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';
import CheckBox from '@react-native-community/checkbox';
import CustomCheckBox from '../../Components/FormComponent/CustomCheckBox';

const PreCabBook = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Pre Approved Cab"
            onBackPress={() => navigation.goBack()}
          />
          <View style={{ marginTop: verticalScale(16), paddingHorizontal: 24 }}>
            <View
              style={{
                borderColor: 'rgba(0,0,0,0.06)',
                borderWidth: 1,
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 18.5,
                paddingHorizontal: 14,
                backgroundColor: '#FFFFFF',
              }}
            >
              <CustomCheckBox label="Long Duration Visit" />
            </View>
            <Text style={[styles.greeting, { fontSize: scale(16) }]}>
              Your To-do’s
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default PreCabBook;

const styles = StyleSheet.create({
  greeting: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),
    fontWeight: '600',
    color: '#003366',
  },
});
