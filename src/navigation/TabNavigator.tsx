import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FaceAttendanceScreen from '../screens/FaceAttendanceScreen';
import NewEmployeeRegistration from '../screens/NewEmployeeRegistration';
import AttendanceScreen from '../screens/AttendanceScreen';
import AttendanceLogsScreen from '../screens/AttendanceLogsScreen';
import { StyleSheet, useColorScheme } from 'react-native'

const Tab = createBottomTabNavigator();

interface IconProps {
  iconName: string;
  size?: number;
  color?: string;
}

export default function TabNavigator() {

  const colorScheme = useColorScheme();
  const dark = colorScheme === "dark";

  const colors = {
    primary: "#1173d4",
    bgDark: "#101922",
    textWhite: "#ffffff",
    gray300: "#d1d5db",
    gray700: "#374151",
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.bgDark,
          borderBottomColor: '#fff',
          borderBottomWidth: StyleSheet.hairlineWidth,
        },
        headerTintColor: colors.textWhite,
        headerTitleStyle: {
          color: colors.textWhite,
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: colors.textWhite,
        tabBarStyle: {
          backgroundColor: colors.bgDark,
          height: 60,
          borderTopColor: '#fff',
          paddingTop: 10,
          paddingBottom: 10
        },
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName: string = "circle";

          switch (route.name) {
            case "Register":
              iconName = "add-user";
              break;
            case "AddGuest":
              iconName = "login";
              break;
            case "Attendance":
              iconName = "v-card";
              break;
            case "Log":
              iconName = "news";
              break;
          }

          return <Entypo name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen
        name="Register"
        component={NewEmployeeRegistration}
        options={{ title: 'Register' }}
      />
      <Tab.Screen
        name="AddGuest"
        component={FaceAttendanceScreen}
        options={{ title: 'Check In/Out' }}
      />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="Log" component={AttendanceLogsScreen} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
