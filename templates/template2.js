import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";

export default function Template2() {
  const [loaded, error] = useFonts({
    "great-vibes": require("../assets/fonts/GreatVibes-Regular.ttf"),
    "Cormorant Garamond Regular": require("../assets/fonts/CormorantGaramond-Regular.ttf"),
  });
  const [images, setImages] = useState({ I0: null, I1: null, I2: null });

  if (!loaded && !error) {
    return null;
  }

  const pickImage = async (imageNumber) => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
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

  return (
    <ImageBackground
      source={require("../assets/fondo.jpg")}
      style={styles.container}
    >
      <TouchableOpacity style={styles.image1} onPress={() => pickImage(0)}>
        <Image
          style={images["I0"] ? styles.foto1 : styles.foto1}
          source={
            images["I0"]
              ? { uri: images["I0"] }
              : require("../assets/add_photo.png")
          }
        />
      </TouchableOpacity>
      <View style={styles.text}>
        <TextInput
          placeholder="Introduce tu texto aquí..."
          style={styles.textContent}
          multiline={true}
          textAlignVertical="center"
          maxLength={20}
        />

        <TextInput placeholder="fecha" style={styles.textContent2} maxLength={5}></TextInput>
      </View>
      <TouchableOpacity style={styles.image2} onPress={() => pickImage(1)}>
        <Image
          style={images["I1"] ? styles.foto2 : styles.foto2}
          source={
            images["I1"]
              ? { uri: images["I1"] }
              : require("../assets/add_photo.png")
          }
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.image3} onPress={() => pickImage(2)}>
        <Image
          style={images["I2"] ? styles.foto3 : styles.foto3}
          source={
            images["I2"]
              ? { uri: images["I2"] }
              : require("../assets/add_photo.png")
          }
        />
      </TouchableOpacity>
      <View style={styles.text2}>
        <TextInput style={styles.textEdit} placeholder="Frase" maxLength={15} ></TextInput>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  image1: {
    height: 170,
    width: 170,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 10,
  },
  foto1: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  text: {
    height: 200,
    width: 160,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textContent: {
    fontFamily: "great-vibes",
    fontSize: 30,
    color: "#BC0037",
    textAlign: "center",
    textAlignVertical: "center", 
    width: '100%',
    height: 100, 
    marginLeft: 10,
    marginRight: 10,
  },
  textContent2: {
    fontFamily: "great-vibes",
    fontSize: 30,
    color: "#BC0037",
    textAlign: "center",
    textAlignVertical: "center", 
    width: '100%',
    height: 54, 
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    padding: 10,
  },
  
  image2: {
    height: 340,
    width: 180,
    backgroundColor: "#FFFBFB",
    marginTop: -360,
    marginLeft: 155,
    borderRadius: 2,
    alignItems: "center",
  },
  foto2: {
    height: "80%",
    width: "90%",
    borderRadius: 2,
    marginTop: 10,
    resizeMode: "cover",
  },
  image3: {
    height: 170,
    width: 190,
    marginTop: 30,
    marginLeft: -10,
    transform: [{ rotate: "-20deg" }],
    borderRadius: 10,
  },
  foto3: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  text2: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -320,
    marginLeft: 180,
  },
  textEdit: {
    fontFamily: "Cormorant Garamond Regular",
    fontSize: 20,
    color: "#BC0037",
    textAlign: "center",
    marginLeft: -50,
    marginTop: 150,
    width: 150,
    height: 100,
  },
});
