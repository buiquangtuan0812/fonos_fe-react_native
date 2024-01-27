import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 28
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12
    },
    author: {
        textTransform: 'uppercase', 
        color: '#737a87', 
        fontWeight: '500',
        letterSpacing: 2
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    content: {
        fontFamily: 'Lato-Bold',
        lineHeight: 26,
        color: '#586b7f',
        overflow: "hidden",
        marginBottom: 12,
    }
});

export default styles;