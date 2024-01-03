import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        paddindRight: 24,
        paddingLeft: 24,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#f1f8ed'
    },
    item : {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
        color: '#b1b9d1',
        fontFamily: 'Lato-Blod'
    },
    textClicked: {
        fontSize: 14,
        fontWeight: 900,
        color: '#ff7f50',
        fontFamily: 'Lato-Blod'
    }
});

export default styles;