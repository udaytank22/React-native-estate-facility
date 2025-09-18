import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListHeader from '../../Components/ListHeader';
import { useNavigation } from '@react-navigation/native';
import { MainStyle } from '../../Assets/Style/MainStyle';
import Swiper from 'react-native-swiper';
import { Arrow, Share } from '../../Assets/Constant/Images';
import { scale, verticalScale } from 'react-native-size-matters';
import { propertyList } from '../../Assets/StaticData/StaticData';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';

const BusinessDetails = ({ route }: any) => {
  const { businessId } = route.params;
  const businessData = propertyList.find(p => p.id === businessId);
  console.log(businessData?.type);
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <SafeAreaView style={{ backgroundColor: '#FFFFFF', height: '100%' }}>
        <View style={{ flex: 1, backgroundColor: '#FBFBFB' }}>
          <ListHeader
            title="Business"
            isMoreVisible={true}
            isExtraOptionVisible={true}
            onBackPress={() => navigation.goBack()}
          />

          <View style={[MainStyle.section, { flex: 1 }]}>
            {/* slider */}
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
                {businessData?.images.map((img: any, index: number) => (
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
            {/* Details Section */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}
              >
                <Text style={[styles.label, { fontSize: scale(16) }]}>
                  Flat Details
                </Text>
                <View
                  style={[
                    styles.typeBadge,
                    businessData?.type === 'Rent' ? styles.rent : styles.sell,
                  ]}
                >
                  <Text style={styles.typeText}>
                    {businessData?.type === 'Rent' ? 'Rent Only' : 'Sell Only'}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
              >
                <View style={{ flex: 1 }}>
                  {[
                    { label: 'House Type', value: businessData?.houseType },
                    {
                      label: 'Built-up area',
                      value: businessData?.builtUpArea,
                    },
                    { label: 'House Number', value: businessData?.houseNumber },
                    { label: 'Furnishing', value: businessData?.furnishing },
                    {
                      label: 'Bachelors allowed',
                      value: businessData?.bachelorsAllowed,
                    },
                    { label: 'Listed By', value: businessData?.listedBy },
                    { label: 'Owner Name', value: businessData?.ownerName },
                    { label: 'Price', value: businessData?.price },
                  ].map((item, index) => (
                    <View key={index} style={styles.row}>
                      <Text style={styles.detailsLabel}>{item.label}</Text>
                      <Text style={styles.value}>{item.value}</Text>
                    </View>
                  ))}
                </View>
                <Share height={24} width={24} />
              </View>

              <Text
                style={[
                  styles.label,
                  { fontSize: scale(16), marginTop: verticalScale(20) },
                ]}
              >
                Description
              </Text>
              <Text
                style={[
                  styles.detailsLabel,
                  { textAlign: 'justify', marginTop: 10 },
                ]}
              >
                {businessData?.description}
              </Text>
              <Text
                style={[
                  styles.label,
                  { fontSize: scale(16), marginTop: verticalScale(20) },
                ]}
              >
                Terms & Condition
              </Text>
              <Text
                style={[
                  styles.detailsLabel,
                  { textAlign: 'justify', marginTop: 10 },
                ]}
              >
                {businessData?.terms}
              </Text>
              <View style={{ marginTop: verticalScale(30) }}>
                <MainButtonComponent title="Call Now" />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
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
  label: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(16),
    fontWeight: '600',
    color: '#003366',
  },
  typeBadge: {
    width: scale(97),
    height: verticalScale(34),
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  typeText: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000000',
  },
  rent: {
    backgroundColor: '#fff8e1',
  },
  sell: {
    backgroundColor: '#e3f2fd',
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
});
