import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faLink, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faFacebookMessenger, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import styles from "./style";
import { useFonts } from "expo-font";

interface Item {
    icon: any;
    title: string;
}

const Form : React.FC<{closeForm: () => void}> = ({closeForm}) => {

    const [font] = useFonts({
        'Lato': require('../../../assets/fonts/Lato-Black.ttf'),
        'Lato-Bold': require('../../../assets/fonts/Lato-Bold.ttf')
    });

    const items : Item[] = [
        {icon: faFacebook, title: "Chia sẻ Facebook"},
        {icon: faFacebookMessenger, title: "Chia sẻ qua Message"},
        {icon: faSquareInstagram, title: "Chia sẻ lên Instagram"},
        {icon: faComment, title: "Qua tin nhắn điện thoại"},
        {icon: faLink, title: "Sao chép liên kết"},
        {icon: faEllipsis, title: "Thêm lựa chọn"},
    ];

    const renderItem = items.map((value, index) => {
        return (
            <TouchableOpacity key={index} style = {styles.containerItem}>
                <View  style = {styles.containerIcon}>
                    <FontAwesomeIcon icon = {value.icon} />
                </View>
                <Text style = {{color: '#173351', marginLeft: 12}}>{value.title}</Text>
            </TouchableOpacity>
        )
    });

    if (!font) {
        return null;
    }

    return (
        <View style = {styles.containerForm}>
            <View style = {styles.header}>
                <Text style = {{fontSize: 18, color: '#173351', fontFamily: 'Lato-Bold'}}>Chia sẻ</Text>
                
                <TouchableOpacity style = {styles.containerIcon} onPress={closeForm}>
                    <FontAwesomeIcon icon = {faXmark} size={17}/>
                </TouchableOpacity>
            </View>

            <View>
                {renderItem}
            </View>
        </View>
    )
};

export default Form;