import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
        padding: 16
    },
    btnBack: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    btn: {
        backgroundColor: '#223651',
        paddingLeft: 12,
        paddingRight: 12,
        paddingBottom: 9,
        paddingTop: 9,
        borderRadius: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginTop: 140,
        backgroundColor: '#6d9cb5d6',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 360,
        borderRadius: 12,
        position: 'relative',
        ...Platform.select({
            ios: {
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
            },
        })
            
    },
    containerIcon: {
        position: 'absolute',
        top: -48,
        padding: 12,
        borderRadius: 50,
        backgroundColor: '#4d739a'
    },
    cricle: {
        padding: 16,
        backgroundColor: '#99c6f0',
        borderRadius: 50
    },
    textLogin: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Lato-Blod',
        marginTop: 44
    },
    btnLogin: {
        fontFamily: 'Lato-Blod',
        fontSize: 18,
        color: '#ffffff',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 28,
        paddingLeft: 28
    },
    textSignUp: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: 'Lato-Blod'
    }
});

export default styles;