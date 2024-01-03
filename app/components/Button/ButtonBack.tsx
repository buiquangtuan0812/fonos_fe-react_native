import { useContext } from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import ContextBtn, { ContextBtnProps } from '../MyContext/ContextBtn';
import React from 'react';

const ButtonBack : React.FC = (props) => {

    const {handleBack} = useContext(ContextBtn) as ContextBtnProps;

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
    },
    btn: {
        backgroundColor: '#223651',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 9,
        paddingTop: 9,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 16,
        color: '#ffffff'
    },
})