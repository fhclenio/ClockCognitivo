import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../img/fundo.png")}
      style={styles.container}
    >
      <Image style={styles.logo} source={require("../../img/logo.png")} />
      <Text style={styles.text}>Usuário</Text>
      <TextInput style={styles.input} />
      <Text style={styles.text}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <TouchableOpacity style={styles.buttonlogin} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonsecundario} onPress={() => {}}>
        <Text style={styles.textButton}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonsecundario} onPress={() => {}}>
        <Text style={styles.textButton}>Esqueceu a senha ?</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    marginStart: "auto",
    marginEnd: "auto",
    padding: 20,
    margin: 20,
    paddingBottom: 20,
    marginBottom: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  textButton: {
    color: "white",
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "#f6f6f6",
    padding: 10,
    borderColor: "white",
    width: "90%",
    color: "#1a1a1a",
    borderRadius: 12,
    margin: 12,
    height: 40,
    paddingLeft: 10,
  },
  buttonlogin: {
    backgroundColor: "#660099",
    color: "white",
    width: 140,
    height: 46,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginStart: "auto",
    marginEnd: "auto"
  },
  buttonsecundario: {
    borderColor: "#660099",
    borderWidth: 3,
    color: "white",
    width: 180,
    height: 40,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginStart: "auto",
    marginEnd: "auto"
  },
});
