import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Image, Alert, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type Navigation = {
    navigation: StackNavigationProp<RootStackParamList>;
    user: any;
}

interface ImageData {
    uri: string;
    id: string;
}

const Propose: React.FC<Navigation> = ({navigation, user}) => {

    const [lstImages, setLists] = useState<ImageData[]>([]);

    useEffect(() => {
        axios.get<{ data: { imgDes: string, _id: string }[] }>('http://192.168.34.109:8080/get_book_propose')
            .then(res => {
                const data = res.data.data;
                const listImgs: ImageData[] = data.map(element => ({ uri: element.imgDes, id: element._id }));
                setLists(listImgs);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    }, []);

    const handleClick = (value: string) => {
        navigation.navigate("BookDetail", {idBook: value, address: "Home", user: user})
    };

    const renderImage = ({ item }: { item: ImageData }) => {
        return (
            <TouchableOpacity onPress={() => handleClick(item.id)}>
                <Image style={styles.image} source={{ uri: item.uri }} />
            </TouchableOpacity>
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
