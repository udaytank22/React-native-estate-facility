import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#106099', '#2181bf', '#106099']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={styles.societyName}>Ahmedabad Opal 1</Text>
                <Text style={styles.blockText}>Block A-001</Text>
              </View>
              <Icon
                name="chevron-down"
                size={22}
                color="#fff"
                style={styles.icon}
              />
            </View>

            <View style={styles.headerIcons}>
              {/* Chat Icon with badge */}
              <View style={styles.iconWrapper}>
                <Icon name="chat-outline" size={20} color="#fff" />
                <View style={styles.badgeBlue}>
                  <Text style={styles.badgeText}>2</Text>
                </View>
              </View>

              {/* Bell Icon with red dot */}
              <View style={styles.iconWrapper}>
                <Icon name="bell-outline" size={20} color="#fff" />
                <View style={styles.badgeRed} />
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Icon name="magnify" size={20} color="#fff" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#fff"
              style={styles.searchInput}
            />
          </View>
        </LinearGradient>

        {/* Greeting */}
        <View style={styles.section}>
          <Text style={styles.greeting}>Good Morning John!</Text>
          {/* Quick Actions */}
          <View style={styles.greetingQuickActions}>
            {[
              { label: 'Gate Updates', icon: 'gate', background: '#fff0e7' },
              {
                label: 'My Bills',
                icon: 'file-document',
                background: '#fff9e6',
              },
              {
                label: 'Visit Pass',
                icon: 'card-account-details',
                background: '#e9ffe7',
              },
              { label: 'Help Desk', icon: 'headset', background: '#ffe7e6' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.greetingActionCard,
                  { backgroundColor: item.background },
                ]}
                activeOpacity={0.8}
              >
                <Icon name={item.icon} size={26} color="#ff914d" />
                <Text style={styles.greetingActionLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Announcement */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
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

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={[
                styles.announcementCard,
                {
                  borderColor: '#024276',
                },
              ]}
            >
              <Text style={styles.announcementTitle}>
                Power outage Announcement
              </Text>
              <Text numberOfLines={2} style={styles.announcementDesc}>
                The Metropolitan Electricity Authority will temporarily cut
                off...
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../../Assets/Image/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg')}
                    style={{ height: 30, width: 30, borderRadius: 20 }}
                  />
                  <Text style={{ paddingLeft: 5 }}>Rohan Mistry</Text>
                </View>
                <Text style={{ color: '#c7c7c7' }}>21 Aug, 2025</Text>
              </View>
            </View>

            <View style={[styles.announcementCard, { borderColor: '#38b8fe' }]}>
              <Text style={styles.announcementTitle}>
                Janmashtami Celebration
              </Text>
              <Text numberOfLines={2} style={styles.announcementDesc}>
                All residents are hereby informed our society will be
                celebrating...
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../../Assets/Image/360_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg')}
                    style={{ height: 30, width: 30, borderRadius: 20 }}
                  />
                  <Text style={{ paddingLeft: 5 }}>Rohan Mistry</Text>
                </View>
                <Text style={{ color: '#c7c7c7' }}>21 Aug, 2025</Text>
              </View>
            </View>
          </ScrollView>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity style={styles.card}>
              <Image
                source={require('../../Assets/Image/6213264.png')}
                style={{ height: 30, width: 30 }}
              />
              <Text style={styles.label}>Daily Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Image
                source={require('../../Assets/Image/images.jpeg')}
                style={{ height: 30, width: 30 }}
              />
              <Text style={styles.label}>Pre Approved</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.greeting}>Services You Deserved</Text>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            {[
              {
                label: 'Amenities',
                image: require('../../Assets/Image/amenities.png'),
                background: '#e6ffe7',
              },
              {
                label: 'Directory',
                image: require('../../Assets/Image/address-book.png'),
                backgrpund: '#fff9e6',
              },
              {
                label: 'Security',
                image: require('../../Assets/Image/guard.png'),
                background: '#e6f4ff',
              },
              {
                label: 'Notices',
                image: require('../../Assets/Image/notice.png'),
                background: '#ffe7eb',
              },
              {
                label: 'SOS',
                image: require('../../Assets/Image/sos.png'),
                background: '#ffe7e6',
              },
              {
                label: 'Visit Pass',
                image: require('../../Assets/Image/visitor.png'),
                background: '#f8e6ff',
              },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.actionCard,
                  { backgroundColor: item.background },
                ]}
              >
                <Image source={item.image} style={styles.actionImage} />
                <Text style={styles.actionLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Banner */}
        <LinearGradient colors={['#0072ff', '#00c6ff']} style={styles.banner}>
          <View style={styles.bannerContent}>
            {/* Left side: text + button */}
            <View style={{ flex: 1 }}>
              <Text style={styles.bannerText}>
                Shock-proof solutions, delivered fast.
              </Text>
              <TouchableOpacity style={styles.bannerButton}>
                <Text style={styles.bannerButtonText}>Contact Now</Text>
              </TouchableOpacity>
            </View>

            {/* Right side: Gradient border around image */}
            <LinearGradient
              colors={['#00c6ff', '#0072ff']}
              style={styles.imageWrapper}
            >
              <Image
                source={require('../../Assets/Image/51ssGFephdL._UF350,350_QL80_.jpg')} // replace with your image
                style={styles.bannerImage}
              />
            </LinearGradient>
          </View>
        </LinearGradient>

        {/* Shops */}
        <View style={styles.section}>
          <View
            style={[styles.sectionHeader, { justifyContent: 'space-between' }]}
          >
            <Text style={styles.sectionTitle}>Shops Near You</Text>
            <Text style={styles.link}>See All</Text>
          </View>

          <View style={styles.shopRow}>
            <View style={styles.shopCard}>
              <Image
                source={{ uri: 'https://picsum.photos/200/200?shop1' }}
                style={styles.shopImage}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.shopName}>Raghuvir Soda Shop</Text>
                <LinearGradient
                  colors={['#106099', '#2181bf']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="arrow-top-right-thin" color="white" />
                </LinearGradient>
              </View>
            </View>

            <View style={styles.shopCard}>
              <Image
                source={{ uri: 'https://picsum.photos/200/200?shop2' }}
                style={styles.shopImage}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={styles.shopName}>Anjana Ice-cream Shop</Text>
                <LinearGradient
                  colors={['#106099', '#2181bf']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 30,
                    paddingHorizontal: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="arrow-top-right-thin" color="white" />
                </LinearGradient>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingBottom: 40,
  },
  headerTop: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  societyName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  blockText: {
    fontSize: 13,
    color: '#e0f7fa',
    marginTop: 2,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 12, // spacing between icons
  },

  iconWrapper: {
    height: 40,
    width: 40,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  badgeBlue: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#1da1f2', // Twitter blue
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  badgeRed: {
    position: 'absolute',
    top: 6,
    right: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    borderRadius: 30,
    borderColor: '#c7c7c7',
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 42,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  section: {
    padding: 16,
  },

  greeting: {
    fontSize: 18,
    fontWeight: '700',
    color: '#003366',
  },

  greetingQuickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 10,
  },

  greetingActionCard: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 16,
    marginHorizontal: 6, // space between cards
    borderRadius: 12, // curved corners
  },

  greetingActionLabel: {
    fontSize: 12,
    marginTop: 6,
    color: '#333',
    textAlign: 'center',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
  },

  badge: {
    borderRadius: 10,
    paddingHorizontal: 6,
    marginLeft: 6,
  },

  badgeText: {
    color: '#fff',
    fontSize: 15,
  },

  announcementCard: {
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderLeftWidth: 5,
    padding: 12,
    marginRight: 12,
    marginTop: 12,
  },

  announcementTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  announcementDesc: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
  },

  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
  },

  serviceCard: {
    width: '30%',
    margin: '1.5%',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },

  serviceLabel: {
    marginTop: 6,
    fontSize: 12,
    color: '#333',
  },

  greetingActionImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginBottom: 6,
  },

  banner: {
    borderRadius: 16,
    overflow: 'hidden',
    margin: 16,
  },

  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },

  bannerButton: {
    backgroundColor: '#1b76b2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },

  bannerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },

  imageWrapper: {
    width: 170,
    height: 170,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4, // thickness of gradient border
    marginRight: -30,
    marginBottom: -50,
  },

  bannerImage: {
    width: '90%',
    height: '90%',
    borderRadius: 65,
    backgroundColor: '#000',
  },

  link: {
    color: '#0072ff',
    fontSize: 13,
  },
  shopRow: {
    flexDirection: 'row',
    marginTop: 12,
  },
  shopCard: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
  },
  shopImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 8,
  },
  shopName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
    width: '90%',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    paddingLeft: 5,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap', // allow wrapping into multiple rows
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
  },
  actionCard: {
    width: '30%', // 3 items per row
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 14,
  },
  actionImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
});
