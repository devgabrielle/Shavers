import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default Welcome = () => {
    return(
        <View sytle={styles.container}>
            <Text style={styles.title}> Bem vindo ao App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontSize: 30,
        textAlign: 'center',

    }
})
