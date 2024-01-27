import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    containerStar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 20
    },
    containerInput: {
        borderRadius: 8,
        borderColor: '#ccc',
        minHeight: 86,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderWidth: 1
    },
    ctnButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24
    },
    btnRating: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: '#ccc',
        borderRadius: 12,
        backgroundColor: '#ff7f50',
    }
});

export default style;