import React, { useEffect, useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { faChevronLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { RouteProp } from "@react-navigation/native";
import { useFonts } from "expo-font";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./style";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

type Navigation = {
    navigation: StackNavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, "AuthorProfile">;
};

interface Author {
    name: string;
    birthday: string;
    introduce: string;
    image: string;
}

const Author : React.FC<Navigation> = ({navigation, route}) => {

    const props = route.params;
    const [fontLoaded] = useFonts({
        'Lato': require('../../../assets/fonts/Lato-Bold.ttf')
    });

    const [data, setData] = useState<Author>({
        name: "",
        birthday: "",
        introduce: "",
        image: ""
    });

    useEffect(() => {
        axios.get<{data: Author}>('http://192.168.34.109:8080/get_author_by_name', {
            params: {
                name: props.nameAuthor
            }
        })
            .then(response => {
                const data = response.data.data;
                const author = {
                    name: data.name,
                    birthday: data.birthday,
                    introduce: data.introduce,
                    image: data.image
                };
                setData(author);
            })
            .catch(err => {
                Alert.alert(err.message);
            })
    }, []);

    const handleBack = () => {
        navigation.navigate("BookDetail", {idBook: props.idBook});
    }

    if (!fontLoaded) {
        return null;
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.button}>
                <TouchableOpacity onPress={handleBack} style = {{padding: 4}}>
                    <FontAwesomeIcon icon = {faChevronLeft} color="#fff" size={20}/>
                </TouchableOpacity>
            </View>
            <LinearGradient 
                colors={['#2d4061', '#445c80', '#607a9e']}
            >
                <View style = {styles.content}>
                    <View>
                        {data.image ? (
                        <Image source={{ uri: data.image }} style = {styles.image}/>
                        ) : (
                            <View style = {{
                                borderRadius: 50, padding: 4,
                                backgroundColor: '#fff', width: 74, height: 74
                            }}
                        >
                            <View style = {styles.iconUser}>
                                <FontAwesomeIcon icon = {faUser} size={36} color="#67686c"/>
                            </View>
                        </View>
                        )}
                    </View>

                    <View style = {{marginTop: 52}}>
                        <Text style = {styles.name}>{data.name}</Text>
                    </View>
                </View>
            </LinearGradient>
            <ScrollView
                showsVerticalScrollIndicator = {false}
                bounces = {false}
                style = {styles.containerIntro}
            >
                <View style = {{paddingBottom: 80}}>
                    <Text style = {styles.introduce}>{data.birthday}</Text>
                    <Text style = {styles.introduce}>{data.introduce}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Author;