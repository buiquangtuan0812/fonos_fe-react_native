import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerButton: {
        zIndex: 10,
        position: 'relative',
        backgroundColor: '#225e54',
        paddingBottom: 44,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignItems: 'center',
        height: 80
    },
    btnShare: {
        top: 40,
        right: 20,
        position: 'absolute'
    },
    btn: {
        backgroundColor: '#1b4d44',
        padding: 8,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 14,
        color: '#ffffff'
    },
    containerBook: {
        backgroundColor: '#369182',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 44,
        paddingHorizontal: 20
    },
    image: {
        width: 148,
        height: 232,
        borderRadius: 12,
    },
    name: {
        color: "#f6ffff",
        fontWeight: '800',
        fontSize: 18,
        marginTop: 28,
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        lineHeight: 24
    },
    author: {
        color: '#f6ffff',
        fontWeight: '700',
        marginRight: 16
    },
    containerRating: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 16
    },
    iconHeart: {
        padding: 6,
        borderRadius: 50,
        borderColor: '#81bdb5',
        borderWidth: 2
    },
    iconReadme: {
        width: '86%',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#66a89e',
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 28
    },
    containerContent: {
        paddingHorizontal: 24,
        paddingTop: 28,
        paddingBottom: 40,
        marginTop: -28,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#f3f8fc'
    },
    header: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
        color: '#192f52'
    },
    description: {
        fontFamily: 'Lato-Bold',
        lineHeight: 26,
        textAlign: 'justify',
        color: '#586b7f',
        overflow: "hidden",
        marginBottom: 12,
    },
    iconUser: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 52, 
        height: 52, 
        borderRadius: 50, 
        backgroundColor: '#cbced7'
    },
    imageAuthor: {
        width: 52,
        height: 52,
        borderRadius: 50
    },
    nameAuthor: {
        color: "#203253",
        marginLeft: 12,
        fontWeight: '700'
    },
    extend: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
    },
    containerType: {
        paddingBottom: 20, 
        borderBottomColor: '#dfe4ea', 
        borderBottomWidth: 1, 
        marginBottom: 20
    },
    type: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: '#e9eef4',
    },
    itemTable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 8,
        paddingBottom: 20
    },
    chapter: {
        color: '#132442',
        fontWeight: "700",
        textTransform:"uppercase",
        lineHeight: 24, 
        marginLeft: 8,
    },
    containerImage: {
        marginTop: 16,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    imageCard: {
        width: 120,
        height: 200,
        borderRadius: 16,
        marginRight: 12
    },
    containerFormShare: {
        flex: 1,
        top: 0,
        bottom: 0,
        width: '100%',
        position: 'absolute',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flexDirection: 'column',
        zIndex: 15,
    },
    containerFormRating: {
        flex: 1,
        top: 0,
        bottom: 0,
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 15,
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

export default styles;