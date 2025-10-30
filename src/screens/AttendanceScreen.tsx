import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AttendanceCalendar from "../component/AttendanceCalendar";
import { COLORS } from '../constant/colors';

const AttendanceScreen = () => {
  const [search, setSearch] = useState("");
  const [selectedChip, setSelectedChip] = useState("This Week");

  const chips = ["This Week", "This Month", "Custom Range"];
  const stats = [
    { label: "Total Hours", value: "40:30" },
    { label: "Avg. Daily Hours", value: "8:06" },
    { label: "Late Days", value: "2", color: "#F5A623" },
  ];

  const logs = [
    {
      day: "Monday, Oct 23",
      checkIn: "08:55 AM",
      checkOut: "06:05 PM",
      total: "9h 10m",
      status: "On-time",
      color: "#10B981",
    },
    {
      day: "Tuesday, Oct 24",
      checkIn: "09:15 AM",
      checkOut: "06:00 PM",
      total: "8h 45m",
      status: "Late",
      color: "#F5A623",
    },
    {
      day: "Wednesday, Oct 25",
      checkIn: "--",
      checkOut: "--",
      total: "--",
      status: "Absent",
      color: "#EF4444",
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: COLORS.bgDark }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Search Bar */}
        <View
          style={[
            styles.searchContainer,
            { backgroundColor: COLORS.inputDark, borderColor: COLORS.borderDark },
          ]}
        >
          <Icon
            name="search"
            size={22}
            color={COLORS.textMuted}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search by date"
            placeholderTextColor={COLORS.textMuted}
            value={search}
            onChangeText={setSearch}
            style={[styles.searchInput, { color: COLORS.textLight }]}
          />
        </View>

        {/* Chips */}
        <View style={styles.chipRow}>
          {chips.map((chip) => (
            <TouchableOpacity
              key={chip}
              style={[
                styles.chip,
                {
                  backgroundColor:
                    selectedChip === chip ? COLORS.primary : COLORS.cardDark,
                  borderColor:
                    selectedChip === chip
                      ? COLORS.primary
                      : COLORS.borderDark,
                },
              ]}
              onPress={() => setSelectedChip(chip)}
            >
              <Text
                style={[
                  styles.chipText,
                  {
                    color:
                      selectedChip === chip
                        ? "#fff"
                        : COLORS.textMuted,
                  },
                ]}
              >
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Stats */}
        <View style={styles.statsGrid}>
          {stats.map((s) => (
            <View
              key={s.label}
              style={[
                styles.statCard,
                {
                  backgroundColor: COLORS.cardDark,
                  borderColor: COLORS.borderDark,
                },
              ]}
            >
              <Text
                style={[styles.statLabel, { color: COLORS.textMuted }]}
              >
                {s.label}
              </Text>
              <Text
                style={[
                  styles.statValue,
                  { color: s.color || COLORS.textLight },
                ]}
              >
                {s.value}
              </Text>
            </View>
          ))}
        </View>

        {/* Calendar */}
        <AttendanceCalendar />

        {/* Daily Logs */}
        <Text style={[styles.sectionTitle, { color: COLORS.textLight }]}>
          Daily Logs
        </Text>
        {logs.map((log) => (
          <View
            key={log.day}
            style={[
              styles.logCard,
              {
                backgroundColor: COLORS.cardDark,
                borderColor: COLORS.borderDark,
              },
            ]}
          >
            <View>
              <Text style={[styles.logDay, { color: COLORS.textLight }]}>
                {log.day}
              </Text>
              <Text style={[styles.logSub, { color: COLORS.textMuted }]}>
                Check-in: {log.checkIn}   Check-out: {log.checkOut}
              </Text>
            </View>
            <View style={styles.logRight}>
              <Text style={[styles.logTotal, { color: COLORS.textLight }]}>
                {log.total}
              </Text>
              <Text
                style={[styles.logStatus, { color: log.color }]}
              >
                {log.status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AttendanceScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 80 },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    height: 48,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  searchIcon: { marginRight: 4 },
  searchInput: { flex: 1, fontSize: 16 },

  chipRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  chip: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
  },
  chipText: { fontSize: 14, fontWeight: "500" },

  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  statCard: {
    flexBasis: "31%",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  statLabel: { fontWeight: "500", marginBottom: 4 },
  statValue: { fontSize: 24, fontWeight: "700" },

  sectionTitle: { marginTop: 24, fontSize: 18, fontWeight: "700" },

  logCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    marginTop: 12,
  },
  logDay: { fontWeight: "700" },
  logSub: { fontSize: 13 },
  logRight: { alignItems: "flex-end" },
  logTotal: { fontWeight: "700" },
  logStatus: { fontSize: 13, fontWeight: "500" },
});
