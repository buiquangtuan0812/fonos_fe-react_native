import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 28,
        paddingRight: 20,
        paddingBottom: 12,
        paddingLeft: 20,
        marginBottom: 12,
        backgroundColor: '#593d56',
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.4,
              shadowRadius: 4,
            },
        })
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imgIcon: {
        width: 40,
        height: 40,
        marginRight: 12
    },
    text: {
        color: '#ffffff', 
        fontSize: 24, 
        fontFamily: 'Lato-Italic',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSearch: {
        fontSize: 24,
        color: '#FFFFFF',
    },
    iconUser: {
        fontSize: 24,
        color: '#FFFFFF',
        marginLeft: 28
    }
});

export default styles;