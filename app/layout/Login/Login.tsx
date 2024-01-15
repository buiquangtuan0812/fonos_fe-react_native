import { useState } from "react";
import React from "react";
import axios from "axios";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { 
    View, TextInput, Text ,Image, Alert,
    TouchableOpacity, TouchableWithoutFeedback, Keyboard,
    Modal, ActivityIndicator, Pressable, ImageBackground, ImageStyle
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

import styles from "./login.style";
import ButtonBack from "../../components/Button/ButtonBack";
import { saveCookies } from "../../utils/cookieStorage";

const logo = require('../../../assets/images/logo.webp');
const background = require('../../../assets/images/side-wave_background.png');

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Option'>;
}

const LoginPage: React.FC<Props> = ({navigation}) => {
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [fontLoaded] = useFonts({
        'Lato-Italic': require('../../../assets/fonts/Lato-Italic.ttf')
    });

    const handleLogin = async () => {
        var error = false;
        if (!username) {
            error = true;
            Alert.alert('Vui lòng nhập username')
        }
        else if (!password) {
            error = true;
            Alert.alert('Vui lòng nhập password')
        }
        else {
            setIsLoading(true);
            setTimeout(async () => {
                axios.post('http://192.168.34.109:8080/login', {
                    username: username!,
                    password: password!
                })
                    .then(res => {
                        if (res.data.statusCode === 200) {
                            setIsLoading(false);
                            navigation.navigate("Home", {id: res.data.id});
                        }
                        else {
                            Alert.alert(res.data.statusCode + ': ' + res.data.message);
                            setIsLoading(false);
                        }
                    })
                    .catch(err => {
                        Alert.alert(err.message);
                        setIsLoading(false);
                    })
                }, 1000);
            const cookies = [`username=${username}`, `password=${password}`];
            await saveCookies(cookies);
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    const handleTouchOutside = () => {
        Keyboard.dismiss();
    }
    if (!fontLoaded) {
        return null;
    }

    return (
        <ImageBackground 
            source={background}
            style = {{flex: 1}}
        >
            <TouchableWithoutFeedback onPress={handleTouchOutside}>
                <View style = {styles.loginContainer}>
                    <Modal
                        visible = {isLoading}
                        animationType = 'slide'
                        transparent
                    >
                        <View style = {styles.containerLoading}>
                            <ActivityIndicator size="large"/>
                        </View>
                    </Modal>
                    <ButtonBack address="Option" navigation={navigation}/>
                    <View style = {styles.header}>
                        <Image source={logo} style = {styles.logo as ImageStyle}/>
                        <Text style = {styles.textLogo}>VieBook</Text>
                    </View>

                    <View style = {styles.textHeader}>
                        <Text style = {{fontSize: 24, color: '#404040'}}>Chào mừng trở lại!</Text>
                        <Text style = {{fontSize: 16, color: '#505050', marginTop: 4}}>Chúng tôi rất vui mừng được gặp lại bạn!</Text>
                    </View>

                    <View style = {{marginVertical: 32}}>
                        <Text style = {{color: '#404040', fontSize: 12, fontWeight: '600', marginBottom: 12}}>
                            USERNAME <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                        </Text>
                            <TextInput 
                                placeholder="Tên đăng nhập" 
                                style = {styles.textInput}
                                onChangeText={text => setUsername(text)}
                            />
                        <Text style = {{color: '#404040', fontSize: 12, fontWeight: '600', marginBottom: 12}}>
                            MẬT KHẨU <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                        </Text>
                        <View style = {{position: 'relative'}}>
                            <TextInput placeholder="Mật khẩu" 
                                style = {[styles.textInput, {marginBottom: 4}]} 
                                secureTextEntry = {showPassword ? false : true}
                                onChangeText={text => setPassword(text)}
                            />
                            {showPassword ? 
                                <TouchableOpacity style = {{position: 'absolute', right : 8, top: 12}} onPress={() => setShowPassword(false)}>
                                    <Icon name = "eye-slash" size = {16} color='#333' />
                                </TouchableOpacity>
                                : 
                                <TouchableOpacity style = {{position: 'absolute', right : 8, top: 12}} onPress={() => setShowPassword(true)}>
                                    <Icon name = "eye" size = {16} color='#333' />
                                </TouchableOpacity>
                            }
                        </View>
                        <Text style = {{color: "#00A8FC", fontSize: 14, fontWeight: '500', marginTop: 8}}>Quên mật khẩu?</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={handleLogin}>
                            <LinearGradient
                                colors={['#ff706f', '#ff8266', '#ffa157']}
                                style = {styles.buttonLogin}
                            >
                                <Text style = {{color: '#fff', fontSize: 18}}>Đăng nhập</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style = {styles.suggestRegister}>
                        <Text style = {{color: '#808080', marginRight: 6, fontSize: 14}}>Bạn chưa có tài khoản?</Text>
                        <Pressable onPress={handleRegister}>
                            <Text style = {{color: '#00A8FC', fontSize: 14}}>Đăng ký</Text>
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    );
};

export default LoginPage;