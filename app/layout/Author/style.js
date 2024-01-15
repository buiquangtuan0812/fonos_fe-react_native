import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    content: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
        width: '100%'
    },
    button: {
        position: 'absolute',
        top: 40,
        left: 20,
        zIndex: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    iconUser: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 66, 
        height: 66, 
        borderRadius: 50, 
        backgroundColor: '#cbced7'
    },
    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '700'
    },
    containerIntro: {
        backgroundColor: '#f3f8fc',
        paddingHorizontal: 20,
        paddingTop: 28,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        marginTop: -28
    },
    introduce: {
        fontFamily: 'Lato-Bold',
        lineHeight: 26,
        textAlign: 'justify',
        color: '#586b7f',
    }
});

export default styles;