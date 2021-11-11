import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const imageInicial = require('../../assets/asset-illustration.png')
const image02 = require('../../assets/asset-illustration-profissional.png')
const image03 = require('../../assets/asset-illustration-cliente.png')

export default Home = ({ navigation }) => {

  const [title, setTitle] = useState(1)
  const [subTitle, setSubTitle] = useState(1)
  const [imageChoice, setImageChoice] = useState(1)

  function choiceTitle() {
    if (title == 1) {
      return <Text>O que você está buscando?</Text>
    } if (title == 2) {
      return <Text> Você que cortar seu cabelo?</Text>
    } if (title == 3) {
      return <Text>Você é um profissional</Text>
    }
  }


  function choiceSubTitle() {
    if (subTitle == 1) {
      return <Text>Selecione um para decidir o tipo de conta</Text>
    } if (subTitle == 2) {
      return <Text> Encontre os melhores profissionais próximos a você</Text>
    } if (subTitle == 3) {
      return <Text>Seja encontrado pelos seus clientes</Text>
    }
  }


  function choiceImage() {
    if (imageChoice == 1) {
      return imageInicial
    } if (imageChoice == 2) {
      return image02
    } if (imageChoice == 3) {
      return image03
    }
  }


  function router() {
    if (imageChoice == 1) {
      return
    } if (imageChoice == 2) {
      navigation.navigate('Login');
      return
    } if (imageChoice == 3) {
      navigation.navigate('Login');
      return
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/shavers-logo.png')}
      />

      <View style={styles.bannerTop}>
        <Image
          style={styles.imageTop}
          source={choiceImage()}
        />
      </View>
      <View style={styles.choiceOptions}>
        <Text style={styles.title}>  {choiceTitle()} </Text>
        <Text style={styles.subTitle}> {choiceSubTitle()} </Text>


        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { (setImageChoice(2), setTitle(2), setSubTitle(2)) }} style={[styles.cutHair, { borderColor: imageChoice === image02 ? "#d3d3d3" : "green" }]}>
            <Image
              style={styles.cutHairImage}
              source={require('../../assets/pro-icon-asset.png')} />
            <Text style={styles.txt}>Cortar meu Cabelo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { (setImageChoice(3), setTitle(3), setSubTitle(3)) }} style={[styles.findCustomers, { borderColor: (imageChoice === image03) ? "#d3d3d3" : "green" }]}>
            <Image
              style={styles.findCustomersImage}
              source={require('../../assets/cliente-icon-asset.png')} />
            <Text style={styles.txt}>Encontrar Clientes</Text>
          </TouchableOpacity>
        </View>

      </View>
      <TouchableOpacity onPress={() => { router() }} style={[styles.buttonFooter, { backgroundColor: imageChoice === imageInicial ? "#d3d3d3" : "green" }]}>
        <Text style={[styles.titleButton, { color: imageChoice === imageInicial ? "black" : "white" }]}>
          Começar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}
