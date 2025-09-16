import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Swiper from 'react-native-swiper';

import { PhoneCall, Arrow } from '../../Assets/Constant/Images';

const PropertyCard = ({ property }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Swiper
          style={styles.swiper}
          showsButtons={true} // Show navigation arrows
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          nextButton={<Arrow style={styles.arrow} />}
          prevButton={
            <Arrow
              style={[styles.arrow, { transform: [{ rotate: '180deg' }] }]}
            />
          }
        >
          {property.images.map((img: any, index: any) => (
            <View style={{ borderRadius: scale(10), overflow: 'hidden' }}>
              <Image key={index} source={img} style={styles.image} />
            </View>
          ))}
        </Swiper>
        <View
          style={[
            styles.typeBadge,
            property.type === 'Rent' ? styles.rent : styles.sell,
          ]}
        >
          <Text style={styles.typeText}>{property.type}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.idText}>{property.id}</Text>
          <Text style={styles.nameText}>{property.name}</Text>
        </View>

        <TouchableOpacity>
          <PhoneCall height={verticalScale(28)} width={scale(28)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scale(198),
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: scale(18),
    marginRight: scale(10),
    marginTop: verticalScale(12),
    marginBottom: verticalScale(5),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 1,
    padding: moderateScale(12),
  },
  imageContainer: {
    width: scale(175),
    height: verticalScale(131),
    position: 'relative',
  },
  swiper: {},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  typeBadge: {
    position: 'absolute',
    top: 5,
    right: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 21,
  },
  rent: {
    backgroundColor: '#fff8e1',
  },
  sell: {
    backgroundColor: '#e3f2fd',
  },
  typeText: {
    fontSize: scale(12),
    fontWeight: '400',
    color: '#000000',
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
  infoContainer: {
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: verticalScale(22),
  },
  idText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),
    fontWeight: '600',
    color: '#000000',
  },
  nameText: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(14),
    fontWeight: '500',
    color: '#000000',
  },
  arrow: {
    width: scale(20),
    height: verticalScale(21),
  },
});

export default PropertyCard;
