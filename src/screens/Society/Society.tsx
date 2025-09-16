import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  FlatList,
  StyleSheet,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import {
  Camera,
  Search,
  PreApproved,
  PlusPost,
  PlusBusiness,
  Amenities,
  Directory,
  Security,
  Notice,
  SOS,
  VisitorPass,
  Maintanance,
  RightArrow,
  PhoneCall,
} from '../../Assets/Constant/Images';
import CameraModalComponent from '../../Components/ModalComponents/ImageOptionModal';
import ServicesCard from '../../Components/CardComponent/ServiceCardCompoent';
import ContactCard from '../../Components/CardComponent/ContactCard';
import PropertyCard from '../../Components/CardComponent/PropertyCard';
import {
  propertyList,
  socityContact,
} from '../../Assets/StaticData/StaticData';
import { MainStyle } from '../../Assets/Style/MainStyle';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const Society = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [optionModalVisible, setOptionModalVisible] = useState(false);

  const openCamera = () => {
    let options = {
      mediaType: 'photo',
      saveToPhotos: true,
      cameraType: 'back',
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        setOptionModalVisible(false);
      } else if (response.errorCode) {
        setOptionModalVisible(false);
        Alert.alert('Error', response.errorMessage || 'Something went wrong');
      } else {
        setOptionModalVisible(false);
        setImageUri(response.assets?.[0]?.uri || null);
      }
    });
  };

  const openGallary = () => {
    let options = {
      mediaType: 'photo',
      saveToPhotos: true,
      cameraType: 'back',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setOptionModalVisible(false);
      } else if (response.errorCode) {
        setOptionModalVisible(false);
        Alert.alert('Error', response.errorMessage || 'Something went wrong');
      } else {
        setOptionModalVisible(false);
        setImageUri(response.assets?.[0]?.uri || null);
      }
    });
  };

  const renderContact = ({ item }: { item: (typeof socityContact)[0] }) => (
    <ContactCard
      Icon={item.icon}
      name={item.name}
      contact={item.contact}
      CallIcon={PhoneCall}
      onPressCall={() => console.log(`Calling ${item.name}...`)}
    />
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header Image */}
      <ImageBackground
        source={
          imageUri
            ? { uri: imageUri }
            : require('../../Assets/Image/tallBuilding.jpeg')
        }
        style={styles.headerImage}
      >
        <View style={styles.headerIconWrapper}>
          <Search height={24} width={24} />
        </View>

        <TouchableOpacity
          onPress={() => setOptionModalVisible(true)}
          style={styles.cameraButton}
        >
          <Camera height={24} width={24} />
        </TouchableOpacity>

        <Text style={styles.societyText}>Ahmedabad-Ops 1</Text>
      </ImageBackground>

      <View style={{ backgroundColor: '#FBFBFB' }}>
        {/* Quick Actions */}
        <View
          style={{
            marginTop: verticalScale(-50),
            paddingHorizontal: moderateScale(15),
          }}
        >
          <View style={styles.row}>
            <ServicesCard
              Icon={PlusPost}
              label="Create Post"
              bgColor="rgba(55,183,254,0.1)"
            />

            <ServicesCard
              Icon={PlusBusiness}
              label="Business/Job"
              bgColor="rgba(254,178,55,0.1)"
              onPress={() =>
                navigation.navigate('SocietyList', {
                  type: 'Business/Job',
                } as never)
              }
            />
          </View>

          <View style={styles.row}>
            <ServicesCard
              Icon={PreApproved}
              label="Pre Approval"
              bgColor="rgba(254,178,55,0.1)"
              onPress={() => navigation.navigate('preApproved' as never)}
            />

            <ServicesCard
              Icon={Security}
              label="Call Guard"
              bgColor="rgba(254,178,55,0.1)"
            />
          </View>
        </View>

        {/* To-do Section */}
        <View style={MainStyle.section}>
          <Text style={[styles.label, { fontSize: scale(16) }]}>
            Your To-do’s
          </Text>
          <View style={styles.paymentCardWrapper}>
            <View style={styles.paymentCardInnerWrapper}>
              <View style={styles.paymentCardRow}>
                <View style={styles.paymentCardIcon}>
                  <Maintanance height={verticalScale(30)} width={scale(30)} />
                </View>
                <Text style={styles.amountText}>RS. 15000</Text>
                <Text style={styles.maintananceText}>Maintenance</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.payText}>Pay</Text>
                <View style={styles.arrowIcon}>
                  <RightArrow height={12} width={6} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Services Section */}
        <View style={MainStyle.section}>
          <Text style={[styles.label, { fontSize: scale(16) }]}>
            Services You Deserved
          </Text>

          <View style={styles.quickActions}>
            {[
              { label: 'Amenities', image: Amenities, background: '#e6ffe7' },
              { label: 'Directory', image: Directory, background: '#fff9e6' },
              { label: 'Security', image: Security, background: '#e6f4ff' },
              { label: 'Notices', image: Notice, background: '#ffe7eb' },
              { label: 'SOS', image: SOS, background: '#ffe7e6' },
              {
                label: 'Visit Pass',
                image: VisitorPass,
                background: '#f8e6ff',
              },
            ].map((item, index) => {
              const Icon = item.image;
              return (
                <View key={index} style={styles.actionWrapper}>
                  <TouchableOpacity
                    style={[
                      styles.actionCard,
                      { backgroundColor: item.background },
                    ]}
                    activeOpacity={0.8}
                  >
                    <Icon style={styles.actionImage} />
                  </TouchableOpacity>
                  <Text style={styles.actionLabel}>{item.label}</Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* Property Rent/Sell Section */}
        <View style={MainStyle.section}>
          <View
            style={[styles.sectionHeader, { justifyContent: 'space-between' }]}
          >
            <Text style={styles.sectionTitle}>Property Rent/Sell</Text>
            <Text
              style={styles.link}
              onPress={() =>
                navigation.navigate('SocietyList', {
                  type: 'Property Rent/Sell',
                })
              }
            >
              See All
            </Text>
          </View>

          <FlatList
            data={propertyList}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <PropertyCard property={item} />}
          />
        </View>

        {/* Contacts Section */}
        <View style={MainStyle.section}>
          <Text style={[styles.label, { fontSize: scale(16) }]}>
            Society Contacts
          </Text>
          <View style={MainStyle.cardListWrapper}>
            <FlatList
              data={socityContact}
              renderItem={renderContact}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>

      {/* Camera Modal */}
      <CameraModalComponent
        visible={optionModalVisible}
        onClose={() => setOptionModalVisible(false)}
        onCameraPress={openCamera}
        onGalleryPress={openGallary}
      />
    </ScrollView>
  );
};

