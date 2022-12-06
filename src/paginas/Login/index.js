import React, { useState } from "react";
import { StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, Modal, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Logar } from "../../servicos/requisicoesFirebase";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [exibirModal, setModalVisible] = useState(false);

  const [mensagemErro, setMensagemErro] = useState("");

  async function realizarLogin() {
    setMensagemErro("");

    if (email == "") {
      setMensagemErro("Preencha seu e-mail.");
      setModalVisible(true);
      return;
    }
    else if ((senha == "")) {
      setMensagemErro("Preencha sua senha.");
      setModalVisible(true);
      return;
    }

    let retorno = await Logar(email, senha);
    if (retorno) {
      setMensagemErro(retorno.message);
      setModalVisible(true);
      return;
    }

    navigation.navigate("Cuidador");
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

      <Modal
        animationType="fade"
        transparent={true}
        visible={exibirModal}
        onRequestClose={() => { setModalVisible(false); }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize: 20}}>Alerta! {"\n"}</Text>
            <Text style={styles.modalText}>{mensagemErro}{"\n"}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(false); }}
            >
              <Text style={styles.textStyle}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
