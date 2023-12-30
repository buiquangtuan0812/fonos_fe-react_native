import { useFonts } from "expo-font";
import {Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./footer.style";

const Footer : React.FC = () => {
    const [fontLoaded] = useFonts({
        'Lato-Blod' : require('../../../assets/fonts/Lato-Bold.ttf'),
    });
    if (!fontLoaded) {
        return null;
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.item}>
                <Icon style = {{fontSize: 26, color: '#ff7f50', marginBottom: 2}} name="home"/>
                <Text style = {styles.textHome}>Trang chủ</Text>
            </View>

            <View style = {styles.item}>
                <Icon style = {{fontSize: 26, color: '#b1b9d1', marginBottom: 2}} name = "star"/>
                <Text style = {styles.text}>Mới & Hot</Text>
            </View>

            <View style = {styles.item}>
                <Icon style = {{fontSize: 26, color: '#b1b9d1', marginBottom: 2}} name = "bookmark"/>
                <Text style = {styles.text}>Thư viện</Text>
            </View>

            <View style = {styles.item}>
                <Icon style = {{fontSize: 26, color: '#b1b9d1', marginBottom: 2}} name = "gear"/>
                <Text style = {styles.text}>Cài đặt</Text>
            </View>
        </View>
    );
};

export default Footer;