export default Society;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: width,
    height: moderateScale(353),
  },
  headerIconWrapper: {
    position: 'absolute',
    top: verticalScale(50),
    right: scale(20),
    flexDirection: 'row',
    gap: 15,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 9,
  },
  cameraButton: {
    position: 'absolute',
    top: verticalScale(50),
    right: moderateScale(80),
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 9,
  },
  societyText: {
    position: 'absolute',
    bottom: verticalScale(60),
    left: scale(20),
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  row: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },
  section: {
    padding: moderateScale(15),
  },
  label: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(16),
    fontWeight: '600',
    color: '#003366',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(16),
    fontWeight: '600',
    color: '#034175',
  },
  link: {
    fontFamily: 'Inter-Medium',
    color: '#034175',
    fontSize: scale(16),
    fontWeight: '500',
  },
  paymentCardWrapper: {
    height: verticalScale(96),
    marginTop: verticalScale(12),
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  paymentCardInnerWrapper: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(14),
    borderColor: 'rgba(0, 0, 0, 0.06)',
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentCardIcon: {
    height: verticalScale(36),
    width: scale(56),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(254, 178, 55, 0.10)',
    borderRadius: 3.5,
  },
  amountText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(16),
    fontWeight: '500',
    color: '#000000',
  },
  maintananceText: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(12),
    fontWeight: '500',
    color: 'rgb(0, 0, 0, 0.37)',
  },
  payText: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(12),
    fontWeight: '500',
    color: '#0C7918',
  },
  arrowIcon: {
    height: verticalScale(24),
    width: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: verticalScale(12),
    borderRadius: scale(12),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  actionWrapper: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: verticalScale(15),
    gap: 5,
  },
  actionCard: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionImage: {
    width: scale(30),
    height: scale(30),
    resizeMode: 'contain',
  },
  actionLabel: {
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
});
