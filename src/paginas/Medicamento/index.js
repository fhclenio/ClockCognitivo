import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from "expo-checkbox";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { CadastrarMedicamentoDoPaciente } from "../../servicos/requisicoesFirebase.js";
import { auth } from '../../config/firebase';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function Medicamento() {

    const [expoPushToken, setExpoPushToken] = useState('');
    const [horario, setHorario] = useState('');

    const [segunda, setSegunda] = useState('');
    const [terca, setTerca] = useState('');
    const [quarta, setQuarta] = useState('');
    const [quinta, setQuinta] = useState('');
    const [sexta, setSexta] = useState('');
    const [sabado, setSabado] = useState('');
    const [domingo, setDomingo] = useState('');

    useEffect(() => {
        carregarTokenDeNotificacoes().then(token => setExpoPushToken(token));
    }, []);

    async function salvar() {
        let dias = montarDias();
        let nomeMedicamento = "Vitamina b2";
        let descricao = "serve para o desenvolvimento e manutenção das funções do sistema nervoso.";

        if (dias.length == 0) {
            alerta("Selecione pelo menos um dia.");
            return;
        }
        if (horario.length == 0) {
            alerta("Digite um horário.");
            return;
        }

        const medicamento = await CadastrarMedicamentoDoPaciente(auth.currentUser.uid, nomeMedicamento, descricao, "jorge", dias, horario);
        if (medicamento)
            agendarNovoAlarme(nomeMedicamento, descricao, dias, horario);
    }

    function montarDias() {
        let dias = "";
        if (domingo)
            dias += '1';
        if (segunda)
            dias += '2';
        if (terca)
            dias += '3';
        if (quarta)
            dias += '4';
        if (quinta)
            dias += '5';
        if (sexta)
            dias += '6';
        if (sabado)
            dias += '7';

        return dias;
    }

    async function agendarNovoAlarme(medicacao, descricao, diasDaSemana, horario) {
        let dias = diasDaSemana.split('');
        let [hora, minuto] = horario.split(':');

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
                    minute: Number(minuto)
                }
            });
        });
    }

    async function carregarTokenDeNotificacoes() {
        let token;

        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });

        if (Device.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alerta('A permissão de notificações é necessária para criar alarmes!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
        }
        else {
            alert('Must use physical device for Push Notifications');
        }

        return token;
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
        <View style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.textBody}>Dias</Text>
                <View style={{ ...styles.bodycard, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={segunda}
                                style={{ alignSelf: "center" }} onValueChange={valor => setSegunda(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>SEG</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={terca}
                                style={{ alignSelf: "center" }} onValueChange={valor => setTerca(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>TER</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={quarta}
                                style={{ alignSelf: "center" }} onValueChange={valor => setQuarta(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>QUA</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={quinta}
                                style={{ alignSelf: "center" }} onValueChange={valor => setQuinta(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>QUI</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={sexta}
                                style={{ alignSelf: "center" }} onValueChange={valor => setSexta(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>SEX</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={sabado}
                                style={{ alignSelf: "center" }} onValueChange={valor => setSabado(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>SAB</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <CheckBox
                                value={domingo}
                                style={{ alignSelf: "center" }} onValueChange={valor => setDomingo(valor)}
                            />
                            <Text style={{ color: "white", paddingStart: 4 }}>DOM</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <Text style={styles.textBody}>Horário</Text>
                <View style={styles.bodycard}>
                    <TextInput
                        style={styles.input}
                        value={horario}
                        onChangeText={(texto) => setHorario(texto)}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => salvar()}
            >
                <Text style={styles.text}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 12,
    },
    button: {
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
    textBody: {
        fontSize: 20,
        padding: 18,
        fontWeight: "bold",
        color: "#FDC500",
    },
    bodycard: {
        backgroundColor: "#1A1A1A",
        width: "100%",
        height: "89%",
        marginBottom: 13,
        borderBottomLeftRadius: 9,
        borderBottomRightRadius: 9,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        backgroundColor: "#f6f6f6",
        padding: 10,
        borderColor: "white",
        width: "90%",
        color: "#FDC500",
        borderRadius: 12,
        margin: 12,
        height: 40,
        paddingLeft: 10,
    },
    body: {
        width: "90%",
        height: "10%",
        backgroundColor: "#3A0057",
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 13,
        alignItems: "center",
        flexDirection: "column",
        marginTop: 60
    },
});
