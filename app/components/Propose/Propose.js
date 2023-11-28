import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Propose = () => {
    const lstImages = [
        require("../../../assets/images/dac_nhan_tam.jpg"),
        require("../../../assets/images/dac_nhan_tam.jpg"),
        require("../../../assets/images/dac_nhan_tam.jpg"),
        require("../../../assets/images/dac_nhan_tam.jpg"),
        require("../../../assets/images/dac_nhan_tam.jpg"),
        require("../../../assets/images/dac_nhan_tam.jpg"),
    ];

    const renderImage = ({ item }) => {
        return (
            <Image source={item} style={styles.image} />
        );
    };

    return (
        <View style={styles.container}>
            <Carousel
                loop={true}
                firstItem={1}
                itemWidth={220}
                data={lstImages}
                sliderWidth={400}
                layout={"default"}
                renderItem={renderImage}
                inactiveSlideScale={0.77}
                inactiveSlideOpacity={0.75}
                containerCustomStyle={{ overflow: 'visible' }}
            />
        </View>
    );
};

export default Propose;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 220,
        height: 340,
        borderRadius: 16,
        overflow: "hidden"
    }
});
