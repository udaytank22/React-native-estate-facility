import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import { MainStyle } from '../../Assets/Style/MainStyle';
import CustomStatusBar from '../../Components/StatusBar';
import Header from '../../Components/Header';
import { moderateScale, scale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import { useAuth } from '../../CustomHooks/CustomHooks';
import { useNavigation } from '@react-navigation/native';

import Mobile from '../../Assets/Image/Mobile.svg';

const Login = () => {
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const { login } = useAuth();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={MainStyle.mainContainer}>
      <CustomStatusBar />
      <Header
        title="Login"
        // description="Don’t have an account?"
        // actionText="Register"
        // onActionPress={() => navigation.navigate('RegisterUser')}
      />

      {/* email field */}
      <View style={{ paddingHorizontal: scale(24), paddingTop: scale(24) }}>
        <TextInputComponent
          label="Enter Email Address"
          placeholder=""
          value={email}
          onChangeText={text => setEmail(text)}
          // error={errors.mobileNumber?.message}
          withWrapper
        />

        {/* password field */}
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

        {/* login button */}
        <MainButtonComponent
          title="Login"
          handleButtonPress={() => login(email, password)}
          button={{ marginBottom: scale(5) }}
        />
        <Text
          style={{
            fontSize: scale(12),
            fontWeight: '400',
            color: '#000000',
            textAlign: 'center',
          }}
        >
          Don't have an account?{' '}
          <Text
            style={{
              fontSize: scale(12),
              fontWeight: '600',
              color: '#000000',
              textDecorationLine: 'underline',
            }}
            onPress={() => navigation.navigate('RegisterUser')}
          >
            Register
          </Text>
        </Text>

        {/* devider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* mobile login button */}
        <TouchableOpacity
          style={styles.mobileSection}
          onPress={() => navigation.navigate('LoginWithMobile')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Mobile width={22} height={22} />
            <Text style={styles.mobileText}> Continue with Mobile Number </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(20),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    opacity: 12,
  },
  dividerText: {
    marginHorizontal: moderateScale(10),
    color: '#000',
    fontSize: scale(14),
  },
  mobileSection: {
    alignItems: 'center',
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: moderateScale(16),
    padding: moderateScale(16),
  },
  mobileText: { fontSize: scale(14) },
});
