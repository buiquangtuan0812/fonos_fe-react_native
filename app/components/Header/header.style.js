import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerHeader: {
        flex: 1/12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 24,
        paddingRight: 20,
        paddingBottom: 4,
        paddingLeft: 20,
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