import {View, Image, Text, TouchableOpacity} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";
import { faA, faUser } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const ImgLogo = require("../../../assets/images/logo.webp");

type HeaderProps = {
    navigation: StackNavigationProp<RootStackParamList>;
    user: any;
}

const Header: React.FC<HeaderProps> = ({navigation, user}) => {
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
        navigation.navigate('Search', {idUser: user.id});
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
                    {user.image !== "" 
                    ? 
                    <View 
                        style = {{padding: 6, backgroundColor: '#eee', 
                        borderRadius: 50, marginLeft: 20}}
                    >
                        <FontAwesomeIcon icon = {faA} size={14} color="#593d56"/>
                    </View>
                    :
                    <View 
                        style = {{padding: 6, backgroundColor: '#ccc', 
                        borderRadius: 50, marginLeft: 20}}
                    >
                        <FontAwesomeIcon icon = {faUser} size={14} color="#593d56"/>
                    </View>
                }
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Header;