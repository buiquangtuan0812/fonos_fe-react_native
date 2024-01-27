import React, { useState} from "react";
import { Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import styles from './style';
import axios from "axios";

interface Props {
    closeForm: () => void;
    idUser: string | "";
    idBook: string;
}

const FormRating : React.FC<Props> = ({closeForm, idUser, idBook}) => {

    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");

    const handleRatingChange = (value : number) => {
        if (value === 1 && rating === 1) {
            setRating(0);
        } else {
            setRating(value);
        }
    }; 

    const handleComment = () => {
        axios.post('http://192.168.34.109:8080/cmt/comment_book', {
                idUser: idUser!,
                idBook: idBook!,
                rating: rating!,
                content: content!
            })
            .then(res => {
                Alert.alert(res.data.message);
            })
            .catch(err => {
                Alert.alert(err.message);
            });
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <TouchableOpacity 
                    onPress={closeForm}
                    style = {{paddingHorizontal: 4, paddingVertical: 4}}
                >
                    <FontAwesomeIcon icon = {faXmark} size={20}/>
                </TouchableOpacity>
            </View>

            <View>
                <Text style = {{fontSize: 17, textAlign: 'center', fontWeight: '600'}}>Đánh giá điểm</Text>
                <View style = {styles.containerStar}>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <TouchableOpacity 
                            onPress={() => handleRatingChange(value)} 
                            key={value} 
                        >
                            <Text
                                style={{
                                    color: rating >= value ? 'gold' : 'gray',
                                    fontSize: 20,
                                    marginHorizontal: 6
                                }}
                            >
                                &#9733;
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View style = {styles.containerInput}>
                <TextInput 
                    multiline = {true}
                    numberOfLines={6}
                    placeholder="Cảm nghĩ của bạn..."
                    onChangeText={text => setContent(text)}
                />
            </View>

            <View style = {styles.ctnButton}>
                <TouchableOpacity style = {styles.btnRating} onPress={() => handleComment()}>
                    <Text style = {{color: '#fff', fontWeight: '600'}}>Gửi đánh giá</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FormRating;