import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";


interface attendanceDataType {
  [date: string]: "present" | "late" | "absent" | "holiday";
}

const AttendanceCalendar = () => {
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    // Example dynamic data (you can fetch this from an API)
    const attendanceData: attendanceDataType = {
      "2025-10-02": "present",
      "2025-10-03": "present",
      "2025-10-04": "late",
      "2025-10-05": "holiday",
      "2025-10-09": "absent",
      "2025-10-10": "absent",
      "2025-10-11": "present",
      "2025-10-12": "present",
      "2025-10-13": "late",
      "2025-10-16": "present",
      "2025-10-17": "present",
      "2025-10-18": "present",
      "2025-10-19": "present",
      "2025-10-20": "present",
    };

    const marked: any = {};
    Object.keys(attendanceData).forEach((date: string) => {
      const status = attendanceData[date];
      marked[date] = {
        customStyles: {
          container: {
            backgroundColor:
              status === "present"
                ? "#4CAF50"
                : status === "late"
                  ? "#8B6B2E"
                  : status === "absent"
                    ? "#B91C1C"
                    : "#374151", // Holiday/Weekend
            borderRadius: 20,
          },
          text: { color: "white" },
        },
      };
    });

    setMarkedDates(marked);
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#111827",
        borderRadius: 16,
        padding: 10,
        margin: 16,
      }}
    >
      <Calendar
        theme={{
          calendarBackground: "#111827",
          monthTextColor: "#E5E7EB",
          dayTextColor: "#D1D5DB",
          arrowColor: "#E5E7EB",
          textMonthFontWeight: "bold",
          textDayFontSize: 16,
        }}
        markingType="custom"
        markedDates={markedDates}
      />

      {/* Legend */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
        }}
      >
        <Legend color="#4CAF50" label="Present" />
        <Legend color="#8B6B2E" label="Late" />
        <Legend color="#B91C1C" label="Absent" />
        <Legend color="#374151" label="Holiday/Weekend" />
      </View>
    </View>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
    <View
      style={{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: color,
      }}
    />
    <Text style={{ color: "#D1D5DB", fontSize: 12 }}>{label}</Text>
  </View>
);

export default AttendanceCalendar;
