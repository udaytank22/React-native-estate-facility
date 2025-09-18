import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { useAuth } from '../../CustomHooks/CustomHooks';
import {
  PreApproved,
  GatePass,
  Amenities,
  Directory,
  Security,
  Notice,
  SOS,
  VisitorPass,
  ArrowDown,
  Bill,
  Visitor,
  Help,
  DailyHelp,
  Business,
  Add,
  Staff,
  Residents,
  Complaint,
  Shop,
  Booking,
} from '../../Assets/Constant/Images';
import CustomStatusBar from '../../Components/StatusBar';
import FilterButton from '../../Components/FilterButton';
import { useNavigation } from '@react-navigation/native';
import { RootNavigationProp } from '../../Navigation/NavigationType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ServicesCard from '../../Components/CardComponent/ServiceCardCompoent';
import { MainStyle } from '../../Assets/Style/MainStyle';
import { shopData } from '../../Assets/StaticData/StaticData';
import ShopCard from '../../Components/CardComponent/ShopCard';

export const images = [
  require('../../Assets/Image/Banner.png'),
  require('../../Assets/Image/Banner.png'),
  require('../../Assets/Image/Banner.png'),
  require('../../Assets/Image/Banner.png'),
];

const HomeScreen = () => {
  const { logout } = useAuth();
  const navigation = useNavigation<RootNavigationProp>();

  const [userRole, setUserRole] = useState<string | null>(null);

  const getUserInfo = async () => {
    try {
      const userInfoString = await AsyncStorage.getItem('userInfo');
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        setUserRole(userInfo?.role || null);
      }
    } catch (error) {
      console.error('Failed to get user info from storage', error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const renderItem = ({ item }: any) => (
    <ShopCard
      image={item.ImageComp}
      name={item.name}
      onPress={() => console.log('Clicked:', item.name)}
    />
  );

  return (
    <>
      <CustomStatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#106099', '#2181bf', '#106099']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: scale(6),
              }}
              onPress={() => navigation.navigate('Search')}
            >
              <View style={{ gap: scale(6) }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: scale(6),
                  }}
                >
                  <Text style={styles.societyName}>Ahmedabad Opal 1</Text>
                  <ArrowDown width={11.4} height={5} />
                </View>
                <Text style={styles.blockText}>Block A-001</Text>
              </View>
            </Pressable>

            <View style={styles.headerIcons}>
              {/* Chat Icon with badge */}
              <View style={styles.iconWrapper}>
                <TouchableOpacity onPress={logout}>
                  <Icon
                    name="chat-outline"
                    size={moderateScale(18)}
                    color="#fff"
                  />
                </TouchableOpacity>
                <View style={styles.badgeBlue}>
                  <Text style={styles.badgeTextSmall}>2</Text>
                </View>
              </View>

              {/* Bell Icon with red dot */}
              <View style={styles.iconWrapper}>
                <Icon
                  name="bell-outline"
                  size={moderateScale(20)}
                  color="#fff"
                />
                <View style={styles.badgeRed} />
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
              <Icon name="magnify" size={moderateScale(20)} color="#fff" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#fff"
                style={styles.searchInput}
              />
            </View>
            <FilterButton />
          </View>
        </LinearGradient>

        <View>
          {/* Greeting */}
          <View style={MainStyle.section}>
            <Text style={styles.greeting}>Good Morning John!</Text>
            {/* Quick Actions */}
            <View style={styles.greetingQuickActions}>
              {[
                {
                  label: 'Gate Updates',
                  icon: GatePass,
                  background: '#fff0e7',
                  onPress: () => navigation.navigate('GateUpdate'),
                },
                {
                  label: 'My Bills',
                  icon: Bill,
                  background: '#fff9e6',
                  onPress: () => navigation.navigate('Bill'),
                },
                {
                  label: 'Visit Pass',
                  icon: Visitor,
                  background: '#e9ffe7',
                  onPress: () => navigation.navigate('VisitPass'),
                },
                ...(userRole === 'subAdmin'
                  ? [
                      {
                        label: 'Business',
                        icon: Business, // replace with your SVG/icon component
                        background: '#e6f0ff',
                        onPress: () => navigation.navigate('Business'),
                      },
                    ]
                  : []),
                {
                  label: 'Help Desk',
                  icon: Help,
                  background: '#ffe7e6',
                  onPress: () => navigation.navigate('HelpDesk'),
                },
              ].map((item, index) => {
                const Icon = item.icon; // important: assign component
                return (
                  <View key={index} style={{ alignItems: 'center', flex: 1 }}>
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.greetingActionCard,
                        { backgroundColor: item.background },
                      ]}
                      activeOpacity={0.8}
                      onPress={item?.onPress}
                    >
                      <Icon width={30} height={30} fill="#ff914d" />
                    </TouchableOpacity>
                    <Text style={styles.greetingActionLabel}>{item.label}</Text>
                  </View>
                );
              })}
            </View>
          </View>

          {/* Announcement */}
          <View style={MainStyle.section}>
            {/* title */}
            <View style={styles.sectionHeader}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.sectionTitle}>Announcement</Text>
                <LinearGradient
                  colors={['#106099', '#2181bf']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.badge}
                >
                  <Text style={styles.badgeText}>2</Text>
                </LinearGradient>
              </View>
              {userRole === 'subAdmin' && (
                <View style={{ paddingRight: 28.5 }}>
                  <Add height={24} width={24} />
                </View>
              )}
            </View>

            {/* Announcement Card */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View
                style={[styles.announcementCard, { borderColor: '#024276' }]}
              >
                <Text style={styles.announcementTitle}>
                  Power outage Announcement
                </Text>
                <Text numberOfLines={2} style={styles.announcementDesc}>
                  The Metropolitan Electricity Authority will temporarily cut
                  off...
                </Text>
                <View style={styles.announcementFooter}>
                  <View style={styles.announcementUser}>
                    <Image
                      source={require('../../Assets/Image/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg')}
                      style={styles.userImage}
                    />
                    <Text style={styles.userName}>Rohan Mistry</Text>
                  </View>
                  <Text style={styles.date}>21 Aug, 2025</Text>
                </View>
              </View>

              <View
                style={[styles.announcementCard, { borderColor: '#38b8fe' }]}
              >
                <Text style={styles.announcementTitle}>
                  Janmashtami Celebration
                </Text>
                <Text numberOfLines={2} style={styles.announcementDesc}>
                  All residents are hereby informed our society will be
                  celebrating...
                </Text>
                <View style={styles.announcementFooter}>
                  <View style={styles.announcementUser}>
                    <Image
                      source={require('../../Assets/Image/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg')}
                      style={styles.userImage}
                    />
                    <Text style={styles.userName}>Rohan Mistry</Text>
                  </View>
                  <Text style={styles.date}>21 Aug, 2025</Text>
                </View>
              </View>
            </ScrollView>

            {/* Daily Help & Pre Approved */}
            <View style={styles.row}>
              <ServicesCard
                Icon={userRole === 'subAdmin' ? Staff : DailyHelp}
                label={userRole === 'subAdmin' ? 'Staff' : 'Daily Help'}
                bgColor="rgba(55,183,254,0.1)"
              />

              <ServicesCard
                Icon={PreApproved}
                label="Pre Approved"
                bgColor="rgba(254,178,55,0.1)"
                onPress={() => navigation.navigate('preApproved' as never)}
              />
            </View>

            {userRole === 'subAdmin' && (
              <>
                <View style={styles.row}>
                  <ServicesCard
                    Icon={Amenities}
                    label="Amenities"
                    bgColor="#e6ffe7"
                  />
                  <ServicesCard
                    Icon={Security}
                    label="Security"
                    bgColor="#e6f4ff"
                  />
                </View>
                <View style={styles.row}>
                  <ServicesCard
                    Icon={Residents}
                    label="Residents"
                    bgColor="#e6ffe7"
                  />
                  <ServicesCard
                    Icon={Complaint}
                    label="Complaint"
                    bgColor="#ffe7e6"
                  />
                </View>
                <View style={styles.row}>
                  <ServicesCard Icon={Shop} label="Shops" bgColor="#e6ffe7" />
                  <ServicesCard
                    Icon={Booking}
                    label="Bookings"
                    bgColor="#e6f4ff"
                  />
                </View>
              </>
            )}
          </View>

          {/* Banner */}
          <LinearGradient
            colors={['#034175', '#34B0F5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.banner}
          >
            <View style={styles.bannerContent}>
              <View style={{ flex: 1 }}>
                <Text style={styles.bannerText}>
                  Shock-proof solutions, delivered fast.
                </Text>
                <TouchableOpacity style={styles.bannerButton}>
                  <Text style={styles.bannerButtonText}>Contact Now</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.imageWrapper}>
                {/* Back shadow ellipse layer */}
                <LinearGradient
                  colors={['#00c6ff', '#0072ff']}
                  start={{ x: 0.2, y: 0.2 }}
                  end={{ x: 0.8, y: 0.8 }}
                  style={styles.shadowEllipse}
                />
                {/* Actual image on top */}
                <Image
                  source={require('../../Assets/Image/51ssGFephdL._UF350,350_QL80_.jpg')}
                  style={styles.bannerImage}
                  resizeMode="cover"
                />
              </View>
            </View>
          </LinearGradient>

          {/* Services Section */}
          {userRole === 'user' && (
            <View style={MainStyle.section}>
              <Text style={[styles.greeting, { fontSize: scale(16) }]}>
                Services You Deserved
              </Text>

              <View style={styles.quickActions}>
                {[
                  {
                    label: 'Amenities',
                    image: Amenities,
                    background: '#e6ffe7',
                  },
                  {
                    label: 'Directory',
                    image: Directory,
                    background: '#fff9e6',
                  },
                  {
                    label: 'Security',
                    image: Security,
                    background: '#e6f4ff',
                  },
                  {
                    label: 'Notices',
                    image: Notice,
                    background: '#ffe7eb',
                  },
                  {
                    label: 'SOS',
                    image: SOS,
                    background: '#ffe7e6',
                  },
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
                        {/* <Image source={item.image} style={styles.actionImage} /> */}
                      </TouchableOpacity>
                      <Text style={styles.actionLabel}>{item.label}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}

          {/* Shops */}
          <View style={MainStyle.section}>
            <View
              style={[
                styles.sectionHeader,
                { justifyContent: 'space-between' },
              ]}
            >
              <Text style={[styles.sectionTitle, { color: '#000000' }]}>
                Shops Near You
              </Text>
              <Text style={styles.link}>See All</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.shopRow}>
                <FlatList
                  data={shopData}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  horizontal
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    paddingBottom: verticalScale(20),
  },
  headerTop: {
    padding: moderateScale(16),
    paddingLeft: scale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  societyName: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(13),
    color: '#fff',
    fontWeight: '600',
  },
  blockText: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    color: '#e0f7fa',
    marginTop: verticalScale(2),
  },
  headerIcons: {
    flexDirection: 'row',
    gap: scale(12),
  },
  iconWrapper: {
    height: scale(35),
    width: scale(35),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(8),
  },
  badgeBlue: {
    position: 'absolute',
    top: verticalScale(-4),
    right: scale(-4),
    backgroundColor: '#1da1f2',
    borderRadius: scale(10),
    minWidth: scale(18),
    height: verticalScale(18),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(4),
  },
  badgeRed: {
    position: 'absolute',
    top: verticalScale(6),
    right: scale(6),
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: 'red',
  },
  badgeText: {
    fontFamily: 'Inter',
    color: '#fff',
    fontSize: scale(14),
    fontWeight: '500',
  },
  badgeTextSmall: {
    color: '#fff',
    fontSize: scale(10),
    fontWeight: '600',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(220),
    height: verticalScale(32),
    borderRadius: scale(30),
    borderColor: '#c7c7c7',
    borderWidth: 1,
    paddingHorizontal: scale(12),
    marginHorizontal: scale(10),
    marginBottom: Platform.OS === 'ios' ? verticalScale(10) : 0,
  },
  searchInput: {
    flex: 1,
    marginLeft: scale(8),
    fontSize: scale(14),
    color: '#fff',
  },
  section: {
    padding: moderateScale(15),
  },
  greeting: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),
    fontWeight: '600',
    color: '#003366',
  },
  greetingQuickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(16),
    paddingHorizontal: scale(10),
  },
  greetingActionCard: {
    height: scale(50),
    width: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(11),
  },
  greetingActionLabel: {
    fontFamily: 'Inter',
    fontSize: scale(12),
    fontWeight: '400',
    marginTop: verticalScale(6),
    color: '#000000',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(16),
    fontWeight: '600',
    color: '#034175',
  },
  badge: {
    height: 22,
    width: 22,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(6),
  },
  announcementCard: {
    width: scale(259),
    height: verticalScale(119),
    backgroundColor: '#fff',
    borderRadius: scale(6),
    borderLeftWidth: scale(3),
    padding: moderateScale(14),
    marginRight: scale(10),
    marginTop: verticalScale(12),
    flexDirection: 'column', // 👈 ensures vertical layout
  },
  announcementTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scale(14),
    fontWeight: '600',
    color: '#000000',
  },
  announcementDesc: {
    fontFamily: 'Inter',
    fontSize: scale(12),
    color: '#000000',
    fontWeight: '400',
    lineHeight: verticalScale(18),
    marginTop: verticalScale(6),
  },
  announcementFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 'auto', // 👈 pushes footer to bottom
  },
  announcementUser: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: scale(22),
    width: scale(22),
    borderRadius: scale(22),
  },
  userName: {
    fontFamily: 'Inter-Medium',
    paddingLeft: scale(5),
    fontSize: scale(12),
    fontWeight: '500',
    color: '#034175',
  },
  date: {
    fontFamily: 'Inter',
    color: 'rgba(0,0,0,0.22)',
    opacity: 22,
    fontSize: scale(12),
  },
  row: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
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
  banner: {
    borderRadius: scale(16),
    overflow: 'hidden',
    marginHorizontal: scale(16),
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(20),
  },
  bannerText: {
    width: scale(237),
    height: verticalScale(68),
    color: '#fff',
    fontSize: scale(22),
    lineHeight: 34,
    fontWeight: '600',
    // marginBottom: verticalScale(16),
  },
  bannerButton: {
    height: verticalScale(30),
    width: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(55,183,254,0.34)',
    borderRadius: scale(8),
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: scale(14),
  },
  imageWrapper: {
    width: scale(130),
    height: scale(130),
    borderRadius: scale(65),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(-40),
    marginBottom: scale(-100),
    overflow: 'visible',
  },
  shadowEllipse: {
    position: 'absolute',
    width: scale(160), // bigger than image
    height: scale(160),
    borderRadius: scale(80),
    opacity: 0.15, // subtle effect
  },
  bannerImage: {
    width: scale(130),
    height: scale(130),
    borderRadius: scale(65),
  },
  link: {
    fontFamily: 'Inter',
    color: '#0072ff',
    fontSize: scale(13),
  },
  shopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(12),
  },
  shopCard: {
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
  shopImage: {
    width: scale(175),
    height: verticalScale(131),
    resizeMode: 'cover',
  },
  shopFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(6),
  },
  shopName: {
    fontFamily: 'Inter-Medium',
    height: verticalScale(44),
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: verticalScale(22),
    color: '#000000',
    flex: 1,
  },
  shopIcon: {
    width: scale(27),
    height: scale(27),
    borderRadius: scale(27),
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIconWrapper: {
    height: verticalScale(36),
    width: scale(36),
    borderRadius: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
