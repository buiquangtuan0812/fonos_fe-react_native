import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#53627f',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 80,
        right: 20,
        left: 20
    },
    text: {
        color: '#fcfefd',
        fontWeight: "700"
    }
});

export default styles;