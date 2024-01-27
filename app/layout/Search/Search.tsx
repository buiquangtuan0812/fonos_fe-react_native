import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { 
    TextInput, TouchableOpacity,
    View, Text, Alert, VirtualizedList, Image 
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";

import styles from "./styles";
import axios from "axios";

type Props = {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, "Search">;
};

interface Books {
    idBook: string;
    uri: string;
    name: String;
}


const Search : React.FC<Props> = ({navigation, route}) => {

    const props = route.params;
    const [data, setData] = useState<Books[]>([]);
    const [key, setKey] = useState("");

    useEffect(() => {
        axios.get<
                {data: {_id: string, imgDes: string, name: string}[]}
            >
            ('http://192.168.34.109:8080/get_books')
            .then(res => {
                const books = res.data.data;
                const lstBook: Books[] = books.map(element => ({
                    idBook: element._id,
                    uri: element.imgDes,
                    name: element.name
                }));
                setData(lstBook);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    }, []); 

    const hanldeSearch = () => {
        axios.get<
                {data: {_id: string, imgDes: string, name: string}[]}
            >
            ('http://192.168.34.109:8080/get_books_by_key', {
                params: {key: key}
            })
            .then(res => {
                const books = res.data.data;
                const lstBook: Books[] = books.map(element => ({
                    idBook: element._id,
                    uri: element.imgDes,
                    name: element.name
                }));
                setData(lstBook);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    };

    const handleClickOnItem = (idBook: string) => {
        navigation.navigate("BookDetail", {idBook: idBook, address: "Search", user: props.user});
    };

    const renderItem = ({item} : {item: Books}) => {
        return (
            <TouchableOpacity onPress={() => handleClickOnItem(item.idBook)}>
                <View style = {styles.containerItem}>
                    <Image 
                        source={{uri: item.uri}} 
                        style = {{width: 62, height: 92, borderRadius: 12, marginRight: 20}}
                    />
                    <Text style = {{fontWeight: '700', maxWidth: 280, lineHeight: 20}}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleCancel = () => {
        navigation.navigate("Home", {user: props.user});
    };

    const getItemCount = () => data.length;

    const getItem = (data: Books[], index: number): Books => {
        return data[index];
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <View style = {styles.form}>
                    <TouchableOpacity onPress={hanldeSearch}>
                        <Icon 
                            name = "search" 
                            style = {{
                                fontSize: 24, color: '#fff', 
                                fontWeight: 'bold',
                                paddingHorizontal: 12,
                                marginRight: 8
                            }}
                        />
                    </TouchableOpacity>
                    <TextInput 
                        style = {styles.textInput}
                        selectionColor="#ff7f50"
                        placeholderTextColor="#e5f0fb"
                        placeholder="Tìm kiếm sách, postcard..." 
                        onChangeText={(e) => setKey(e)}
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