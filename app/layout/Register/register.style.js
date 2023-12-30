import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    registerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#32363b',
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
        marginBottom: 20
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
        fontFamily: 'Lato'
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 24,
        color: '#000',
        marginBottom: 20,
        fontFamily: 'Lato'
    },
    textInput: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 14,
        backgroundColor: '#ffffff',
        marginBottom: 20,
        borderRadius: 4,
        borderColor: '#ccc',
        borderWidth: 1,
    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 360,
        marginBottom: 16
    },
    checkBoxContainer: {
        width: 360,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    buttonRegister: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: 360,
        paddingVertical: 16,
        paddingHorizontal: 2,
        borderRadius: 8
    },
    ruleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 360,
        marginTop: 8
    },
    textRule: {
        fontSize: 12, 
        color: '#000', 
        marginRight: 22, 
        fontFamily: 'Montserrat'
    }
});

export default styles;