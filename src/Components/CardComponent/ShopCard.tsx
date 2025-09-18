import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

interface ShopCardProps {
  image: ImageSourcePropType;
  name: string;
  onPress?: () => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ image, name, onPress }) => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <Image source={image} style={styles.image} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.name}>{name}</Text>
        <LinearGradient
          colors={['#106099', '#2181bf']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: scale(20) }}
        >
          <View style={styles.iconWrapper}>
            <Icon
              name="arrow-top-right-thin"
              color="white"
              size={15}
              onPress={onPress}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ShopCard;

const styles = StyleSheet.create({
  card: {
    width: scale(195),
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: scale(18),
    marginRight: scale(10),
    marginBottom: verticalScale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 1,
    padding: moderateScale(12),
  },
  image: {
    height: verticalScale(131),
    width: scale(175),
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(6),
  },
  name: {
    fontFamily: 'Inter-Medium',
    height: verticalScale(44),
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: verticalScale(22),
    color: '#000000',
    flex: 1,
  },
  iconWrapper: {
    padding: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
