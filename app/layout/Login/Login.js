import { useState } from "react";
import axios from "axios";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, TextInput, Text, StyleSheet ,Image, Pressable} from "react-native";

const logo = require('../../../assets/images/logo.webp');

const LoginPage = ({navigation}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [fontLoaded] = useFonts({
        'Lato-Italic': require('../../../assets/fonts/Lato-Italic.ttf')
    });

    const handleLogin =  () => {
        axios.post('http://192.168.34.109:3000/user/login', {
            username: username,
            password: password
        })
        .then(res => {
            alert(res.data)
        })
        .catch(err => {
            alert(err.message);
        })
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style = {styles.loginContainer}>
            <View style = {styles.header}>
                <Image source={logo} style = {styles.logo}/>
                <Text style = {styles.textLogo}>VieBook</Text>
            </View>

            <View style = {styles.textHeader}>
                <Text style = {{fontSize: 24, color: '#F2F3F5'}}>Chào mừng trở lại!</Text>
                <Text style = {{fontSize: 16, color: '#808080', marginTop: 4}}>Chúng tôi rất vui mừng được gặp lại bạn!</Text>
            </View>

            <View style = {{marginVertical: 32}}>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 12}}>
                    EMAIL OR USERNAME <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <TextInput 
                    placeholder="Tên đăng nhập" 
                    style = {styles.textInput}
                    onChangeText={text => setUsername(text)}
                />
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 12}}>
                    MẬT KHẨU <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <View style = {{position: 'relative'}}>
                    <TextInput placeholder="Mật khẩu" 
                        style = {[styles.textInput, {marginBottom: 4}]} 
                        secureTextEntry = {showPassword ? false : true}
                        onChangeText={text => setPassword(text)}
                    />
                    {showPassword ? 
                        <Pressable style = {{position: 'absolute', right : 8, top: 12}} onPress={() => setShowPassword(false)}>
                            <Icon name = "eye-slash" size = {16} color='#333' />
                        </Pressable>
                        : 
                        <Pressable style = {{position: 'absolute', right : 8, top: 12}} onPress={() => setShowPassword(true)}>
                            <Icon name = "eye" size = {16} color='#333' />
                        </Pressable>
                    }
                </View>
                <Text style = {{color: "#00A8FC", fontSize: 14, fontWeight: 500}}>Quên mật khẩu?</Text>
            </View>

            <View>
                <Pressable style = {styles.buttonLogin} onPress={handleLogin}>
                    <Text style = {{color: '#fff', fontSize: 16}}>Đăng nhập</Text>
                </Pressable>
            </View>

            <View style = {styles.suggestRegister}>
                <Text style = {{color: '#949BA4', marginRight: 6, fontSize: 14}}>Bạn chưa có tài khoản?</Text>
                <Pressable onPress={handleRegister}>
                    <Text style = {{color: '#00A8FC', fontSize: 14}}>Đăng ký</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#32363b',
        // justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 28
    },
    logo: {
        width: 42,
        height: 42,
        marginRight: 8
    },  
    textLogo: {
        fontSize: 28,
        color: 'white',
        fontWeight: 600,
        fontFamily: 'Lato-Italic'
    },
    textHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        width: 320
    },
    buttonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 320,
        paddingVertical: 16,
        paddingHorizontal: 2,
        backgroundColor: '#5865F2',
        borderRadius: 4
    },
    suggestRegister: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 12
    }
});
