import { StyleSheet } from "react-native";

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

export default styles;