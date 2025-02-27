import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView, Alert } from "react-native";
import { Button, Card } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import * as DocumentPicker from "expo-document-picker";
import { Video } from "expo-av";

const UPLOAD_URL = "https://musical-train-7vrjpgwx64xj3rpv5-8080.app.github.dev/api/files/upload";

export default function MediaUploadPage() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission Required", "Please grant media library access.");
      }
    })();
  }, []);

  const compressImage = async (uri) => {
    try {
      let quality = 1.0;
      let resizedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 800 } }],
        { compress: quality, format: ImageManipulator.SaveFormat.JPEG }
      );

      let fileInfo = await fetch(resizedImage.uri);
      let fileSize = (await fileInfo.blob()).size;

      while (fileSize > 100 * 1024 && quality > 0.1) {
        quality -= 0.1;
        resizedImage = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 800 } }],
          { compress: quality, format: ImageManipulator.SaveFormat.JPEG }
        );
        fileInfo = await fetch(resizedImage.uri);
        fileSize = (await fileInfo.blob()).size;
      }

      return resizedImage.uri;
    } catch (error) {
      console.error("Image compression error:", error);
      Alert.alert("Error", "Failed to compress image.");
      return uri;
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // ✅ Corrected
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const compressedUri = await compressImage(result.assets[0].uri);
        setImage(compressedUri);
      }
    } catch (error) {
      console.error("Image picking error:", error);
      Alert.alert("Error", "Something went wrong while picking the image.");
    }
  };

  const pickVideo = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos, // ✅ Corrected
        allowsEditing: false,
      });

      if (!result.canceled && result.assets.length > 0) {
        setVideo(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Video picking error:", error);
      Alert.alert("Error", "Something went wrong while picking the video.");
    }
  };

  const pickPdf = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      if (result.type !== "cancel" && result.uri) {
        setPdf(result.uri);
      }
    } catch (error) {
      console.error("PDF picking error:", error);
      Alert.alert("Error", "Something went wrong while picking the PDF.");
    }
  };

  const uploadFile = async (fileUri, fileName, fileType) => {
    if (!fileUri) return;

    const formData = new FormData();
    formData.append("file", { uri: fileUri, name: fileName, type: fileType });

    try {
      const response = await fetch(UPLOAD_URL, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.text();
      Alert.alert("Success", `File uploaded successfully: ${result}`);
    } catch (error) {
      Alert.alert("Upload failed", error.message);
    }
  };

  const uploadAll = async () => {
    if (!image && !video && !pdf) {
      Alert.alert("No files selected", "Please select at least one file to upload.");
      return;
    }

    if (image) await uploadFile(image, "image.jpg", "image/jpeg");
    if (video) await uploadFile(video, "video.mp4", "video/mp4");
    if (pdf) await uploadFile(pdf, "document.pdf", "application/pdf");

    setImage(null);
    setVideo(null);
    setPdf(null);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card style={{ marginBottom: 15, padding: 10 }}>
        <Button mode="contained" onPress={pickImage}>Pick an Image</Button>
        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 10 }} />}
      </Card>

      <Card style={{ marginBottom: 15, padding: 10 }}>
        <Button mode="contained" onPress={pickVideo}>Pick a Video</Button>
        {video && <Video source={{ uri: video }} style={{ width: 200, height: 200, marginTop: 10 }} useNativeControls />}
      </Card>

      <Card style={{ marginBottom: 15, padding: 10 }}>
        <Button mode="contained" onPress={pickPdf}>Pick a PDF</Button>
        {pdf && <Text style={{ marginTop: 10 }}>{pdf}</Text>}
      </Card>

      <Button mode="contained" onPress={uploadAll}>Upload</Button>
    </ScrollView>
  );
}
