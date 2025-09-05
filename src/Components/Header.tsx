import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <LinearGradient
      colors={['#026BCA', '#059DFF']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBackground}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.location}>Ahmedabad Opal 1</Text>
          <Text style={styles.block}>Block A-001</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconWrap}>
            <Icon name="bell" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrap}>
            <Icon name="user" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>
    </LinearGradient>
  );
};

export default Header;
const styles = StyleSheet.create({
  gradientBackground: {
    flex: 0.01,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  block: {
    fontSize: 12,
    color: '#e0e0e0',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconWrap: {
    padding: 6,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // for Android
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});
