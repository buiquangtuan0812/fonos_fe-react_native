import { Image, StyleSheet, View } from "react-native"

const BookCard = ({img}) => {
    return (
        <View style = {styles.container}>
            <Image source={img} style = {styles.image}/>
        </View>
    );
};

export default BookCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 220,
        height: 340,
        borderRadius: 16,
        overflow: "hidden"
    }
});