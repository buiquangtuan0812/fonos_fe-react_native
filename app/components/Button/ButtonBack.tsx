import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type Navigation = {
    navigation: StackNavigationProp<RootStackParamList>;
}

interface Props {
    address: string;
    user: string | "";
}

const ButtonBack : React.FC<Props & Navigation> = ({address, user, navigation}) => {

    const handleBack = () => {
        switch (address) {
            case 'Search':
                navigation.navigate("Search", {user: user});
                break;
            case 'Option':
                navigation.navigate("Option");
                break;
            default:
                navigation.navigate("Home", {user: user});
                break;
        }
    };

    return (
        <View style = {styles.btnBack}>
            <TouchableOpacity onPress={handleBack}>
                <View style = {styles.btn}>
                    <Icon name = "chevron-left" style = {styles.icon}/>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonBack;

const styles = StyleSheet.create({
    btnBack: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10
    },
    btn: {
        backgroundColor: '#1b4d44',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 14,
        color: '#ffffff'
    },
})