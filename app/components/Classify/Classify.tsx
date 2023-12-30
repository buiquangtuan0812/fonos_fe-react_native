import {Image, ImageStyle, Text, View } from "react-native";

import styles from "./classify.style";
const audioBook = require("../../../assets/images/audio_book.jpg");
const ebook = require("../../../assets/images/ebook.jpg");
const summaryBook = require("../../../assets/images/summary_book.jpg");
const allBook = require("../../../assets/images/tong_hop.jpg");

const Classify : React.FC = () => {
    return (
        <View style={styles.container}>
            <View style = {styles.item}>
                <Image style = {styles.image as ImageStyle} source={audioBook}/>
                <Text style = {styles.text}>Sách nói</Text>
            </View>

            <View style = {styles.item}>
                <Image style = {styles.image as ImageStyle} source={ebook}/>
                <Text style = {styles.text}>Ebook</Text>
            </View>

            <View style = {styles.item}>
                <Image style = {styles.image as ImageStyle} source={summaryBook}/>
                <Text style = {styles.text}>Tóm tắt sách</Text>
            </View>

            <View style = {styles.item}>
                <Image style = {styles.image as ImageStyle} source={allBook}/>
                <Text style = {styles.text}>Tất cả</Text>
            </View>
        </View>
    );
};

export default Classify;
