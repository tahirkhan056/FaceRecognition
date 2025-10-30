import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  useColorScheme,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS } from '../constant/colors';

const FaceAttendanceScreen = () => {
  const colorScheme = useColorScheme();
  const dark = colorScheme === "dark";

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: dark ? COLORS.bgDark : "#f6f7f8" }]}
    >
      {/* Background */}
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXdcYZyx9nGMq04BcC-hrCVr62VR1is6eXUZQYRThf1PllYDzTU3x46pu59DVX0t9kQQKMHgtPZGhZu-CeIFVcbrPQJrB9IoqLwwVK-GmKTKjO8ySq4_5N2CaX26Czg-FJlrFGJisGiGuLLpyNs31QnlKCHgqvt5AaXJ0f3NpYPvBwr-L5BQNaWxPrnvBpaAooAG965XvuITsAJQz07l2wBWFvkrCJAS-QXPHbyzWwQSQBcJyzxSllHnQopx0D-9IRh8cnSreJZVg",
        }}
        resizeMode="cover"
        style={StyleSheet.absoluteFill}
      >
        <View style={styles.overlay} />

        {/* Content */}
        <View style={styles.fullScreen}>
          {/* Top Bar */}
          <View style={styles.header}>


            <View style={{ width: 48 }} />
          </View>

          {/* Spacer */}
          <View style={{ flex: 1 }} />

          {/* Face Scanner Area */}
          <View style={styles.centerContent}>
            <View style={styles.faceWrapper}>
              <View style={[styles.faceOuter, { borderColor: COLORS.primary }]} />
              <View
                style={[
                  styles.faceInner,
                  { borderColor: COLORS.primary + "80" }, // semi-transparent
                ]}
              />
            </View>

            <Text style={styles.instructionText}>
              Please position your face in the frame
            </Text>
            <Text style={styles.timeText}>10:30 AM, Monday, 20 Oct 2023</Text>
          </View>

          {/* Spacer */}
          <View style={{ flex: 1 }} />

          {/* Action Buttons */}
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: COLORS.primary }]}
              activeOpacity={0.8}
            >
              <Icon name="login" size={22} color="#fff" />
              <Text style={styles.buttonText}>Check In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: COLORS.gray700 }]}
              activeOpacity={0.8}
            >
              <Icon name="logout" size={22} color="#fff" />
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default FaceAttendanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    flex: 1,
    flexDirection: "column",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  faceWrapper: {
    position: "relative",
    width: 288, // 72 * 4
    height: 288,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
  },
  faceOuter: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 999,
    borderWidth: 4,
    borderStyle: "dashed",
  },
  faceInner: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 999,
    borderWidth: 2,
  },
  instructionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },
  timeText: {
    color: "#d1d5db",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 32,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 32,
    gap: 16,
  },
  button: {
    flex: 1,
    minHeight: 56,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
