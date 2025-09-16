import { Platform, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function CustomStatusBar() {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#106099', '#2181bf', '#106099']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        height:
          Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </LinearGradient>
  );
}
export default CustomStatusBar;
