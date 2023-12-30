import { View, Text, TouchableOpacity, TextStyle, ImageStyle} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";

import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";

import styles from "./option.style";

type Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
}

const Option : React.FC<Props> = ({navigation}) => {
    const [fontLoaded] = useFonts({
        'Lato-Blod': require('../../../assets/fonts/Lato-Bold.ttf')
    });

    const backHome = () => {
        navigation.navigate('Home', {id: null});
    };

    const toLogin = () => {
        navigation.navigate('Login');
    };  

    const toSignUp = () => {
        navigation.navigate('Register');
    }

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
                    <TouchableOpacity onPress={backHome}>
                        <View style = {styles.btn}>
                            <Icon name = "chevron-left" style = {{fontSize: 16, color: 'white'}}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style = {styles.content}>
                    <View style = {styles.containerIcon}>
                        <View style = {styles.cricle}>
                            <Icon name = "users" style = {{fontSize: 36, color: 'white'}}/>
                        </View>
                    </View>
                    <View>
                        <Text style = {styles.textLogin}>Đăng nhập để lưu lại quá trình</Text>
                    </View>
                    <View>
                        <TouchableOpacity style = {{marginBottom: 16, marginTop: 16}} onPress={toLogin}>
                            <LinearGradient
                                colors={['#ff706f', '#ff8266', '#ffa157']}
                                style = {{borderRadius: 24}}
                            >
                                <Text style = {styles.btnLogin}>Đăng nhập</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={toSignUp}>
                            <Text style = {styles.textSignUp}>Tạo tài khoản mới</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient>
    );
};

export default Option;

