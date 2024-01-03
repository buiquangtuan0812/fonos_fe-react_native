import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Image, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface ImageData {
    uri: string;
}

const Propose: React.FC = () => {

    const [lstImages, setLists] = useState<ImageData[]>([]);

    useEffect(() => {
        axios.get<{ data: { imgDes: string }[] }>('http://192.168.31.199:8080/get_book_propose')
            .then(res => {
                const data = res.data.data;
                const listImgs: ImageData[] = data.map(element => ({ uri: element.imgDes }));
                setLists(listImgs);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    }, []);

    const renderImage = ({ item }: { item: ImageData }) => {
        return (
            <Image style={styles.image} source={{ uri: item.uri }} />
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                loop={true}
                firstItem={1}
                itemWidth={220}
                data={lstImages}
                sliderWidth={400}
                layout={"default"}
                renderItem={renderImage}
                inactiveSlideScale={0.77}
                inactiveSlideOpacity={0.75}
                containerCustomStyle={{ overflow: 'visible' }}
            />
        </View>
    );
};

export default Propose;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 80
    },
    image: {
        width: 220,
        height: 320,
        borderRadius: 16,
        overflow: "hidden"
    }
});
