import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const attendanceData = [
  {
    id: 1,
    name: "Alia Smith",
    time: "09:05 AM - 06:15 PM",
    duration: "9h 10m",
    status: "Overtime",
    statusColor: "#9013FE",
  },
  {
    id: 2,
    name: "John Doe",
    time: "09:30 AM - 05:30 PM",
    duration: "8h 00m",
    status: "On-time",
    statusColor: "#7ED321",
  },
  {
    id: 3,
    name: "Emily Jones",
    time: "09:10 AM - 04:30 PM",
    duration: "7h 20m",
    status: "Short",
    statusColor: "#F5A623",
  },
  {
    id: 4,
    name: "Michael Brown",
    time: "--",
    duration: "--",
    status: "Absent",
    statusColor: "#D0021B",
  },
  {
    id: 5,
    name: "Jessica Wilson",
    time: "08:50 AM - 06:00 PM",
    duration: "9h 10m",
    status: "Overtime",
    statusColor: "#9013FE",
  },
];

const AttendanceLogsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#101922" barStyle="light-content" />

      {/* Header */}
      {/* <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Attendance</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View> */}

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={22} color="#aaa" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by employee name"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Date + Filter */}
      <View style={styles.dateFilterRow}>
        <View style={styles.dateRow}>
          <MaterialIcons name="calendar-today" size={20} color="#ccc" />
          <Text style={styles.dateText}>Oct 25, 2023</Text>
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="filter-list" size={20} color="#4A90E2" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Attendance List */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {attendanceData.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardLeft}>
              <Image
                source={{
                  uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhHCRBYyJ_xXCQ40sJKuVOnqmbgpUPs9bCPHbBitK2OPhCtLgdlzgyaJ4K5E6MVUqakV8QFsAMHhzkvAH39WtKSyfEMw0PLWBaC2TXGajfILgTtiO-BMpbkh9Lnk3IJP6tVIG86_ONS-ev_3zUTH6tDpCb_uX1Iz6cfbXk8BRhFcI5ZsPMfqCVZ1m365HyY51Kr66yuFwN5KJJoeyoPk1JUubc5gvv0RQTWQVb3QrBSl8Lj6GXYg_PGfmfdYyexKXm8CFzK5p-7S4",
                }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
            <View style={styles.cardRight}>
              <Text style={styles.duration}>{item.duration}</Text>
              <Text style={[styles.status, { color: item.statusColor }]}>
                {item.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AttendanceLogsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101922",
    paddingTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#101922",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1c2127",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    marginLeft: 8,
  },
  dateFilterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dateText: {
    color: "#fff",
    fontSize: 16,
  },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    color: "#4A90E2",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  scroll: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#1c2127",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  time: {
    color: "#aaa",
    fontSize: 13,
    marginTop: 2,
  },
  cardRight: {
    alignItems: "flex-end",
  },
  duration: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  status: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 2,
  },
});
