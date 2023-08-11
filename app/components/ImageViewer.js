import { StyleSheet, Image } from "react-native";

const ImageViewer = ({imageSource, selectedImage}) => {
    return <Image source={selectedImage != null ? {uri: selectedImage} : imageSource} style={styles.image}/>
}

export default ImageViewer;

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
});
