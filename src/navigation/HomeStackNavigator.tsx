import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewEmployeeRegistration from '../screens/NewEmployeeRegistration';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={NewEmployeeRegistration}
        options={{ title: 'New Employee Registration', headerTitleAlign: 'center' }}
      />
      {/* <Stack.Screen
        name="GuestEntryRequestScreen"
        component={GuestEntryRequestScreen}
        options={{ title: 'Guest Entry' }}
      />
      <Stack.Screen
        name="ReviewGuestEntry"
        component={ReviewGuestEntry}
        options={{ title: 'Review Guest' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: 'Details' }}
      /> */}
    </Stack.Navigator>
  );
}
