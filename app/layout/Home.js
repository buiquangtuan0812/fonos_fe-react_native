import React from 'react';
import { View , StyleSheet, ImageBackground} from 'react-native';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Propose from '../components/Propose/Propose';
import Classify from '../components/Classify/Classify';
import Image from '../../assets/images/fonos-background.ecd7f04f.png';

const Home = ({navigation}) => {
    return (
        <View style = {styles.containerHome}> 
            <Header navigation={navigation}/>
            <ImageBackground 
                source={Image}
                style = {styles.imgBackGround}
                resizeMode = "contain"
            >
                <Classify />
                <Propose/>
            </ImageBackground>
            <Footer/>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
    },
    imgBackGround: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    }
});