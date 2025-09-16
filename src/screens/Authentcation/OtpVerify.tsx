import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../Components/Header';
import CustomStatusBar from '../../Components/StatusBar';
import { MainStyle } from '../../Assets/Style/MainStyle';
import { useAuth } from '../../CustomHooks/CustomHooks';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import { scale, verticalScale } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

import Icon from '../../Assets/Image/Icons/Right.svg';
import { useNavigation } from '@react-navigation/native';

const OtpVerify = ({ route }) => {
  const email = route.params.email; // Replace with actual email or get from props/state
  const navigaion = useNavigation();

  const { login } = useAuth();
  const [otpArr, setOtpArr] = useState(['', '', '', '', '', '']);
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(120);
  const [showResend, setShowResend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const otpInputs = useRef<Array<any>>([]);
  const [confirmationModalVisible, setConfirmationMOdalVisible] =
    useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setShowResend(true);
    }
  }, [timer]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otpArr];
    newOtp[index] = value;
    const otpString = newOtp.join('');
    setOtpArr(newOtp);
    setOtp(otpString);
    if (value && index < otpArr.length - 1) {
      let nextIndex = index + 1;
      while (nextIndex < otpArr.length && newOtp[nextIndex] !== '') {
        nextIndex++;
      }
      if (nextIndex < otpArr.length) {
        otpInputs.current[nextIndex].focus();
      }
    }
  };

  const checkOtp = () => {
    setIsLoading(true);
    if (otp === route.params.actualOtp) {
      login('1111', '1111');
    } else {
      setErrorMessage('OTP does not match. Please try again!');
    }
    setIsLoading(false);
  };
  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (otpArr[index] === '' && index > 0) {
        const newOtp = [...otpArr];
        newOtp[index - 1] = '';
        setOtpArr(newOtp);
        const otpString = newOtp.join('');
        setOtp(otpString);
        otpInputs.current[index - 1].focus();
      } else if (otpArr[index] !== '') {
        const newOtp = [...otpArr];
        newOtp[index] = '';
        setOtpArr(newOtp);
        const otpString = newOtp.join('');
        setOtp(otpString);
      }
    }
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  const handleResendOtp = () => {
    // Logic to resend OTP
    setTimer(120);
    setShowResend(false);
  };

  return (
    <>
      <View style={MainStyle.mainContainer}>
        <CustomStatusBar />
        <Header
          title="Otp Verification"
          description={`We’ve sent a 6-digit code to your email address ${email} Enter it below to verify.`}
          backArrow
        />
        <View style={[MainStyle.container, { flex: 1 }]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}
          >
            {otpArr.map((value, index) => (
              <TextInputComponent
                key={index}
                value={value}
                onChangeText={text => handleOtpChange(text, index)}
                style={{
                  borderWidth: 2,
                  borderColor: focusedIndex === index ? '#007BFF' : '#ccc', // blue if focused
                  borderRadius: 10,
                  textAlign: 'center',
                  fontSize: 22,
                  fontWeight: '600',
                  width: 50,
                  height: 55,
                  marginHorizontal: 6,
                  color: '#000',
                }}
                keyboardType="number-pad"
                maxLength={1}
                ref={ref => (otpInputs.current[index] = ref)}
                onKeyPress={e => handleKeyPress(e, index)}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
              />
            ))}
          </View>
          <MainButtonComponent
            title="Verify"
            handleButtonPress={() => setConfirmationMOdalVisible(true)}
          />
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            {showResend ? (
              <TouchableOpacity onPress={handleResendOtp}>
                <Text
                  style={{ color: '#083D6C', fontWeight: '600', fontSize: 16 }}
                >
                  Resend OTP
                  <Text
                    style={{
                      color: '#54A7DC',
                      borderColor: '#54A7DC',
                      borderBottomWidth: 1,
                    }}
                  >
                    {' '}
                    Resend Code
                  </Text>
                </Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={{ color: '#083D6C', fontWeight: '600', fontSize: 16 }}
              >
                Resend OTP{' '}
                <Text
                  style={{
                    color: '#54A7DC',
                    borderColor: '#54A7DC',
                    borderWidth: 1,
                  }}
                >
                  {formatTime(timer)}{' '}
                </Text>
              </Text>
            )}
          </View>
        </View>
      </View>
      <Modal
        visible={confirmationModalVisible}
        animationType="slide"
        transparent
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={{ alignItems: 'center' }}>
              <View style={styles.indecator} />
            </View>
            {/* Title */}
            <Text style={styles.modalTitle}>Account Created</Text>
            <View style={styles.separator} />

            {/* Success Message */}
            <View>
              <Text style={styles.successText}>Your account has been </Text>
              <Text style={styles.highlight}>successfully created!</Text>
            </View>
            <Text style={styles.subText}>
              Lorem ipsum dolor sit amet consectetur. Nisl.
            </Text>

            {/* Check Icon */}
            <View style={styles.iconWrapper}>
              <LinearGradient
                colors={['#034175', '#37B7FE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.iconCircle}
              >
                <Icon height={151} width={149} />
              </LinearGradient>
            </View>

            {/* CTA Button */}
            <MainButtonComponent
              title="Add Society details"
              handleButtonPress={() => {
                navigaion.navigate('AddSociety');
                setConfirmationMOdalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    // height: verticalScale(564),
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    padding: scale(10),
  },
  modalTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scale(10),
    marginTop: verticalScale(10),
    fontFamily: 'Poppins-SemiBold',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: scale(20),
  },
  successText: {
    fontSize: scale(26),
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
  },
  highlight: {
    fontSize: scale(26),
    fontWeight: '600',
    color: '#37B7FE',
    textAlign: 'left',
    marginBottom: scale(6),
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
  },
  subText: {
    fontSize: scale(14),
    fontWeight: '400',
    color: '#60655C',
    marginBottom: verticalScale(52),
    fontFamily: 'Poppins',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: verticalScale(41.49),
  },
  iconCircle: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    height: verticalScale(50),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#fff',
  },
  indecator: {
    height: 6,
    width: 32,
    borderRadius: 1000,
    backgroundColor: '#F3F4F6',
  },
});
