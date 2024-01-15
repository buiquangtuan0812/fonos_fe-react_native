import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerForm: {
        backgroundColor: '#fff',
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    containerIcon: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#e0e5f1'
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        paddingVertical: 4
    }
});

export default styles;