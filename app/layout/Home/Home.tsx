import React, { useEffect, useState } from 'react';
import { View, Alert, ScrollView } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Propose from '../../components/Propose/Propose';
import Classify from '../../components/Classify/Classify';
import BookTypeCard from '../../components/BookTypeCard/BookTypeCard';
import { getCookies } from '../../utils/cookieStorage';

import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

import styles from './home.style';
import axios from 'axios';

type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

interface User {
  username: string;
  email: string;
  id: string;
  image: string;
  birthday: string;
}

const Home: React.FC<HomeProps> =  ({ navigation, route}) => {
  // const {id} = route.params || "";
  // if (id) {
  //   Alert.alert(id);
  // }

  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    id: "",
    image: "",
    birthday: "",
  });

  useEffect(() => {
    const makeRequest = async () => {
      const cookies = await getCookies();

      if (cookies !== null) {
        axios.post('http://192.168.34.109:8080/login', {
          username: cookies[0].split('=')[1]!,
          password: cookies[1].split('=')[1]!
        })
          .then(res => {
              if (res.data.statusCode === 200) {
                setUser(res.data.user);
              }
              else {
                Alert.alert(res.data.statusCode + ': ' + res.data.message);
              }
          })
          .catch(err => {
            Alert.alert(err.message);
          })
      }
      else {
        Alert.alert("No cookies");
      }
    }
    makeRequest();
  }, []);

  return (
    <View style={styles.containerHome}>
      <Header navigation={navigation} user={user}/>
      <ScrollView
        style = {styles.scrollView}
        showsVerticalScrollIndicator = {false}
      >
          <View style = {styles.containerClassify}>
            <Classify />
          </View>
          <Propose navigation={navigation} user={user}/>
          <BookTypeCard textShow="Kinh Tế" type="Kinh tế" navigation={navigation} user={user}/>
          <BookTypeCard textShow="Tâm Lý Học" type="Psychology" navigation={navigation} user={user}/>
          <BookTypeCard textShow="Văn Học" type="Văn học" navigation={navigation} user={user}/>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Home;
