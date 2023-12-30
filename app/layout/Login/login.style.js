import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
    containerLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 28
    },
    logo: {
        width: 42,
        height: 42,
        marginRight: 8
    },  
    textLogo: {
        fontSize: 28,
        color: '#000',
        fontWeight: 600,
        fontFamily: 'Lato-Italic'
    },
    textHeader: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
        width: 320
    },
    buttonLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 320,
        paddingVertical: 16,
        paddingHorizontal: 2,
        borderRadius: 8,
    },
    suggestRegister: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 12
    }
});

export default styles;