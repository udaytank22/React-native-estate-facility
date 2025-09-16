import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { MainStyle } from '../../Assets/Style/MainStyle';
import Header from '../../Components/Header';
import CustomStatusBar from '../../Components/StatusBar';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { countryCodes } from '../../Assets/StaticData/StaticData';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import CustomSwitch from '../../Components/FormComponent/CustomSwitchButton';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';

import WhatsApp from '../../Assets/Image/Icons/whatsapp.svg';
import { useNavigation } from '@react-navigation/native';

const RegisterUser = () => {
  const navigation = useNavigation<any>();
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // default India
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={MainStyle.mainContainer}>
      <CustomStatusBar />
      <Header
        title="Register"
        description="Already have an account?"
        actionText="Login"
        onActionPress={() => navigation.navigate('Login')}
      />

      <View style={styles.container}>
        <View>
          {/* mobile no */}
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
              placeholder=""
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
              maxLength={10}
              containerStyle={{
                flex: 1,
                marginLeft: 10,
              }}
              wrapperStyle={{
                height: moderateVerticalScale(42),
                alignItems: 'center',
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {/* whatsapp switch */}
            <CustomSwitch value={isEnabled} onChange={setIsEnabled} />
            <WhatsApp width={20} height={20} />
            <Text> Same number for WhatsApp</Text>
          </View>
        </View>

        {/* enter Name */}
        <TextInputComponent
          label="Enter Name"
          placeholder=""
          value={name}
          onChangeText={text => setName(text)}
          // error={errors.mobileNumber?.message}
          // withWrapper
        />

        {/* enter email address */}
        <TextInputComponent
          label="Enter Email Address"
          placeholder=""
          value={email}
          onChangeText={text => setEmail(text)}
          // error={errors.mobileNumber?.message}
          withWrapper
        />

        {/* enter Password */}
        <TextInputComponent
          label="Password"
          placeholder=""
          secureTextEntry={showPassword}
          value={password}
          onChangeText={Text => setPassword(Text)}
          containerStyle={{ marginTop: scale(10) }}
          // error={errors.password?.message}
          withWrapper
          rightIcon={
            <Feather
              name={showPassword ? 'eye-off' : 'eye'}
              size={22}
              color="#000"
              onPress={toggleShowPassword}
            />
          }
        />

        <MainButtonComponent
          title="Next"
          handleButtonPress={() =>
            navigation.navigate('OtpVerify', { email: email })
          }
        />
      </View>
    </View>
  );
};

export default RegisterUser;

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
    gap: moderateVerticalScale(5),
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
    height: moderateVerticalScale(42),
    justifyContent: 'center',
  },
});
