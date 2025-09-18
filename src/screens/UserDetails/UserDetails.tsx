import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React, { use, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { MainStyle } from '../../Assets/Style/MainStyle';
import {
  Arrow,
  PdfFile,
  UserDetailProfile,
} from '../../Assets/Constant/Images';
import GateTabs from '../../Components/Tabs/GateTab';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import {
  countryCodes,
  Document,
  FamilyMemberData,
  PersonalVehicleData,
  propertyList,
  shopData,
} from '../../Assets/StaticData/StaticData';
import CountryPickerModal from '../../Components/ModalComponents/CountryPickerModal';
import RadioButton from '../../Components/FormComponent/RadioButton';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import Swiper from 'react-native-swiper';
import VehicleCard from '../../Components/CardComponent/PersonalVehicleCard';
import FamilyMemberCard from '../../Components/CardComponent/FamilyMemberCard';
import DocumentCard from '../../Components/CardComponent/DocumentCard';
import ShopCard from '../../Components/CardComponent/ShopCard';

const UserDetails = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Personal Details');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [selected, setSelected] = useState('Job');

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const images = [
    require('../../Assets/Image/Property1.jpg'),
    require('../../Assets/Image/Property2.jpg'),
    require('../../Assets/Image/Property3.jpg'),
    require('../../Assets/Image/Property4.jpg'),
  ];

  const renderVehicleItem = ({ item }: any) => (
    <VehicleCard
      carNumber={item.name}
      model={item.modal}
      color={item.color}
      parkingSlot={item.parking}
      contact={item.contact}
      type={item.type}
    />
  );

  const renderFamilyMemberItem = ({ item }: any) => (
    <FamilyMemberCard
      name={item.name}
      relation={item.relation}
      gender={item.gender}
      mobileNo={item.mobileNo}
      contact={item.contact}
    />
  );

  const renderDocumentData = ({ item }: any) => <DocumentCard item={item} />;

  const renderShopItem = ({ item }: any) => (
    <ShopCard
      image={item.ImageComp}
      name={item.name}
      onPress={() => console.log('Clicked:', item.name)}
    />
  );

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Detail Page"
            isMoreVisible={false}
            onBackPress={() => navigation.goBack()}
          />

          <View style={MainStyle.section}>
            <View style={[styles.profileWrapper, { marginTop: 10 }]}>
              {/* Profile Image */}
              <UserDetailProfile height={93} width={93} />

              {/* Tabs */}
              <View style={{ marginTop: 20 }}>
                <GateTabs
                  tabs={['Personal Details', 'House Details', 'Vehicle']}
                  onTabChange={handleTabChange}
                  selectedTab={selectedTab}
                />
              </View>
              <View style={{ paddingTop: 15 }}>
                <GateTabs
                  tabs={['Family Member', 'Documents', 'Business']}
                  onTabChange={handleTabChange}
                  selectedTab={selectedTab}
                />
              </View>
            </View>

            {/* personal details tab */}
            <ScrollView
              style={{ marginTop: 30 }}
              contentContainerStyle={{ paddingBottom: 100 }}
              showsVerticalScrollIndicator={false}
            >
              {selectedTab === 'Personal Details' && (
                <>
                  <TextInputComponent
                    label="Full name"
                    onChange={text => setFullName(text)}
                    value={fullName}
                  />

                  {/* Flag Dropdown */}
                  <Text style={styles.label}>Mobile Number</Text>
                  <View style={styles.rowContainer}>
                    <TouchableOpacity
                      style={styles.countryContainer}
                      onPress={() => setModalVisible(true)}
                    >
                      <Text style={{ fontSize: 20 }}>
                        {selectedCountry.flag}
                      </Text>
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
                      keyboardType="phone-pad"
                      value={phone}
                      onChangeText={text => setPhone(text)}
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

                  <TextInputComponent
                    label="Email Address"
                    onChange={text => setEmailAddress(text)}
                    value={emailAddress}
                  />

                  <TextInputComponent
                    label="Payment Details"
                    onChange={text => setPaymentDetails(text)}
                    value={paymentDetails}
                  />

                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: 'Inter-Medium',
                      }}
                    >
                      Occupation Type
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 19 }}>
                      <RadioButton
                        label="Business"
                        value="Business"
                        selected={selected}
                        onChange={setSelected}
                      />
                      <RadioButton
                        label="Job"
                        value="Job"
                        selected={selected}
                        onChange={setSelected}
                      />
                    </View>
                  </View>

                  <View style={{ marginTop: 30, paddingBottom: 200 }}>
                    <MainButtonComponent title="Save" />
                  </View>
                </>
              )}
              {/* House Details Tab */}
              {selectedTab === 'House Details' && (
                <>
                  <View style={styles.swiperWrapper}>
                    <Swiper
                      style={styles.swiper}
                      autoplay
                      autoplayTimeout={3}
                      showsButtons={true}
                      dotStyle={styles.dot}
                      activeDotStyle={styles.activeDot}
                      nextButton={<Arrow style={styles.arrow} />}
                      prevButton={
                        <Arrow
                          style={[
                            styles.arrow,
                            { transform: [{ rotate: '180deg' }] },
                          ]}
                        />
                      }
                    >
                      {images.map((img: any, index: number) => (
                        <View
                          key={index}
                          style={{
                            borderRadius: scale(10),
                            overflow: 'hidden',
                            flex: 1,
                          }}
                        >
                          <Image
                            source={img}
                            style={styles.image}
                            resizeMode="cover"
                          />
                        </View>
                      ))}
                    </Swiper>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                      paddingBottom: 200,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      {[
                        {
                          label: 'House Type',
                          value: propertyList[0]?.houseType,
                        },
                        {
                          label: 'Built-up area',
                          value: propertyList[0]?.builtUpArea,
                        },
                        {
                          label: 'House Number',
                          value: propertyList[0]?.houseNumber,
                        },
                        {
                          label: 'Furnishing',
                          value: propertyList[0]?.furnishing,
                        },
                        {
                          label: 'Bachelors allowed',
                          value: propertyList[0]?.bachelorsAllowed,
                        },
                        {
                          label: 'Listed By',
                          value: propertyList[0]?.listedBy,
                        },
                        {
                          label: 'Owner Name',
                          value: propertyList[0]?.ownerName,
                        },
                        { label: 'Price', value: propertyList[0]?.price },
                      ].map((item, index) => (
                        <View key={index} style={styles.row}>
                          <Text style={styles.detailsLabel}>{item.label}</Text>
                          <Text style={styles.value}>{item.value}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </>
              )}
              {/* Vehicle Tab */}
              {selectedTab === 'Vehicle' && (
                <View style={{ paddingBottom: 200 }}>
                  <FlatList
                    data={PersonalVehicleData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderVehicleItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40 }}
                  />
                </View>
              )}
              {/* Family Member Tab  */}
              {selectedTab === 'Family Member' && (
                <View style={{ paddingBottom: 200 }}>
                  <FlatList
                    data={FamilyMemberData}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderFamilyMemberItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40 }}
                  />
                </View>
              )}
              {/* Documents Tab  */}
              {selectedTab === 'Documents' && (
                <View style={MainStyle.cardListWrapper}>
                  <FlatList
                    data={Document}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderDocumentData}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                    }}
                  />
                </View>
              )}
              {/* Business */}
              {selectedTab === 'Business' && (
                <View style={{ paddingBottom: 200 }}>
                  <FlatList
                    data={shopData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderShopItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40 }}
                  />
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
      <CountryPickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={country => setSelectedCountry(country)}
        countryCodes={countryCodes}
      />
    </>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
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
  label: {
    fontFamily: 'Inter-Medium',
    marginBottom: moderateVerticalScale(8),
    fontWeight: '500',
    fontSize: scale(14),
  },
  swiperWrapper: {
    height: verticalScale(170),
  },
  swiper: {},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.56)',
    width: scale(6),
    height: scale(6),
    borderRadius: scale(15),
    marginBottom: verticalScale(-10),
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: scale(6),
    height: scale(6),
    borderRadius: scale(15),
    marginBottom: verticalScale(-10),
  },
  arrow: {
    width: scale(20),
    height: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  detailsLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000000',
    flex: 1,
  },
  value: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(14),
    color: '#000000',
    flex: 1,
    textAlign: 'left',
  },
  vehicleLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    fontFamily: 'Inter-Medium',
  },
  vehicleValue: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.37)',
    fontFamily: 'Inter-Medium',
  },
});
