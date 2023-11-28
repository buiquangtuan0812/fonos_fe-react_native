import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Footer = () => {
    const [fontLoaded] = useFonts({
        'Lato-Blod' : require('../../../assets/fonts/Lato-Bold.ttf'),
    });
    if (!fontLoaded) {
        return null;
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.item}>
                <Icon style = {styles.iconHome} name="home"/>
                <Text style = {styles.textHome}>Trang chủ</Text>
            </View>

            <View style = {styles.item}>
                <Icon style = {styles.icon} name = "star"/>
                <Text style = {styles.text}>Mới & Hot</Text>
            </View>

            <View style = {styles.item}>
                <Icon style = {styles.icon} name = "bookmark"/>
                <Text style = {styles.text}>Thư viện</Text>
            </View>

            <View style = {styles.item}>
                <Icon style = {styles.icon} name = "gear"/>
                <Text style = {styles.text}>Cài đặt</Text>
            </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        position: "fixed",
        backgroundColor: '#fff',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        paddindRight: 24,
        paddingLeft: 24,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#fffafa'
    },
    item : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 26,
        color: '#b1b9d1',
        marginBottom: 2,
    },
    iconHome: {
        color: '#ff7f50',
        fontSize: 26,
        marginBottom: 2
    },
    text: {
        fontSize: 14,
        color: '#b1b9d1',
        fontFamily: 'Lato-Blod'
    },
    textHome: {
        fontSize: 14,
        fontWeight: 900,
        color: '#ff7f50',
        fontFamily: 'Lato-Blod'
    }
});