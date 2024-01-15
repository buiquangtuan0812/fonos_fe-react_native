import React, { useState} from 'react';
import axios from 'axios';
import { useFonts } from 'expo-font';
import { 
    Modal, View, Text, Pressable, Alert,
    Image, TextInput, TouchableWithoutFeedback, Keyboard,
    ActivityIndicator, TouchableOpacity, ImageBackground, ImageStyle
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import CheckBox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import styles from './register.style';
import ButtonBack from '../../components/Button/ButtonBack';
import MyContext from '../../components/MyContext/MyContext';
import Success from '../../components/Confirm/Success/Success';

// const url = 'https://github.com/buiquangtuan0812';
const logo = require('../../../assets/images/logo.webp'); 
const background = require('../../../assets/images/side-wave_background.png');

type Days = { label: string; value: string; key: string }[];
type Months = { label: string; value: string }[];
type Years = { label: string; value: number }[];

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Option'>;
}


const Register : React.FC<Props> = ({navigation}) => {

    const days : Days = [
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

    const months : Months = [
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

    const years : Years = [
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

    const [id, setId] = useState("");
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYears] = useState<number | null>(null);
    const [isChecked, setChecked] = useState(false);
    const [email, setEmail] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fontLoaded] = useFonts({
        'Lato': require('../../../assets/fonts/Lato-Italic.ttf'),
        'Montserrat': require('../../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
    });

    const toggleModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleRegister = () => {
        var checkError = false;
        if (!email) {
            checkError = true;
            Alert.alert('Please enter a email address');
        }
        else if (!username) {
            checkError = true;
            Alert.alert('Please enter a username');
        }
        else if (!password) {
            checkError = true;
            Alert.alert('Please enter a password');
        }
        else if (!isChecked) {
            checkError = true;
            Alert.alert('Please agree to the rules');
        }
        else {
            if (!String(email).includes('@gmail.com')) {
                checkError = true;
                Alert.alert('Email address must be a valid email address (e.g.@gmail.com)');
            }
            if ((String(password).length < 8)) {
                checkError = true;
                Alert.alert('Password must be at least 8 characters!');
            }
        }
        const birth_date = day + '/' + month + '/' + year;
        if (checkError !== true) {
            setIsLoading(true);
            axios.post('http://192.168.34.109:8080/register', {
                    username,
                    password,
                    email,
                    birth_date
                })
                .then(response => {
                    if (response.data.statusCode === 200) {
                        setId(response.data.id);
                        setIsLoading(false);
                        toggleModal();
                    }
                    else {
                        setIsLoading(false);
                        Alert.alert(response.data.message);
                    }
                })
                .catch(error => {
                    Alert.alert(error.message);
                })
        }
    };

    const handleTouchOutside = () => {
        Keyboard.dismiss();
    };

    if (!fontLoaded) {
        return null;
    }

    return (
        <ImageBackground
            source={background}
            style = {{flex: 1}}
        >
        <TouchableWithoutFeedback onPress={handleTouchOutside} >
            <View style = {styles.registerContainer}>
                    <Modal
                        transparent
                        visible = {isLoading}
                        animationType='slide'
                    >
                        {isLoading ?
                            <View style = {styles.containerLoading}>
                                <ActivityIndicator size="large" color="white"/>
                            </View> : ''
                        }
                    </Modal>
                    <Modal 
                        transparent
                        visible = {isModalVisible}
                        animationType='slide'
                    >
                        <MyContext.Provider
                            value = {{
                                text: 'Bạn đã đăng ký thành công!', 
                                textButton: 'Đăng nhập ngay',
                                closeModal: closeModal,
                                navigation: navigation,
                                id: id
                            }}>
                            <Success />
                        </MyContext.Provider>
                    </Modal>
                    <ButtonBack address="Option" navigation={navigation}/>
                    <View>
                        <View style = {styles.header}>
                            <Image source = {logo} style = {styles.logo as ImageStyle}/>
                            <Text style = {styles.textLogo}>VieBook</Text>
                        </View>

                        <View>
                            <Text style = {styles.textHeader}>Tạo tài khoản miễn phí</Text>
                        </View>

                        <View style = {{width: 360}}>
                            <View>
                                <Text style = {{color: '#212121', fontSize: 12, fontWeight: '600', marginBottom: 8}}>
                                    EMAIL <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                                </Text>
                                <TextInput 
                                    style = {styles.textInput} 
                                    onChangeText={text => setEmail(text)} 
                                    placeholder='Email'
                                />
                            </View>
                            <View>
                                <Text style = {{color: '#212121', fontSize: 12, fontWeight: '600', marginBottom: 8}}>
                                    USERNAME <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                                </Text>
                                <TextInput style = {styles.textInput} onChangeText={text => setUsername(text)} placeholder='Tên đăng nhập'/>
                            </View>

                            <View>
                                <Text style = {{color: '#212121', fontSize: 12, fontWeight: '600', marginBottom: 8}}>
                                    MẬT KHẨU <Text style = {{color: 'red', marginLeft: 4}}>*</Text>
                                </Text>
                                <View style = {{position: 'relative'}}>
                                    <TextInput style = {styles.textInput} placeholder='Mật khẩu' secureTextEntry = {showPassword ? false : true} onChangeText={text => setPassword(text)}/>
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
                            </View>
                            <Text style = {{color: '#212121', fontSize: 12, fontWeight: '600', marginBottom: 8}}>Ngày sinh</Text>
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
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        color: '#949BA4',
                                        backgroundColor: '#ffffff',
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
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        color: '#949BA4',
                                        backgroundColor: '#ffffff',
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
                                        borderWidth: 1,
                                        color: '#212121',
                                        backgroundColor: '#ffffff',
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
                            <Text style = {{fontSize: 12, color: '#000', marginRight: 22, fontFamily: 'Montserrat', fontWeight: '600'}}>
                                (Tùy chọn) Gửi cho tôi email về cập nhật VieBook, mẹo vặt và ưu đãi đặc biệt.
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity 
                                onPress={handleRegister}
                            >
                                <LinearGradient
                                    colors={['#ff706f', '#ff8266', '#ffa157']}
                                    style = {styles.buttonRegister}
                                >
                                    <Text style = {{color: '#fff', fontSize: 16}}>Đăng ký</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.ruleContainer}>
                            <Text style = {styles.textRule}>Bằng cách đăng ký, bạn đồng ý với quy tắc của VieBook.</Text>
                        </View>
                    </View>
            </View>
        </TouchableWithoutFeedback>
    </ImageBackground>
    )
}

export default Register;

