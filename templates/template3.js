import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function Template3({ exported }) {
  const [images, setImages] = useState({ I0: null, I1: null, I2: null });

  const pickImage = async (imageNumber) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Denied", "You need to grant access to you media");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => ({
        ...prevImages,
        [`I${imageNumber}`]: result.assets[0].uri,
      }));
    }
  };

  const borderImages = () => {
    if (!exported) {
      return { borderStyle: "dashed", borderWidth: 2 };
    } else {
      return {};
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.words_view}>
        <View style={styles.big_word_view}>
          <TextInput placeholder="Palabra" style={styles.big_word}></TextInput>
        </View>
        <View style={styles.small_words_view}>
          <TextInput
            placeholder="Tu frase aquí..."
            style={styles.small_text}
          ></TextInput>
        </View>
      </View>
      <View style={styles.images_view}>
        <TouchableOpacity
          style={[styles.image_view, borderImages()]}
          onPress={() => pickImage(0)}
        >
          <Image
            style={
              images["I0"]
                ? { width: "90%", height: "90%" }
                : styles.placeholder_image
            }
            source={
              images["I0"]
                ? { uri: images["I0"] }
                : require("../assets/add_photo.png")
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.image_view, borderImages()]}
          onPress={() => pickImage(1)}
        >
          <Image
            style={
              images["I1"]
                ? { width: "90%", height: "90%" }
                : styles.placeholder_image
            }
            source={
              images["I1"]
                ? { uri: images["I1"] }
                : require("../assets/add_photo.png")
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.image_view, borderImages()]}
          onPress={() => pickImage(2)}
        >
          <Image
            style={
              images["I2"]
                ? { width: "90%", height: "90%" }
                : styles.placeholder_image
            }
            source={
              images["I2"]
                ? { uri: images["I2"] }
                : require("../assets/add_photo.png")
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E4E6E1",
    flexDirection: "row",
  },
  words_view: {
    flexDirection: "row",
    transform: [{ rotate: "-90deg" }],
    marginLeft: 60,
  },
  big_word_view: {
    marginRight: 10,
  },
  big_word: {
    fontFamily: "monospace",
    fontSize: 100,
    fontWeight: 900,
    color: "#A1272C",
  },
  small_words_view: {
    marginRight: 220,
    marginTop: 40,
  },
  small_text: {
    fontFamily: "monospace",
    lineHeight: 25,
    color: "#8D2228",
  },
  images_view: {
    flexDirection: "column",
    marginLeft: -530,
    marginTop: 60,
    width: "100%",
  },
  image_view: {
    borderColor: "#b0b0b0",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "50%",
    height: "30%",
    marginBottom: 20,
  },
  placeholder_image: {
    width: 50,
    height: 50,
  },
});
