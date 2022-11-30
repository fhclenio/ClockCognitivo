import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import background from "./img/fundo.png";

const imagem = require('./img/fundo.png');

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {'hello word'}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
  <ImageBackground source = {require('./img/fundo.png')} style={styles.container}>
    <Image style={styles.logo} source = {require('./img/logo.png')}/>
      <Text style={styles.text}>Usuário</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>Senha</Text>
      <TextInput 
      style={styles.input} 
      secureTextEntry={true}
      />
      <TouchableOpacity 
      style={styles.buttonlogin}
      onPress={() =>{}}
      >
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.buttonsecundario}
      onPress={() =>{}}
      >
      <Text style={styles.textButton}>Criar Conta</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.buttonsecundario}
      onPress={() =>{}}
      >
      <Text style={styles.textButton}>Esqueceu a senha ?</Text>
    </TouchableOpacity>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 12,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'90%',
    padding: 20,
    margin: 20,
    paddingBottom: 20,
    marginBottom:20
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#f6f6f6',
    padding: 10,
    borderColor: 'white',
    width: '90%',
    color: '#1a1a1a',
    borderRadius: 12,
    margin:12,
    height: 40,
    paddingLeft: 10,
  },
  buttonlogin: {
    backgroundColor: '#660099',
    color: 'white',
    width: 140,
    height: 46,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    
  },
  buttonsecundario: {
    borderColor: '#660099',
    borderWidth: 3,
    color: 'white',
    width: 180,
    height: 40,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
});

export default App;
