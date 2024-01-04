import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput, TouchableOpacity, View, Text, FlatList, ScrollView, Alert, SectionList, VirtualizedList, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

import styles from "./styles";
import axios from "axios";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

interface Books {
    uri: string;
    name: String;
}

const Search : React.FC<Props> = ({navigation}) => {

    const [data, setData] = useState<Books[]>([]);

    useEffect(() => {
        axios.get<{data: {imgDes: string, name: string}[]}>('http://192.168.31.199:8080/get_books')
            .then(res => {
                const books = res.data.data;
                const lstBook: Books[] = books.map(element => ({
                    uri: element.imgDes,
                    name: element.name
                }));
                setData(lstBook);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    }, []); 

    const renderItem = ({item} : {item: Books}) => {
        return (
            <View style = {styles.containerItem}>
                <Image 
                    source={{uri: item.uri}} 
                    style = {{width: 62, height: 92, borderRadius: 12, marginRight: 20}}
                />
                <Text style = {{fontWeight: '700', maxWidth: 280, lineHeight: 20}}>{item.name}</Text>
            </View>
        )
    }

    const handleCancel = () => {
        navigation.navigate("Home", {id: null});
    };

    const getItemCount = () => data.length;

    const getItem = (data: Books[], index: number): Books => {
        return data[index];
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <View style = {styles.form}>
                    <Icon 
                        name = "search" 
                        style = {{
                            fontSize: 24, color: '#fff', 
                            fontWeight: 'bold',
                            paddingHorizontal: 12,
                            marginRight: 8
                        }}
                    />
                    <TextInput 
                        style = {styles.textInput}
                        selectionColor="#ff7f50"
                        placeholderTextColor="#e5f0fb"
                        placeholder="Tìm kiếm sách, postcard..." 
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={handleCancel}>
                        <Text style = {{color: 'white', fontWeight: '600'}}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <VirtualizedList
                style = {styles.body}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                getItemCount={getItemCount}
                getItem={getItem}
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent={
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#172a4c', marginVertical: 18 }}>Có thể bạn thích</Text>
                }
            />
        </View>
    )
};

export default Search;