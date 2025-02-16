import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import * as ImagePicker from 'expo-image-picker';

export default function TemplateGael({ texts }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [images, setImages] = useState({'I0': null, 'I1': null, 'I2': null});

    const pickImage = async (imageNumber) => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });
      
        if (!result.canceled) {
            setImages((prevImages) => ({ ...prevImages, [`I${imageNumber}`]: result.assets[0].uri }));
        }
    };

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'great-vibes': require('../assets/fonts/GreatVibes-Regular.ttf'),
        'Cormorant Garamond Regular': require('../assets/fonts/CormorantGaramond-Regular.ttf'),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error('Error loading fonts:', error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground 
      source={require('../assets/fondo.jpg')}
      style={styles.container}
    >
    
      <TouchableOpacity style={styles.image1} onPress={() => pickImage(0)}>
            <Image style={images['I0'] ? styles.foto1 :  styles.foto1} source={images['I0'] ? { uri: images['I0'] } : require('../assets/foto1.jpg')}/>
        </TouchableOpacity>
      <View style={styles.text}>
        <Text style={styles.textContent}>
            {texts[0]}
        </Text>
        <Text style={styles.textContent}>
          {texts[1]}
        </Text>
      </View>
      <TouchableOpacity style={styles.image2} onPress={() => pickImage(1)}>
        <Image style={images['I1'] ? styles.foto2:  styles.foto2} source={images['I1'] ? { uri: images['I1'] } : require('../assets/foto2.jpg')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.image3} onPress={() => pickImage(2)}>
        <Image style={images['I2'] ? styles.foto3:  styles.foto3} source={images['I2'] ? { uri: images['I2'] } : require('../assets/foto3.jpg')}/>
      </TouchableOpacity>
      <View style={styles.text2}>
        <Text style={styles.textEdit}>
          {texts[2]}
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  image1: {
    height: 230,
    width: 230,
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 10,
  },
  foto1: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  text: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  textContent: {
    fontFamily: 'great-vibes',
    fontSize: 34,
    color: '#BC0037',
    textAlign: 'center',
    marginRight:8
  },
  image2: {
    height: 370,
    width: 190,
    backgroundColor: '#FFFBFB',
    marginTop: -440,
    marginLeft: 190,
    borderRadius: 2,
    alignItems: 'center',
  },
  foto2: {
    height: '80%',
    width: '90%',
    borderRadius: 2,
    marginTop: 10,
    resizeMode: 'cover',
  },
  image3: {
    height: 230,
    width: 230,
    marginTop: 100,
    marginLeft: -20,
    transform: [{ rotate: '-19deg' }],
    borderRadius: 10,
  },
  foto3: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  text2: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -320,
    marginLeft: 180,
  },
  textEdit: {
    fontFamily: 'Cormorant Garamond Regular',
    fontSize: 20,
    color: '#BC0037',
    textAlign: 'center',
    marginLeft: 30,
  },
});
