import React, { useState } from "react";
import { StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ConsultarTipoDoUsuarioAtual, Logar } from "../../servicos/requisicoesFirebase";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function realizarLogin() {
    if (email == "") {
      alerta("Preencha seu e-mail.");
      return;
    }
    else if ((senha == "")) {
      alerta("Preencha sua senha.");
      return;
    }

    let retorno = await Logar(email, senha);
    if (retorno.erro) {
      alerta(retorno.erro.message);
      return;
    }

    let tipo = await ConsultarTipoDoUsuarioAtual();
    switch (tipo) {
      case "cuidadores":
        navigation.navigate("Cuidador");
        break;
      case "pacientes":
        navigation.navigate("Paciente");
        break;
    }
  }

  function alerta(mensagem) {
    Alert.alert(
      "Alerta!",
      mensagem,
      [
        { text: "OK", onPress: () => { } }
      ]
    );
  }

  return (
    <ImageBackground
      source={require("../../img/fundo.png")}
      style={styles.container}
    >
      <Image style={styles.logo} source={require("../../img/logo.png")} />
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(texto) => setEmail(texto)}
      />
      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={senha}
        onChangeText={(texto) => setSenha(texto)}
      />
      <TouchableOpacity
        style={styles.buttonlogin}
        onPress={() => realizarLogin()}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonsecundario} onPress={() => { navigation.navigate("Cadastro"); }}>
        <Text style={styles.textButton}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonsecundario} onPress={() => { }}>
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
    marginEnd: "auto",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
});
