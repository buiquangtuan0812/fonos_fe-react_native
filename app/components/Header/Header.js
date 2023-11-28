import {View, Image, Text,StyleSheet, ImageBackground, Platform, Pressable} from "react-native";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";

import ImgLogo from "../../../assets/images/logo.webp";

const Header = ({navigation}) => {
    const [fontLoaded] = useFonts({
        'Lato-Italic': require('../../../assets/fonts/Lato-Italic.ttf'),
    });

    if (!fontLoaded) {
        return null;
    }

    const handleToOption = () => {
        navigation.navigate('Option');
    }
    return (
        <View style = {styles.containerHeader}> 
            <View style = {styles.itemLeft}>
                <Image source = {ImgLogo} style = {styles.imgIcon}/>
                <Text style = {styles.text}>viebook</Text>
            </View>

            <View style = {styles.itemRight}>
                <Icon name="search" style = {styles.iconSearch}/>
                <Pressable onPress={handleToOption}>
                    <Icon name="user-circle" style = {styles.iconUser}/>
                </Pressable>
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1/12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 24,
        paddingRight: 20,
        paddingBottom: 4,
        paddingLeft: 20,
        backgroundColor: '#593d56',
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.4,
              shadowRadius: 4,
            },
        })
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgIcon: {
        width: 40,
        height: 40,
        marginRight: 12
    },
    text: {
        color: '#ffffff', 
        fontSize: 24, 
        fontFamily: 'Lato-Italic',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSearch: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    iconUser: {
        fontSize: 24,
        color: '#FFFFFF',
        marginLeft: 28
    }
});