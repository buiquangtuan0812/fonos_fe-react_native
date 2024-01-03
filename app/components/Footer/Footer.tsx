import { useFonts } from "expo-font";
import {Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./footer.style";
import { SetStateAction, useState } from "react";

interface FooterItem {
    index: number;
    iconName: string;
    text: string;
    color: string;
}

const FooterItemComponent : React.FC<FooterItem & {onPress: () => void}> = (
    {
        index,
        iconName,
        text,
        color,
        onPress,
    }
) => (
    <TouchableOpacity onPress={onPress}>
        <View style = {styles.item}>
            <Icon style = {{fontSize: 26, color: color, marginBottom: 2}} name = {iconName}/>
            <Text style = {styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
)

const Footer : React.FC = () => {
    const [fontLoaded] = useFonts({
        'Lato-Blod' : require('../../../assets/fonts/Lato-Bold.ttf'),
    });

    const [index, setIndex] = useState(1);

    const items: FooterItem[] = [
        { index: 1, iconName: "home", text: "Trang chủ", color: "#b1b9d1" },
        { index: 2, iconName: "star", text: "Mới & Hot", color: "#b1b9d1" },
        { index: 3, iconName: "bookmark", text: "Thư viện", color: "#b1b9d1" },
        { index: 4, iconName: "gear", text: "Cài đặt", color: "#b1b9d1" },
    ];

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
                key={item.index}
                {...item}
                onPress={() => onClick(item.index)}
            />
        ))}
      </View>
    );
};

export default Footer;