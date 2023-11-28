import { Pressable, View, Image, Text, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";

import User from "../../../assets/images/team.png";
import { useState } from "react";

const Option = ({navigation}) => {
    const [isBack, setIsBack] = useState(false);
    const [fontLoaded] = useFonts({
        'Lato-Blod': require('../../../assets/fonts/Lato-Bold.ttf')
    });

    const backHome = () => {
        setIsBack(true);
        navigation.navigate('Home');
    };

    if (!fontLoaded) {
        return null;
    }

    return (
        <LinearGradient
            colors={['#33496a', '#6ea1cc', '#85c0ec']}
            style={{flex: 1}}
        >
            <View style = {styles.container}>
                <View style = {styles.btnBack}>
                    <Pressable onPress={backHome}>
                        <View style = {[styles.btn, {opacity: isBack ? 0.7 : 1}]}>
                            <Icon name = "chevron-left" style = {styles.icon}/>
                        </View>
                    </Pressable>
                </View>

                <View style = {styles.content}>
                    <View style = {styles.containerIcon}>
                        <View style = {styles.cricle}>
                            <Icon name = "users" style = {styles.iconUser}/>
                        </View>
                    </View>
                    <View>
                        <Text style = {styles.textLogin}>Đăng nhập để lưu lại quá trình</Text>
                    </View>
                    <View>
                        <Pressable style = {{marginBottom: 16, marginTop: 16}}>
                            <LinearGradient
                                colors={['#ff706f', '#ff8266', '#ffa157']}
                                style = {{borderRadius: 24}}
                            >
                                <Text style = {styles.btnLogin}>Đăng nhập</Text>
                            </LinearGradient>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable>
                            <Text style = {styles.textSignUp}>Tạo tài khoản mới</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

export default Option;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
        padding: 16
    },
    btnBack: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    btn: {
        backgroundColor: '#223651',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 9,
        paddingTop: 9,
        borderRadius: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 16,
        color: '#ffffff'
    },
    content: {
        marginTop: 140,
        backgroundColor: '#6d9cb5d6',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        borderRadius: 12,
        position: 'relative',
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            },
        })
            
    },
    containerIcon: {
        position: 'absolute',
        top: -48,
        padding: 12,
        borderRadius: 50,
        backgroundColor: '#4d739a'
    },
    cricle: {
        padding: 16,
        backgroundColor: '#99c6f0',
        borderRadius: 50
    },
    iconUser: {
        fontSize: 36,
        color: '#ffffff'
    },
    textLogin: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Lato-Blod',
        marginTop: 44
    },
    btnLogin: {
        fontFamily: 'Lato-Blod',
        fontSize: 18,
        color: '#ffffff',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 28,
        paddingLeft: 28
    },
    textSignUp: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: 'Lato-Blod'
    }
});