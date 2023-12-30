import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
        backgroundColor: '#fff',
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 246,
        zIndex: 10
    },
    header: {
        width: '100%',
        backgroundColor: '#6dc14f',
        paddingTop: 12,
        paddingBottom: 12,
        marginBottom: 12,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    icon: {
        textAlign: 'center',
        color: 'white',
    },
    body: {
        marginTop: 12,
        marginBottom: 24,
    },
    textBody: {
        color: '#666',
        fontSize: 16
    },
    footer: {
        marginBottom: 12
    },
    buttonLogin: {
        padding: 12,
        backgroundColor: '#6dc14f',
        borderRadius: 2
    }
});

export default styles;