import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#4e6187',
        paddingHorizontal: 16,
        flexDirection: 'row',
        paddingBottom: 16,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 140,
    },
    form: {
        paddingRight: 20,
        paddingLeft: 8,
        paddingVertical: 12,
        borderRadius: 14,
        backgroundColor: '#6f83a7',
        flexDirection: 'row',
        width: '89%',
    },
    textInput: {
        fontSize: 16,
        width: 260,
        color: '#fff'
    },
    body: {
        backgroundColor: '#ebf2fa',
        flex: 1,
        marginTop: -30,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingEnd: 40
    },
    containerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export default styles;