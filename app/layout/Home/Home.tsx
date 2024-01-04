import React from 'react';
import { View, Alert, ScrollView } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Propose from '../../components/Propose/Propose';
import Classify from '../../components/Classify/Classify';
import BookTypeCard from '../../components/BookTypeCard/BookTypeCard';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import styles from './home.style';

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

const Home: React.FC<HomeProps> = ({ navigation, route}) => {
  const {id} = route.params || "";
  if (id) {
    Alert.alert(id);
  }

  return (
    <View style={styles.containerHome}>
      <Header navigation={navigation} />
      <ScrollView
        style = {styles.scrollView}
        showsVerticalScrollIndicator = {false}
      >
          <View style = {styles.containerClassify}>
            <Classify />
          </View>
          <Propose />
          <BookTypeCard textShow = "Kỹ Năng Sống" type = "Kinh tế" />
          <BookTypeCard textShow = "Tâm Lý Học" type = "Psychology" />
          <BookTypeCard textShow = "Văn Học" type = "Văn học" />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Home;
