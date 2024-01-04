import {View, Image, Text, TouchableOpacity} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

import styles from "./header.style";
const ImgLogo = require("../../../assets/images/logo.webp");

type HeaderProps = {
    navigation: StackNavigationProp<RootStackParamList>;
}

const Header: React.FC<HeaderProps> = ({navigation}) => {
    const [fontLoaded] = useFonts({
        'Lato-Italic': require('../../../assets/fonts/Lato-Italic.ttf'),
    });

    if (!fontLoaded) {
        return null;
    };

    const handleToOption = () => {
        navigation.navigate('Option');
    };

    const handleToSearch = () => {
        navigation.navigate('Search');
    }

    return (
        <View style = {styles.containerHeader}> 
            <View style = {styles.itemLeft}>
                <Image source = {ImgLogo} style = {styles.imgIcon}/>
                <Text style = {styles.text}>viebook</Text>
            </View>

            <View style = {styles.itemRight}>
                <TouchableOpacity onPress={handleToSearch}>
                    <Icon name="search" style = {styles.iconSearch}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleToOption}>
                    <Icon name="user-circle" style = {styles.iconUser}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;