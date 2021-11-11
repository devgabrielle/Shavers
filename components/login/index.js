import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Touchable } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

import styles from './styles';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../firebase/firebase';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function enterInFirebase() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate('Welcome')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Email ou senha incorretor. Tente novamente')
      });

  }


  return (
    < View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons onPress={() => navigation.navigate('Home')}
          style={styles.icon}
          name="arrow-back-ios" size={20} color="black" />


        <Image
          style={styles.logo}
          source={require('../../assets/shavers-logo.png')}
        />
      </View>
      <Text style={styles.title}>Acesse sua conta{'\n'}de cliente </Text>


      <Text style={styles.txt1}>SEU E-MAIL</Text>
      <TextInput
        style={styles.input1}
        onChangeText={setEmail}
        value={email}
        placeholder="Insira seu E-mail"
      />

      <Text style={styles.txt2}>PASSWORD</Text>
      <TextInput
        style={styles.input2}
        onChangeText={setPassword}
        value={password}
        placeholder="******"
      />


      <TouchableOpacity
        style={styles.btn}
        activeOpacity={.5}
        onPress={() => enterInFirebase()}>
        <Text style={styles.txtBtn}>Log in</Text>
      </TouchableOpacity>
    </View >
  )
};

