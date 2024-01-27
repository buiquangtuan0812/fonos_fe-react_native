import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Image, ImageStyle, Text, View, FlatList, TouchableOpacity } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import styles from './style';

type Navigation = {
    navigation: StackNavigationProp<RootStackParamList>;
}

interface ImageData {
    uri: string;
    idBook: string
}

interface Props {
    textShow: string;
    type: string;
    user: any;
}

const BookTypeCard : React.FC<Props & Navigation> = ({textShow, type, navigation, user}) => {
    const [lstImages, setLists] = useState<ImageData[]>([]);

    useEffect(() => {
        axios.get<{data: {imgDes: string, _id: string}[]}>('http://192.168.34.109:8080/get_book_by_type', {
            params: {
                type: type
            }
        })
        .then(res => {
            const data = res.data.data;
            const listImgs : ImageData[] = data.map(element => ({
                uri: element.imgDes,
                idBook: element._id
            }));
            setLists(listImgs);
        })
        .catch(e => {
            Alert.alert(e.message);
        })
    }, []);

    const handleClick = (value: string) => {
        navigation.navigate("BookDetail", {idBook: value, address: "Home", user: user})
    }

    const renderImage = ({item} : {item: ImageData}) => {
        return (
            <TouchableOpacity onPress={() => handleClick(item.idBook)}>
                <Image source={{uri: item.uri}} style = {styles.image as ImageStyle}/>
            </TouchableOpacity>
        )
    };

    return (
        <View style = {styles.container}>
            <View>
                <Text style = {styles.textHeader}>Đầu sách thuộc chủ đề</Text>
                <Text style = {styles.textType}>{textShow}</Text>
            </View>

            <View style = {styles.containerImage}>
                <FlatList
                    data = {lstImages}
                    renderItem = {renderImage}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                />
            </View>
        </View>
    );
};

export default BookTypeCard;