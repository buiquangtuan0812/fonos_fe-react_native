import { useFonts } from "expo-font";
import {Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./footer.style";
import { SetStateAction, useState } from "react";

interface FooterItem {
    indexValue: number;
    iconName: string;
    text: string;
    color: string;
}

const FooterItemComponent : React.FC<FooterItem & {isClicked: boolean} & {onPress: () => void}> = (
    {
        indexValue,
        iconName,
        text,
        color,
        isClicked,
        onPress
    }
) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style = {styles.item}>
                {isClicked ? 
                    <Icon style = {{fontSize: 26, color: '#ff7f50', marginBottom: 2}} name = {iconName}/>
                    :
                    <Icon style = {{fontSize: 26, color: color, marginBottom: 2}} name = {iconName}/>
                }
                {
                    isClicked ?
                    <Text style = {styles.textClicked}>{text}</Text>
                    :
                    <Text style = {styles.text}>{text}</Text>
                }
            </View>
        </TouchableOpacity>
    )
}

const Footer : React.FC = () => {
    const [fontLoaded] = useFonts({
        'Lato-Blod' : require('../../../assets/fonts/Lato-Bold.ttf'),
    });

    const items: FooterItem[] = [
        { indexValue: 1, iconName: "home", text: "Trang chủ", color: "#b1b9d1" },
        { indexValue: 2, iconName: "star", text: "Mới & Hot", color: "#b1b9d1" },
        { indexValue: 3, iconName: "bookmark", text: "Thư viện", color: "#b1b9d1" },
        { indexValue: 4, iconName: "gear", text: "Cài đặt", color: "#b1b9d1" },
    ];

    const [index, setIndex] = useState(1);

    const onClick = (value: SetStateAction<number>) => {
        setIndex(value);
    }

    if (!fontLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
        {items.map((item) => (
            <FooterItemComponent
                key={item.indexValue}
                {...item}
                isClicked  = {index === item.indexValue ? true : false}
                onPress = {() => onClick(item.indexValue)}
            />
        ))}
      </View>
    );
};

export default Footer;