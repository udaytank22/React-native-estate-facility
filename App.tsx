/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './src/Navigation/Stack';
import { StatusBar } from 'react-native';

function App() {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle="dark-content"
      />
      <Stack />
    </>
  );
}

export default App;
