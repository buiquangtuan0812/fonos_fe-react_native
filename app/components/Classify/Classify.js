import { StyleSheet, Image, Text, View } from "react-native";

import audioBook from "../../../assets/images/audio_book.jpg";
import ebook from "../../../assets/images/ebook.jpg";
import summaryBook from "../../../assets/images/summary_book.jpg";
import allBook from "../../../assets/images/tong_hop.jpg";

const Classify = () => {
    return (
        <View style={styles.container}>
            <View style = {styles.item}>
                <Image style = {styles.image} source={audioBook}/>
                <Text style = {styles.text}>Sách nói</Text>
            </View>

            <View style = {styles.item}>
                <Image style = {styles.image} source={ebook}/>
                <Text style = {styles.text}>Ebook</Text>
            </View>

            <View style = {styles.item}>
                <Image style = {styles.image} source={summaryBook}/>
                <Text style = {styles.text}>Tóm tắt sách</Text>
            </View>

            <View style = {styles.item}>
                <Image style = {styles.image} source={allBook}/>
                <Text style = {styles.text}>Tất cả</Text>
            </View>
        </View>
    );
};

export default Classify;

const styles = StyleSheet.create({
    container: {
        width: '92%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
        marginLeft: 0,
        marginRight: 0,
        padding: 8,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#d0d1db',
        borderRadius: 50
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 46,
        height: 46,
        borderRadius: 50,
        marginBottom: 10
    },
    text: {
        fontSize: 14,
        color: '#3b3b3b',
        fontWeight: 600
    }
});
