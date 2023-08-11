import { useState, useRef } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {captureRef} from "react-native-view-shot";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button/Button";
import IconButton from "../components/Button/IconButton";
import CircleButton from "../components/Button/CricleButton";
import EmojiPicker from "../components/Emoji/EmojiPicker";
import EmojiList from "../components/Emoji/EmojiList";
import EmojiSticker from "../components/Emoji/EmojiSticker";

import LoginPage from './Login/Login';
import Register from './Register/Register';

const imageSource = require('../../assets/images/background-image.png');

const Home = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [pickerEmoji, setPickerEmoji] = useState(null);

    const [status, requirestPermission] = MediaLibrary.usePermissions();

    if (status === null) {
        requirestPermission();
    }

    const imageRef = useRef();

    const pickerImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        }
        else {
            alert('You did not select an image');
        }
    }
    const onSaveImage = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 440,
                quality: 1
            });
            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                alert('Saved successfully!');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const onReset = () => {
        setShowAppOptions(false);
    };

    const onAddSticker = () => {
        setModalVisible(true);
    };
    
    const onModalClose = () => {
        setModalVisible(false);
    };

    return (
        // <GestureHandlerRootView style={styles.container}>
        //     <View style={styles.imageContainer}>
        //         <View ref = {imageRef} collapsable={false}>
        //             <ImageViewer 
        //                 imageSource = {imageSource}
        //                 selectedImage = {selectedImage}
        //             />
        //             {pickerEmoji !== null ? <EmojiSticker imageSize={40} stickerSource={pickerEmoji}/> : null}
        //         </View>
        //     </View>
        //     {showAppOptions ? (
        //         <View style = {styles.optionsContainer}>
        //             <View style = {styles.optionsRow}>
        //                 <IconButton icon = "refresh" label="Reset" onPress={onReset}/>
        //                 <CircleButton onPress = {onAddSticker}/>
        //                 <IconButton icon = "save-alt" label="Save" onPress={onSaveImage}/>
        //             </View>
        //         </View>
        //     ) : (
        //         <View style = {styles.footerContainer}>
        //             <Button label="Chose a photo" theme="primary" onPress={pickerImage}/>
        //             <Button label="Use this photo" onPress = {() => setShowAppOptions(true)}/>
        //         </View>
        //     )}
        //     <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
        //         <EmojiList onSelect={setPickerEmoji} onCloseModal={onModalClose}/>
        //     </EmojiPicker>
        //     <StatusBar style="auto" />
        // </GestureHandlerRootView>
        <Register/>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58
    },
    footerContainer: {
        flex: 1 /3,
        alignItems: 'center',
    },
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});
  