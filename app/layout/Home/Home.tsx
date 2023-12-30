import React from 'react';
import { View, ImageBackground, Alert } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Propose from '../../components/Propose/Propose';
import Classify from '../../components/Classify/Classify';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import styles from './home.style';
const sourceImage = require('../../../assets/images/fonos-background.ecd7f04f.png');

type HomeProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Option'>;
    route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
  const {id} = route.params || "";
  if (id) {
    Alert.alert(id);
  }

  return (
    <View style={styles.containerHome}>
      <Header navigation={navigation} />
      <ImageBackground
        source={sourceImage}
        style={styles.imgBackGround}
        resizeMode="contain"
      >
        <Classify />
        <Propose />
      </ImageBackground>
      <Footer />
    </View>
  );
};

export default Home;
