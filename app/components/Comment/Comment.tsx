import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import styles from './style';
import { useFonts } from "expo-font";
import axios from "axios";

interface Props {
    idCmt: string;
    user: any;
    rating: number,
    timestamp: string,
    content: string,
    username: string,
    like: number
}

const Comment : React.FC<Props> = ({idCmt, user, rating, timestamp, content, username, like}) => {

    const d = new Date(timestamp);
    const [numberLike, setNumberLike] = useState(like);

    const [loadFont] = useFonts({
        'Lato-Bold': require('../../../assets/fonts/Lato-Bold.ttf')
    });

    if (!loadFont) {
        return false;
    }

    const handleClick = () => {
        setNumberLike(numberLike + 1);
        axios.post('http://192.168.34.109:8080/cmt/like_comment', {
                idCmt: idCmt,
                idUser: user.id
            })
            .then()
            .catch(err => {
                Alert.alert(err.message);
            });
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <Text style = {{color: '#173456', fontWeight: '600', fontSize: 17}}>
                    {rating === 5 ? "Rất hay" : (
                        rating === 4 ? "Hay" : (
                            rating === 3 ? "Bình thường" : (
                                rating === 2 ? "Tệ" : "Rất tệ"
                            )
                        )
                    )}
                </Text>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity 
                        onPress={handleClick}
                        style = {{paddingHorizontal: 2, paddingVertical: 2, marginRight: 4}}
                    >
                        <FontAwesomeIcon icon = {faThumbsUp} color="#7a8aa3"/>  
                    </TouchableOpacity>
                    <Text style = {{fontFamily: 'Lato-Bold', fontSize: 12}}>
                        {numberLike > 0 ? numberLike : ''}
                    </Text>
                </View>
            </View>

            <View style = {{marginBottom: 20}}>
                <Text style = {styles.author}>Bởi {username} vào {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Text>
            </View>

            <View style = {styles.rating}>
                <Text style = {{textTransform: 'uppercase', color: '#1d3251', fontWeight: '600'}}>Nội dung</Text>
                <View style = {{flexDirection: 'row', marginLeft: 16}}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <Text key = {value}
                            style={{
                                fontSize: 20,
                                marginHorizontal: 6,
                                color: rating >= value ? '#173456' : 'gray'
                            }}
                        >
                            &#9733;
                        </Text>
                    ))}
                </View>
            </View>

            <View >
                <Text style = {styles.content}
                numberOfLines={3}
                ellipsizeMode="tail">
                    {content}
                </Text>
            </View>
        </View>
    );
};

export default Comment;