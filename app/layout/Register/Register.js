import {useState} from 'react';
import { useFonts } from 'expo-font';
import { 
    StyleSheet, View, Text, Pressable, Image, TextInput
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CheckBox from 'expo-checkbox';

const url = 'https://github.com/buiquangtuan0812';
const logo = require('../../../assets/images/logo.webp'); 
import OpenURLButton from "../../components/Link/Link";
import Icon from "react-native-vector-icons/FontAwesome";

const Register = () => {
    
    const days = [
        {label: '1', value: '1', key: '1'},
        {label: '2', value: '2', key: '2'},
        {label: '3', value: '3', key: '3'},
        {label: '4', value: '4', key: '4'},
        {label: '5', value: '5', key: '5'},
        {label: '6', value: '6', key: '6'},
        {label: '7', value: '7', key: '7'},
        {label: '8', value: '8', key: '8'},
        {label: '9', value: '9', key: '9'},
        {label: '10', value: '10', key: '10'},
        {label: '11', value: '11', key: '11'},
        {label: '12', value: '12', key: '12'},
        {label: '13', value: '13', key: '13'},
        {label: '14', value: '14', key: '14'},
        {label: '15', value: '15', key: '15'},
        {label: '16', value: '16', key: '16'},
        {label: '17', value: '17', key: '17'},
        {label: '18', value: '18', key: '18'},
        {label: '19', value: '19', key: '19'},
        {label: '20', value: '20', key: '20'},
    ];

    const months = [
        {label: 'January', value: 'January'},
        {label: 'February', value: 'February'},
        {label: 'March', value: 'March'},
        {label: 'April', value: 'April'},
        {label: 'May', value: 'May'},
        {label: 'June', value: 'June'},
        {label: 'July', value: 'July'},
        {label: 'August', value: 'August'},
        {label: 'September', value: 'September'},
        {label: 'October', value: 'October'},
        {label: 'November', value: 'November'},
        {label: 'December', value: 'December'},
    ];

    const years = [
        {label: '2005', value: 2005},
        {label: '2004', value: 2004},
        {label: '2003', value: 2003},
        {label: '2002', value: 2002},
        {label: '2001', value: 2001},
        {label: '2000', value: 2000},
        {label: '1999', value: 1999},
        {label: '1998', value: 1998},
        {label: '1997', value: 1997},
        {label: '1996', value: 1996},
        {label: '1995', value: 1995},
        {label: '1994', value: 1994},
        {label: '1993', value: 1993},
        {label: '1992', value: 1992},
        {label: '1991', value: 1991},
        {label: '1990', value: 1990},
    ];

    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYears] = useState(null);
    const [isChecked, setChecked] = useState(false);
    const [isCliked, setCliked] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null); 
    const [email, setEmail] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [fontLoaded] = useFonts({
        'Lato': require('../../../assets/fonts/Lato-Italic.ttf'),
        'Montserrat': require('../../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
    });

    const handleRegister = () => {
        setCliked(!isCliked);
        setTimeout(() => {
            if (!email) {
                alert('Please enter a email address');
            }
            else if (!username) {
                alert('Please enter a username');
            }
            else if (!password) {
                alert('Please enter a password');
            }
            else if (!isChecked) {
                alert('Please agree to the rules');
            }
            else {
                if (!String(email).includes('@gmail.com')) {
                    alert('Email address must be a valid email address (e.g.@gmail.com)');
                }
                if ((String(password).length < 8)) {
                    alert('Password must be at least 8 characters!');
                }
            }
        }, 500);
        // const birth = day + '/' + month + '/' + year;
        // axios.post('http://192.168.31.199:3000/user/register', {
            //     username,
            //     password,
            //     email
        // })
    }

    if (isCliked) {
        setTimeout(() => {
            setCliked(false);
        }, 500);
    };

    if (!fontLoaded) {
        return null;
    }

    return (
        <View style = {styles.registerContainer}>
            <View style = {styles.header}>
                <Image source = {logo} style = {styles.logo}/>
                <Text style = {styles.textLogo}>VieBook</Text>
            </View>

            <View>
                <Text style = {styles.textHeader}>Tạo tài khoản miễn phí</Text>
            </View>

            <View style = {{width: 360}}>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 8}}>
                    EMAIL <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <TextInput style = {styles.textInput} onChangeText={text => setEmail(text)}/>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 8}}>
                    USERNAME <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <TextInput style = {styles.textInput} onChangeText={text => setUsername(text)}/>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 8}}>
                    MẬT KHẨU <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                </Text>
                <View style = {{position: 'relative'}}>
                    <TextInput style = {styles.textInput} secureTextEntry = {showPassword ? false : true} onChangeText={text => setPassword(text)}/>
                    {showPassword ? 
                        <Pressable style = {{position: 'absolute', right: 8, top: 10}} onPress={() => setShowPassword(false)}>
                            <Icon name = "eye-slash" size={16} color="#ccc" />
                        </Pressable>
                        :
                        <Pressable style = {{position: 'absolute', right: 8, top: 10}} onPress={() => setShowPassword(true)}>
                            <Icon name = "eye" size={16} color="#ccc" />
                        </Pressable>
                    }
                </View>
                <Text style = {{color: '#B5BAC1', fontSize: 12, fontWeight: 600, marginBottom: 8}}>Ngày sinh</Text>
            </View>
            <View style = {styles.selectContainer}>
                <RNPickerSelect
                    items={days}
                    value={day}
                    onValueChange={(value) => setDay(value)}
                    placeholder={{label: 'Ngày', value: null}}
                    style={{
                        inputIOS: {
                            fontSize: 14,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            borderColor: '#ccc',
                            borderRadius: 4,
                            color: '#949BA4',
                            backgroundColor: '#1E1F22',
                            width: 100,
                        },
                    }}
                />
                <RNPickerSelect
                    items={months}
                    value={month}
                    onValueChange={(value) => setMonth(value)}
                    placeholder={{label: 'Tháng', value: null}}
                    style={{
                        inputIOS: {
                            fontSize: 14,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            borderColor: '#ccc',
                            borderRadius: 4,
                            color: '#949BA4',
                            backgroundColor: '#1E1F22',
                            width: 100
                        },
                    }}
                />
                <RNPickerSelect
                    items={years}
                    value={year}
                    onValueChange={(value) => setYears(value)}
                    placeholder={{label: 'Năm', value: null}}
                    style={{
                        inputIOS: {
                            fontSize: 14,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            borderColor: '#ccc',
                            borderRadius: 4,
                            color: '#949BA4',
                            backgroundColor: '#1E1F22',
                            width: 100
                        },
                    }}
                />
            </View>

            <View style = {styles.checkBoxContainer}>
                <CheckBox
                    value = {isChecked}
                    onValueChange={() => setChecked(!isChecked)}
                    style = {{
                        marginRight: 10,
                        borderRadius: 4
                    }}
                />
                <Text style = {{fontSize: 12, color: '#fff', marginRight: 22, fontFamily: 'Montserrat'}}>
                    (Tùy chọn) Gửi cho tôi email về cập nhật VieBook, mẹo vặt và ưu đãi đặc biệt.
                </Text>
            </View>

            <View>
                <Pressable 
                    style={[styles.buttonLogin, { opacity: isCliked ? 0.8 : 1 }]}
                    onPress={handleRegister}
                >
                    <Text style = {{color: '#fff', fontSize: 16}}>Đăng ký</Text>
                </Pressable>
            </View>
            <View style = {styles.ruleContainer}>
                <Text style = {styles.textRule}>Bằng cách đăng ký, bạn đồng ý với quy tắc của VieBook.</Text>
                {/* <OpenURLButton url = {url} children="Rerms of Service." style = {{fontSize: 12, color: '#00A8FC'}} /> */}
            </View>
            
        </View>
    )
}

export default Register;

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32363b',
        padding: 36
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
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
        fontFamily: 'Lato'
    },
    textHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
        fontFamily: 'Lato'
    },
    textInput: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 14,
        backgroundColor: '#1E1F22',
        marginBottom: 20,
        borderRadius: 4,
        color: '#FFFFFF',
    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 360,
        marginBottom: 16
    },
    checkBoxContainer: {
        width: 360,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 360,
        paddingVertical: 16,
        paddingHorizontal: 2,
        borderRadius: 4,
        backgroundColor: '#5865F2'
    },
    ruleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 360,
        marginTop: 8
    },
    textRule: {
        fontSize: 12, 
        color: '#fff', 
        marginRight: 22, 
        fontFamily: 'Montserrat'
    }
});