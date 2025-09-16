import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { MainStyle } from '../../Assets/Style/MainStyle';
import CustomStatusBar from '../../Components/StatusBar';
import Header from '../../Components/Header';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import { useAuth } from '../../CustomHooks/CustomHooks';
import { useNavigation } from '@react-navigation/native';
import { countryCodes } from '../../Assets/StaticData/StaticData';
import CountryPickerModal from '../../Components/ModalComponents/CountryPickerModal';

const LoginWithMobile = () => {
  const { login } = useAuth();
  const navigation = useNavigation<any>();
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // default India
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <View style={MainStyle.mainContainer}>
      <CustomStatusBar />
      <Header
        title="Login With Mobile"
        description="Don’t have an account?"
        actionText="Register"
        backArrow
        onActionPress={() => navigation.navigate('RegisterUser')}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Mobile Number</Text>

        <View style={styles.rowContainer}>
          {/* Flag Dropdown */}
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ fontSize: 20 }}>{selectedCountry.flag}</Text>
            <Feather
              name="chevron-down"
              size={18}
              color="#666"
              style={{ marginLeft: 6 }}
            />
          </TouchableOpacity>

          {/* Phone Input */}
          <TextInputComponent
            label=""
            withWrapper
            placeholder="Enter your number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
            containerStyle={{
              flex: 1,
              marginLeft: 10,
            }}
            wrapperStyle={{
              height: moderateVerticalScale(48),
              alignItems: 'center',
            }}
          />
        </View>

        {/* login button */}
        <MainButtonComponent
          title="Login"
          handleButtonPress={() => login('1111', 'password')}
        />
      </View>

      {/* Country Picker Modal */}
      <CountryPickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={country => setSelectedCountry(country)}
        countryCodes={countryCodes}
      />
    </View>
  );
};

export default LoginWithMobile;

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
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(12),
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  container: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateVerticalScale(24),
  },
  title: {
    marginBottom: moderateVerticalScale(8),
    fontWeight: '500',
    fontSize: scale(14),
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    height: moderateVerticalScale(48),
    justifyContent: 'center',
  },
});
