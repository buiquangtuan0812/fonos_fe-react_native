import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

const Like : React.FC = () => {
    return (
        <View style = {[styles.container, {justifyContent: 'center'}]}>
            <Text style = {[styles.text, {textAlign: 'center'}]}>Đã xóa khỏi mục yêu thích</Text>
        </View>
    );
};

export default Like;