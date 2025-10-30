import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}