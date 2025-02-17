import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";

export default function Template1() {
  const [loaded, error] = useFonts({
    LaBelleAurore: require("../assets/fonts/LaBelleAurore-Regular.ttf"),
  });
  const [image, setImage] = useState(null);

  if (!loaded && !error) {
    return null;
  }

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permiso denegado",
        "Necesitas permitir el acceso a la galería para seleccionar una imagen."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Tu texto aquí"
      />
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Seleccionar imagen</Text>
        </TouchableOpacity>
        {image && (
          <>
            <Pressable
              style={{ position: "absolute", top: 0, left: 0 }}
              onLongPress={pickImage}
            >
              <Image source={{ uri: image }} style={styles.image} />
            </Pressable>
          </>
        )}
        <TextInput
          style={styles.helperText}
          placeholder="Introduce tu mensaje..."
        />
      </View>
      <View style={styles.heartContainer}>
        <Image
          source={require("../assets/pics/red heart.png")}
          style={styles.heartImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8FF",
    paddingHorizontal: 20,
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 36,
    color: "#8D0000",
    fontFamily: "LaBelleAurore",
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 250,
  },
  button: {
    backgroundColor: "#8D0000",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  image: {
    width: 210,
    height: 270,
    borderRadius: 5,
  },
  heartContainer: {
    marginTop: -40,
    paddingLeft: 200,
  },
  heartImage: {
    width: 110,
    height: 100,
    fontSize: 20,
  },
  helperText: {
    fontSize: 20,
    fontFamily: "LaBelleAurore",
    zIndex: 10,
    position: "absolute",
    bottom: -110,
    textAlign: "center",
  },
});
