import React, { useState } from "react";
import { StyleSheet, Text, Image, ImageBackground, TextInput, TouchableOpacity, Modal, View } from "react-native";
import CheckBox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { Cadastrar } from "../../servicos/requisicoesFirebase";


export default function Cadastro() {
    const navigation = useNavigation();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    const [exibirModal, setModalVisible] = useState(false);

    const [mensagemErro, setMensagemErro] = useState("");

    const [cuidadorEstaSelecionado, selecionarCuidador] = useState(true);
    const [pacienteEstaSelecionado, selecionarPaciente] = useState(false);
    const [pacienteSemCuidadorEstaSelecionado, selecionarPacienteSemCuidador] = useState(false);

    async function realizarCadastro() {

        setMensagemErro("");
        if (!nome) {
            setMensagemErro("Preencha seu nome.");
            setModalVisible(true);
            return;
        }
        else if (email == "") {
            setMensagemErro("Preencha seu e-mail.");
            setModalVisible(true);
            return;
        }
        else if ((senha == "")) {
            setMensagemErro("Preencha sua senha.");
            setModalVisible(true);
            return;
        }
        else if ((senha != confirmaSenha)) {
            setMensagemErro("As senhas devem ser iguais.");
            setModalVisible(true);
            return;
        }

        let tipo = "";
        if (cuidadorEstaSelecionado)
            tipo = "cuidadores";
        else if (pacienteEstaSelecionado)
            tipo = "pacientes";
        else
            tipo = "pacientesSemCuidador"

        let retorno = await Cadastrar(nome, email, senha, tipo);
        if (retorno) {
            setMensagemErro(retorno.message);
            setModalVisible(true);
            return;
        }

        navigation.navigate("Login");
    }

    return (
        <ImageBackground
            source={require("../../img/fundo.png")}
            style={styles.container}
        >
            <Image style={styles.logo} source={require("../../img/logo.png")} />

            <Text style={styles.text}>Nome</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={(texto) => setNome(texto)}
            />

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

            <Text style={styles.text}>Confirmar Senha</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={confirmaSenha}
                onChangeText={(texto) => setConfirmaSenha(texto)}
            />
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
                <View style={{ flexDirection: "row", marginEnd: 15 }}>
                    <CheckBox
                        value={cuidadorEstaSelecionado}
                        onValueChange={valor => {
                            selecionarCuidador(valor);
                            if (valor) {
                                selecionarPacienteSemCuidador(false);
                                selecionarPaciente(false);
                            }
                        }}
                        style={{ alignSelf: "center" }}
                    />
                    <Text style={{ color: "white", paddingStart: 4 }}>Cuidador</Text>
                </View>
                <View style={{ flexDirection: "row", marginEnd: 15 }}>
                    <CheckBox
                        value={pacienteEstaSelecionado}
                        onValueChange={valor => {
                            selecionarPaciente(valor);
                            if (valor) {
                                selecionarCuidador(false);
                                selecionarPacienteSemCuidador(false);
                            }
                        }}
                        style={{ alignSelf: "center" }}
                    />
                    <Text style={{ color: "white", paddingStart: 4 }}>Paciente</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <CheckBox
                        value={pacienteSemCuidadorEstaSelecionado}
                        onValueChange={valor => {
                            selecionarPacienteSemCuidador(valor);
                            if (valor) {
                                selecionarCuidador(false);
                                selecionarPaciente(false);
                            }
                        }}
                        style={{ alignSelf: "center" }}
                    />
                    <Text style={{ color: "white", paddingStart: 4 }}>Paciente Sem Cuidador</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.buttonCadastro}
                onPress={() => realizarCadastro()}
            >
                <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={exibirModal}
                onRequestClose={() => { setModalVisible(false); }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontSize: 20 }}>Alerta! {"\n"}</Text>
                        <Text >{mensagemErro}{"\n"}</Text>
                        <TouchableOpacity
                            onPress={() => { setModalVisible(false); }}
                        >
                            <Text style={styles.textStyle}>Ok</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ImageBackground>
    )
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
    buttonCadastro: {
        backgroundColor: "#660099",
        color: "white",
        width: 140,
        height: 46,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginStart: "auto",
        marginEnd: "auto",
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
