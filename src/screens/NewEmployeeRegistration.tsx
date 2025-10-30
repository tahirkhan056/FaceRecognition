import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
  useColorScheme,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { launchCamera, Asset, ImagePickerResponse } from 'react-native-image-picker';
import { COLORS } from '../constant/colors';

const NewEmployeeRegistration = () => {
  const colorScheme = useColorScheme();
  const dark = colorScheme === "dark";

  const [fullName, setFullName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [photo, setPhoto] = useState<Asset | null>(null);

  const handleCapturePhoto = () => {
    launchCamera({ mediaType: 'photo', saveToPhotos: true }, (response: ImagePickerResponse) => {
      if (!response.didCancel && !response.errorCode && response.assets && response.assets.length > 0 && response.assets[0]) {
        setPhoto(response.assets[0]);
      }
    });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: COLORS.bgDark }]}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        {/* <View style={styles.header}>
          <Text style={[styles.title, { color: dark ? "#fff" : COLORS.neutral }]}>
            New Employee Registration
          </Text>

          <View style={{ width: 48 }} />
        </View> */}

        {/* Description */}
        <View style={styles.section}>
          <Text style={[styles.description, { color: dark ? "#D1D5DB" : COLORS.neutral }]}>
            Please enter your details and take a clear photo of your face.
          </Text>
        </View>

        {/* Full Name */}
        <View style={styles.section}>
          <Text style={[styles.label, { color: dark ? "#fff" : COLORS.neutral }]}>Full Name</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: dark ? COLORS.inputDark : "#fff",
                color: dark ? "#fff" : COLORS.neutral,
                borderColor: dark ? COLORS.borderDark : COLORS.borderLight,
              },
            ]}
            placeholder="Enter your full name"
            placeholderTextColor={dark ? "#9dabb9" : "#9ca3af"}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Employee ID */}
        <View style={styles.section}>
          <Text style={[styles.label, { color: dark ? "#fff" : COLORS.neutral }]}>Employee ID</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: dark ? COLORS.inputDark : "#fff",
                color: dark ? "#fff" : COLORS.neutral,
                borderColor: dark ? COLORS.borderDark : COLORS.borderLight,
              },
            ]}
            placeholder="Enter your employee ID"
            placeholderTextColor={dark ? "#9dabb9" : "#9ca3af"}
            value={employeeId}
            onChangeText={setEmployeeId}
          />
        </View>

        {/* Face Capture */}
        <View style={styles.section}>
          <Text style={[styles.label, { color: dark ? "#fff" : COLORS.neutral }]}>Face Capture</Text>

          {!photo && (<View
            style={[
              styles.cameraContainer,
              { backgroundColor: dark ? COLORS.inputDark : "#e5e7eb" },
            ]}
          >
            <ImageBackground
              source={{
                uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKHiqoniWyoKWMYHToQEPsUPLCbs6CJp84-gyf4rrOPTM7u9psSacXEAp0X7IaQ6ra5392NeG7s0ETK8gvkTDI5OaQR_lABVOxEt2CFMmo4ux68QNxV640vlbwSfM9mXYDDupz5CCLvXk5ioILjLZUdO6REPYYyV6XRZJJxvHxLYm3d_40uFVhhJWunhHQkRGf59PCxUR7MRCmAsuU_v6K5HR1dvfJBH2vUEQFj93azgh7e-lkYhIg-c_uBbaOETag51I6aZ9-bYw",
              }}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
              imageStyle={{ opacity: 0.2 }}
            />

            <View style={styles.faceFrame} />
            <Text style={styles.cameraText}>
              Position your face within the frame and look directly at the camera.
            </Text>
          </View>)}
          {photo && photo.uri && (
            <View style={{ marginVertical: 10, alignItems: 'center' }}>
              <Text>Photo Preview:</Text>
              <Image
                source={{ uri: photo.uri }}
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 8,
                  marginTop: 8,
                }}
                resizeMode="cover"
              />
            </View>
          )}
        </View>

        {/* Capture Photo Button */}
        <View style={styles.section}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.primary }]}
            activeOpacity={0.8}
            onPress={handleCapturePhoto}
          >
            <Icon name="photo-camera" size={22} color="#fff" />
            <Text style={styles.buttonText}>Capture Photo</Text>
          </TouchableOpacity>
        </View>

        {/* Register Button */}
        <View style={[styles.section, { paddingTop: 30 }]}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: COLORS.success }]}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <Text style={[styles.termsText, { color: dark ? "#9ca3af" : "#9ca3af" }]}>
            By registering, you agree to our{" "}
            <Text style={[styles.link, { color: COLORS.primary }]}>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewEmployeeRegistration;

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
    paddingBottom: 8,
    justifyContent: "space-between",
  },
  iconButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 56,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  cameraContainer: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  faceFrame: {
    position: "absolute",
    width: "66%",
    height: "85%",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "rgba(255,255,255,0.5)",
    borderRadius: 12,
  },
  cameraText: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    paddingHorizontal: 32,
    zIndex: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
  termsText: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 12,
  },
  link: {
    textDecorationLine: "underline",
  },
});
