import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from './src/Header1/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
    </SafeAreaProvider>
  );
}
