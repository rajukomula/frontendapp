import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { Button, Card } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { Video } from "expo-av";

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
    });
    if (!result.canceled && result.assets.length > 0) {
      setVideo(result.assets[0].uri);
    }
  };

  const pickPdf = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });
    if (result.type !== "cancel" && result.uri) {
      setPdf(result.uri);
    }
  };

  const uploadMedia = async () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", { uri: image, name: "image.jpg", type: "image/jpeg" });
    }
    if (video) {
      formData.append("video", { uri: video, name: "video.mp4", type: "video/mp4" });
    }
    if (pdf) {
      formData.append("pdf", { uri: pdf, name: "document.pdf", type: "application/pdf" });
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      const result = await response.json();
      alert("Upload successful: " + JSON.stringify(result));
    } catch (error) {
      alert("Upload failed: " + error.message);
    }
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

      <Button mode="contained" onPress={uploadMedia}>Upload</Button>
    </ScrollView>
  );
}
