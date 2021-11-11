import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9e9e9',
    },

    header: {
        marginTop: 50,
        flexDirection: 'row',
    },

    icon:{
        marginLeft: 30,
        marginTop: 5,
    },

    logo: {
        marginLeft: '19%',
        width: 140,
        height: 30,
    },

    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 30,
    },


    txt1: {
        marginTop: 50,
        marginLeft: 30,
    },

    input1: {
        marginTop: 1,
        padding: 15,
        width: 350,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fefefe',
        borderRadius: 5,
    },

    txt2: {
        marginTop: 10,
        marginLeft: 30,
    },

    input2: {
        marginTop: 1,
        padding: 15,
        width: 350,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#fefefe',
        borderRadius: 5,
    },

    btn: {
        marginTop: 30,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 200,
        borderWidth: 2,
        width: 350,
        borderColor: 'green',
        backgroundColor: 'green',
    },

    txtBtn: {
        color: 'white',
        textAlign: 'center',
    },
})
