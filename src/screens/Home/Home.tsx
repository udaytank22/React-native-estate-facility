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
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#0072ff', '#00c6ff', '#0072ff']}
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
              <Icon
                name="chat-outline"
                size={22}
                color="#fff"
                style={styles.icon}
              />
              <Icon
                name="bell-outline"
                size={22}
                color="#fff"
                style={styles.icon}
              />
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <Icon name="magnify" size={20} color="#666" />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#666"
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
              { label: 'Gate Updates', icon: 'gate' },
              { label: 'My Bills', icon: 'file-document' },
              { label: 'Visit Pass', icon: 'card-account-details' },
              { label: 'Help Desk', icon: 'headset' },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.greetingActionCard}>
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
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>
                Power outage Announcement
              </Text>
              <Text numberOfLines={2} style={styles.announcementDesc}>
                The Metropolitan Electricity Authority will temporarily cut
                off...
              </Text>
            </View>

            <View style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>
                Janmashtami Celebration
              </Text>
              <Text numberOfLines={2} style={styles.announcementDesc}>
                All residents are hereby informed our society will be
                celebrating...
              </Text>
            </View>
          </ScrollView>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity style={styles.card}>
              <Icon
                name="chat-outline"
                size={22}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.label}>Daily Help</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
              <Icon
                name="chat-outline"
                size={22}
                color="#000"
                style={styles.icon}
              />
              <Text style={styles.label}>Pre Approved</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.greeting}>Good Morning John!</Text>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            {[
              {
                label: 'Amenities',
                image: require('../../Assets/Image/amenities.png'),
              },
              {
                label: 'Directory',
                image: require('../../Assets/Image/address-book.png'),
              },
              {
                label: 'Security',
                image: require('../../Assets/Image/guard.png'),
              },
              {
                label: 'Notices',
                image: require('../../Assets/Image/notice.png'),
              },
              {
                label: 'SOS',
                image: require('../../Assets/Image/sos.png'),
              },
              {
                label: 'Visit Pass',
                image: require('../../Assets/Image/visitor.png'),
              },
            ].map((item, index) => (
              <TouchableOpacity key={index} style={styles.actionCard}>
                <Image source={item.image} style={styles.actionImage} />
                <Text style={styles.actionLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Banner */}
        <LinearGradient colors={['#0072ff', '#00c6ff']} style={styles.banner}>
          <Text style={styles.bannerText}>
            Shock-proof solutions, delivered fast.
          </Text>
          <TouchableOpacity style={styles.bannerButton}>
            <Text style={styles.bannerButtonText}>Contact Now</Text>
          </TouchableOpacity>
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
              <Text style={styles.shopName}>Raghuvir Soda Shop</Text>
            </View>

            <View style={styles.shopCard}>
              <Image
                source={{ uri: 'https://picsum.photos/200/200?shop2' }}
                style={styles.shopImage}
              />
              <Text style={styles.shopName}>Anjana Ice-cream Shop</Text>
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
  },
  icon: {
    marginLeft: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 12,
    height: 42,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
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
    color: '#333',
  },
  greetingQuickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  greetingActionCard: {
    alignItems: 'center',
    flex: 1,
  },
  greetingActionLabel: {
    fontSize: 12,
    marginTop: 6,
    color: '#333',
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
    backgroundColor: '#0072ff',
    borderRadius: 10,
    paddingHorizontal: 6,
    marginLeft: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  announcementCard: {
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderColor: 'blue',
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
    marginHorizontal: 16,
    marginVertical: 20,
    borderRadius: 16,
    padding: 20,
    height: '12%',
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  bannerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#0072ff',
    fontWeight: '600',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
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
