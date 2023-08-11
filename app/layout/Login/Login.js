import { View, TextInput, Text, StatusBar, StyleSheet, Image, Pressable} from "react-native";

const logo = require('../../../assets/images/discord-logo-png-7622.png');

const LoginPage = () => {
    return (
        <View style = {styles.loginContainer}>
            <View style = {styles.header}>
                <Image source={logo} style = {styles.logo}/>
                <Text style = {styles.textLogo}>Discord</Text>
            </View>

            <View style = {styles.textHeader}>
                <Text style = {{fontSize: 24, color: '#F2F3F5', marginBottom: 8}}>Welcome back!</Text>
                <Text style = {{fontSize: 16, color: '#808080'}}>We're so excited to see you again!</Text>
            </View>

            <View style = {{marginVertical: 32}}>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 12}}>
                    EMAIL OR PHONE NUMBER <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <TextInput placeholder="Tên đăng nhập" style = {styles.textInput}/>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 12}}>
                    PASSWORD <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <TextInput placeholder="Mật khẩu" style = {[styles.textInput, {marginBottom: 4}]} secureTextEntry = {true}/>
                <Text style = {{color: "#00A8FC", fontSize: 14, fontWeight: 500}}>Forgot your password?</Text>
            </View>

            <View>
                <Pressable style = {styles.buttonLogin}>
                    <Text style = {{color: '#fff', fontSize: 16}}>Log In</Text>
                </Pressable>
            </View>

            <View style = {styles.suggestRegister}>
                <Text style = {{color: '#949BA4', marginRight: 6, fontSize: 14}}>Need an account?</Text>
                <Text style = {{color: '#00A8FC', fontSize: 14}}>Register</Text>
            </View>
            <StatusBar style = "auto"/>
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#313338',
    },
    header: {
        flex: 1 / 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 20
    },
    logo: {
        width: 54,
        height: 54,
        marginRight: 12
    },  
    textLogo: {
        fontSize: 28,
        color: 'white',
        fontWeight: 600,
    },
    textHeader: {
        flex: 1 / 8,
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
        flex: 1 / 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 12
    }
});
