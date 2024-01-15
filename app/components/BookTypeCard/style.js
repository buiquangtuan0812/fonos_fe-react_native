import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: 12,
        marginBottom: 80
    },
    textHeader: {
        fontSize: 18,
        color: '#697f9f',
        marginBottom: 8
    },
    textType: {
        fontSize: 28,
        fontWeight: 700
    },
    containerImage: {
        marginTop: 28,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 200,
        borderRadius: 16,
        marginRight: 12
    }
});

export default styles;