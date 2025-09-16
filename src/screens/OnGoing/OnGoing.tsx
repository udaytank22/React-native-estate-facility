import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

// Import SVGs
import { Splash1, Splash2, Splash3 } from '../../Assets/Constant/Images';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';

const slides = [
  {
    key: '1',
    title: 'Manage Your Society, Effortlessly',
    subtitle:
      'From maintenance to notices – sab kuch ek hi app mein, simple aur fast.',
    Image: Splash1,
    buttonText: 'Next',
  },
  {
    key: '2',
    title: 'Never Miss What Matters',
    subtitle:
      'Get instant updates, event reminders, and important notices – all at your fingertips.',
    Image: Splash2,
    buttonText: 'Next',
  },
  {
    key: '3',
    title: 'Your Safety, Our Priority',
    subtitle:
      'Visitor management, payments, and communication – everything secured and simplified.',
    Image: Splash3,
    buttonText: 'Get Started',
  },
];

export default function OnGoing({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width, height } = useWindowDimensions();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  const handleButtonPress = () => {
    if (activeIndex === slides.length - 1) {
      navigation.replace('Login');
    } else {
      flatListRef.current?.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  };

  const renderItem = ({ item }: any) => {
    const Images = item.Image;
    return (
      <View style={[styles.container, { width }]}>
        {/* SVG scales based on screen width */}
        <View style={styles.imageWrapper}>
          <Images />
        </View>

        <Text style={styles.title}>
          {item.title.split(' ').map((word, i) =>
            i < 2 ? ( // highlight first 2 words
              <Text key={i} style={styles.highlight}>
                {word + ' '}
              </Text>
            ) : (
              word + ' '
            ),
          )}
        </Text>

        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center' }}>
      {/* render the slices */}
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* pagination dots */}
      <View style={styles.pagination}>
        {slides.map((_, index) =>
          index <= activeIndex ? (
            <LinearGradient
              key={index}
              colors={['#034175', '#37B7FE']} // gradient colors
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.activeDot}
            />
          ) : (
            <View key={index} style={styles.dot} />
          ),
        )}
      </View>

      {/* button */}
      <MainButtonComponent
        title={activeIndex === slides.length - 1 ? 'Get Started' : 'Next'}
        handleButtonPress={handleButtonPress}
        button={{ width: width * 0.9, marginBottom: verticalScale(40) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {},
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: scale(22),
    fontWeight: '600',
    color: '#034175',
    marginTop: 12,
    paddingHorizontal: moderateScale(20),
  },
  highlight: {
    color: '#37B7FE',
    fontWeight: '700',
  },
  subtitle: {
    fontFamily: 'Inter',
    fontSize: scale(14),
    color: '#555',
    paddingHorizontal: moderateScale(20),
  },
  pagination: {
    bottom: Platform.OS === 'ios' ? 50 : 50,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    backgroundColor: '#ccc',
    width: 12,
    height: 12,
    borderRadius: 15,
    marginHorizontal: 4,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 15,
    marginHorizontal: 4,
  },
});
