import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";  // Import delete icon
import * as ImagePicker from "expo-image-picker";

export default function AvatarSelectionPage({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Updated Reliable Avatar URLs
  const cartoonAvatars = [
    "https://robohash.org/cartoon43.png?set=set4",
    "https://robohash.org/cartoon223.png?set=set4",
    "https://robohash.org/cartoon42.png?set=set4",
    "https://robohash.org/cartoon51.png?set=set4",
    "https://robohash.org/cartoon6.png?set=set4",
    "https://robohash.org/cartoon9.png?set=set4"
  ];

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Required", "Please grant media library access.");
      }
    })();
  }, []);

  // Pick Image from Gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // Remove Selected Image
  const removeImage = () => {
    setSelectedImage(null);
  };

  // Move to Next Page (Pass selected Image)
  const goToNext = () => {
    navigation.navigate("NextScreen", { userImage: selectedImage });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose an Avatar</Text>

      {/* Sample Cartoon Avatars */}
      <View style={styles.avatarContainer}>
        {cartoonAvatars.map((avatar, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(avatar)}>
            <Image source={{ uri: avatar }} style={[styles.avatar, selectedImage === avatar && styles.selectedAvatar]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Gallery Upload */}
      <Button mode="contained" onPress={pickImage} style={styles.button}>
        Pick from Gallery
      </Button>

      {/* Preview Selected Image with Delete Button */}
      {selectedImage && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: selectedImage }} style={styles.preview} />
          <TouchableOpacity style={styles.deleteButton} onPress={removeImage}>
            <MaterialIcons name="close" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <Button mode="outlined" onPress={() => navigation.navigate("NextScreen", { userImage: null })}>
          Skip
        </Button>
        <Button mode="contained" onPress={goToNext} disabled={!selectedImage}>
          Next
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  avatarContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedAvatar: {
    borderColor: "#007bff",
  },
  button: {
    width: "80%",
    marginVertical: 10,
  },
  previewContainer: {
    position: "relative",
    marginTop: 10,
  },
  preview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#007bff",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "red",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
});
