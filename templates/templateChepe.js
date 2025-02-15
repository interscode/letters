import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function TemplateChepe({bigWord, smallText}) {
    const [images, setImages] = useState({'I0': null, 'I1': null, 'I2': null});

    const pickImage = async (imageNumber) => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You need to grant access to you media');
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
    }


    return(
        <View style={stylesChepe.container}>
            <View style={stylesChepe.words_view}>
                <View style={stylesChepe.big_word_view}>
                    <Text style={stylesChepe.big_word}>{bigWord}</Text>
                </View>
                <View style={stylesChepe.small_words_view}>
                    <Text style={stylesChepe.small_text}>{smallText}</Text>
                </View>
            </View>
            <View style={stylesChepe.images_view}>
                <TouchableOpacity style={stylesChepe.image_view} onPress={() => pickImage(0)}>
                    <Image style={images['I0'] ? {width: '90%', height: '90%'} :  stylesChepe.placeholder_image} source={images['I0'] ? { uri: images['I0'] } : require('../assets/add_photo.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={stylesChepe.image_view} onPress={() => pickImage(1)}>
                    <Image style={images['I1'] ? {width: '90%', height: '90%'} :  stylesChepe.placeholder_image} source={images['I1'] ? { uri: images['I1'] } : require('../assets/add_photo.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={stylesChepe.image_view} onPress={() => pickImage(2)}>
                    <Image style={images['I2'] ? {width: '90%', height: '90%'} :  stylesChepe.placeholder_image} source={images['I2'] ? { uri: images['I2'] } : require('../assets/add_photo.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const stylesChepe = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#E4E6E1',
        flexDirection: 'row',
        flex: 1
    },
    words_view: {
        flexDirection: 'row',
        transform:[{rotate: '-90deg'}, {translateY: '12%'}, {translateX: -50}]
    },
    big_word_view: {
        marginRight: 40
    },
    big_word: {
        fontFamily: 'monospace',
        fontSize: 100,
        fontWeight: 900,
        color: '#A1272C'
    },
    small_words_view: {
        marginRight: 220,
        marginTop: 40
    },
    small_text: {
        fontFamily: 'monospace',
        lineHeight: 25,
        color: '#8D2228'
    },
    images_view: {
        flexDirection: 'column',
        marginLeft: -500,
        marginTop: 60,
        width: '100%'
    },
    image_view: {
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#b0b0b0',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '50%',
        height: '30%',
        marginBottom: 20
    },
    placeholder_image: {
        width: 50,
        height: 50
    }
});