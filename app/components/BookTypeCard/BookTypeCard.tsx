import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Image, ImageStyle, Text, View, FlatList } from "react-native";

import styles from './style';

interface ImageData {
    uri: string;
}

interface Props {
    textShow: string;
    type: string;
}

const BookTypeCard : React.FC<Props> = ({textShow, type}) => {
    const [lstImages, setLists] = useState<ImageData[]>([]);

    useEffect(() => {
        axios.get<{data: {imgDes: string}[]}>('http://192.168.31.199:8080/get_book_by_type', {
            params: {
                type: type
            }
        })
        .then(res => {
            const data = res.data.data;
            const listImgs : ImageData[] = data.map(element => ({uri: element.imgDes}));
            setLists(listImgs);
        })
        .catch(e => {
            Alert.alert(e.message);
        })
    }, []);

    const renderImage = ({item} : {item: ImageData}) => {
        return (
            <Image source={{uri: item.uri}} style = {styles.image as ImageStyle}/>
        )
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
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