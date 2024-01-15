import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './style';

const Like : React.FC = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Đã thêm vào mục yêu thích</Text>

            <TouchableOpacity>
                <Text style = {{color: '#dd9577', fontWeight: '600'}}>Xem</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Like;