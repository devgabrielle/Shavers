import { StyleSheet } from "react-native";

export default StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: '#e9e9e9'
        },

        logo: {
            width: 140,
            height: 30,
            top: '8%'
        },

        bannerTop: {
            width: '100%',
            height: '28%',
            top: '11%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        imageTop: {
            width: 250,
            height: 250,

        },
        imageInicial: {
            width: 300,
            height: 230,
        },

        choiceOptions: {
            width: '90%',
            height: '43%',
            top: '12%'
        },

        txt: {
            marginTop: 10,
            fontSize: 16,
            color: 'grey',
            fontWeight: 'bold',
            textAlign: 'center',
        },

        title: {
            marginTop: 15,
            fontSize: 23,
            fontWeight: 'bold',
            alignSelf: 'center',
        },

        subTitle: {
            marginTop: 5,
            fontSize: 15,
            alignSelf: 'center',
            color: 'grey',
        },


        cutHair: {
            width: 130,
            height: 150,
            marginRight: 10,
            marginTop: 30,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#d3d3d3',
            borderRadius: 20,
        },
        cutHairImage: {
            width: '50%',
            height: '43%',

        },


        findCustomers: {
            width: 130,
            height: 150,
            marginLeft: 10,
            marginTop: 30,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#d3d3d3',
            borderRadius: 20,
        },
        findCustomersImage: {
            width: '50%',
            height: '38%',

        },

        buttonFooter: {
            width: '70%',
            height: '6%',
            borderRadius: 30,
            top: '12%',
            alignItems: 'center',
            justifyContent: 'center',
        },

        titleButton: {
            textAlign: 'center',
            fontSize: 20,
        }
    })
