import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import CheckBox from "expo-checkbox";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { CadastrarMedicamentoDoPaciente } from "../../servicos/requisicoesFirebase.js";
import { auth } from "../../config/firebase";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Medicamento() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [horario, setHorario] = useState("");

  const [segunda, setSegunda] = useState("");
  const [terca, setTerca] = useState("");
  const [quarta, setQuarta] = useState("");
  const [quinta, setQuinta] = useState("");
  const [sexta, setSexta] = useState("");
  const [sabado, setSabado] = useState("");
  const [domingo, setDomingo] = useState("");

  useEffect(() => {
    carregarTokenDeNotificacoes().then((token) => setExpoPushToken(token));
  }, []);

  async function salvar() {
    let dias = montarDias();
    let nomeMedicamento = "Vitamina b2";
    let descricao =
      "serve para o desenvolvimento e manutenção das funções do sistema nervoso.";

    if (dias.length == 0) {
      alerta("Selecione pelo menos um dia.");
      return;
    }
    if (horario.length == 0) {
      alerta("Digite um horário.");
      return;
    }

    const medicamento = await CadastrarMedicamentoDoPaciente(
      auth.currentUser.uid,
      nomeMedicamento,
      descricao,
      "jorge",
      dias,
      horario
    );
    if (medicamento)
      agendarNovoAlarme(nomeMedicamento, descricao, dias, horario);
  }

  function montarDias() {
    let dias = "";
    if (domingo) dias += "1";
    if (segunda) dias += "2";
    if (terca) dias += "3";
    if (quarta) dias += "4";
    if (quinta) dias += "5";
    if (sexta) dias += "6";
    if (sabado) dias += "7";

    return dias;
  }

  async function agendarNovoAlarme(
    medicacao,
    descricao,
    diasDaSemana,
    horario
  ) {
    let dias = diasDaSemana.split("");
    let [hora, minuto] = horario.split(":");

    dias.forEach(async (dia) => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Lembre de tomar sua medicação: " + medicacao,
          body: descricao,
        },
        trigger: {
          repeats: true,
          weekday: Number(dia),
          hour: Number(hora),
          minute: Number(minuto),
        },
      });
    });
  }

  async function carregarTokenDeNotificacoes() {
    let token;

    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alerta("A permissão de notificações é necessária para criar alarmes!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token;
  }

  function alerta(mensagem) {
    Alert.alert("Alerta!", mensagem, [{ text: "OK", onPress: () => {} }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Cadastrar Medicamento</Text>
      </View>
      <ScrollView>
      <View style={styles.card}>
        <View style={styles.containerMed}>
          <Image style={styles.med} source={require("../../img/medPink.png")} />
        </View>
        <ScrollView style={styles.scroll}>
          <View style={styles.containerInput}>
            <View style={styles.inputHeader}>
              <Text style={styles.inputHeaderText}>Nome</Text>
            </View>
            <View style={styles.inputbody}>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.containerInput}>
            <View style={styles.inputHeader}>
              <Text style={styles.inputHeaderText}>Médico</Text>
            </View>
            <View style={styles.inputbody}>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.containerInput}>
            <View style={styles.inputHeader}>
              <Text style={styles.inputHeaderText}>
                Descrição do medicamento
              </Text>
            </View>
            <View style={styles.inputbody}>
              <TextInput style={styles.input} />
            </View>
          </View>
          <View style={styles.containerInput}>
            <View style={styles.inputHeader}>
              <Text style={styles.inputHeaderText}>Dias</Text>
            </View>
            <View style={styles.inputbodyCheckbox}>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={segunda}
                  onValueChange={(valor) => setSegunda(valor)}
                />
                <Text style={styles.textCheckbox}>SEG</Text>
              </View>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={terca}
                  onValueChange={(valor) => setTerca(valor)}
                />
                <Text style={styles.textCheckbox}>TER</Text>
              </View>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={quarta}
                  onValueChange={(valor) => setQuarta(valor)}
                />
                <Text style={styles.textCheckbox}>QUA</Text>
              </View>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={quinta}
                  onValueChange={(valor) => setQuinta(valor)}
                />
                <Text style={styles.textCheckbox}>QUI</Text>
              </View>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={sexta}
                  onValueChange={(valor) => setSexta(valor)}
                />
                <Text style={styles.textCheckbox}>SEX</Text>
              </View>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={sabado}
                  onValueChange={(valor) => setSabado(valor)}
                />
                <Text style={styles.textCheckbox}>SAB</Text>
              </View>
              <View style={styles.inputCheckbox}>
                <CheckBox
                  style={styles.checkBox}
                  value={domingo}
                  onValueChange={(valor) => setDomingo(valor)}
                />
                <Text style={styles.textCheckbox}>DOM</Text>
              </View>
            </View>
          </View>
          <View style={styles.containerInput}>
            <View style={styles.inputHeader}>
              <Text style={styles.inputHeaderText}>Horário</Text>
            </View>
            <View style={styles.inputbody}>
              <TextInput
                style={styles.input}
                value={horario}
                onChangeText={(texto) => setHorario(texto)}
              />
            </View>
          </View>
        </ScrollView>
        
      </View>
      <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={() => salvar()}>
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#3A0057",
  },
  header: {
    top: 0,
    height: 95,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#660099",
    paddingTop: 10,
  },
  titulo: {
    fontSize: 22,
    color: "#FDC500",
    fontWeight: "bold",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    margin: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  containerMed: {
    borderWidth: 2,
    borderColor: "#3A0057",
    borderRadius: 10,
    padding: 5,
  },
  med: {
    width: 200,
    height: 180,
    borderWidth: 2,
    borderColor: "#3A0057",
    borderRadius: 10,
  },
  containerInput: {
    borderWidth: 2,
    borderColor: "#3A0057",
    borderRadius: 10,
    width: "100%",
    marginTop: 15,
  },
  inputHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#3A0057",
    padding: 5,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  inputHeaderText: {
    fontSize: 20,
    color: "#FFD500",
    fontWeight: "bold",
  },
  inputbody: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 5,
  },
  input: {
    fontSize: 18,
    color: "#DC2F02",
    fontWeight: "bold",
  },
  scroll: {
    width: "100%",
  },
  inputbodyCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    padding: 5,
  },
  inputCheckbox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
  },
  checkBox: {
    borderRadius: 16,
  },
  textCheckbox: {
    fontSize: 14,
    color: "#DC2F02",
    fontWeight: "bold",
  },
  containerButton: {
    padding:10,
  },
  button: {
    backgroundColor: "#FFD500",
    justifyContent: "center",
    alignItems: "center",
    margin:10,
    padding:8,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: "#3A0057",
    fontWeight: "bold",
  }
});
