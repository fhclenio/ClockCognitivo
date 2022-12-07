import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";

export default function Paciente() {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.titulo}>Paciente</Text>
                <Text style={styles.tituloPaciente}>Beatriz Silva</Text>
            </View>
            <View style={styles.buttonHeader}>
                <TouchableOpacity style={styles.buttonHome} onPress={() => { navigation.navigate("Medicamento") }}>
                    <Image source={require("../../img/maisRoxo.png")} />
                    <Text style={styles.buttonHomeText}>Cadastrar Medicamento</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <Text style={styles.textBody}>Meus Medicamentos</Text>
                <View style={styles.bodycard}>
                    <ScrollView horizontal>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.tituloCard}>Paracetamo</Text>
                                <View style={styles.InfoMed}>
                                    <TouchableOpacity style={styles.butonInfo} onPress={() => { }}>
                                        <Image source={require("../../img/calendarioRed.png")} />
                                        <Text style={styles.textInfo}>SEG - TER - QUI</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.butonInfo} onPress={() => { }}>
                                        <Image source={require("../../img/relogioRed.png")} />
                                        <Text style={styles.textInfo}>16HRS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.bodyMed}>
                                <Image
                                    style={styles.med}
                                    source={require("../../img/medAzul.png")}
                                />
                            </View>
                            <View style={styles.bodyButtonEdit}>
                                <TouchableOpacity style={styles.buttonEdit} onPress={() => { }}>
                                    <Image source={require("../../img/editRoxo.png")} />
                                    <Text style={styles.buttonEditText}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.tituloCard}>Paracetamo</Text>
                                <View style={styles.InfoMed}>
                                    <TouchableOpacity style={styles.butonInfo} onPress={() => { }}>
                                        <Image source={require("../../img/calendarioRed.png")} />
                                        <Text style={styles.textInfo}>SEG - TER - QUI</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.butonInfo} onPress={() => { }}>
                                        <Image source={require("../../img/relogioRed.png")} />
                                        <Text style={styles.textInfo}>16HRS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.bodyMed}>
                                <Image
                                    style={styles.med}
                                    source={require("../../img/medLaranja.png")}
                                />
                            </View>
                            <View style={styles.bodyButtonEdit}>
                                <TouchableOpacity style={styles.buttonEdit} onPress={() => { }}>
                                    <Image source={require("../../img/editRoxo.png")} />
                                    <Text style={styles.buttonEditText}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.tituloCard}>Paracetamo</Text>
                                <View style={styles.InfoMed}>
                                    <TouchableOpacity style={styles.butonInfo} onPress={() => { }}>
                                        <Image source={require("../../img/calendarioRed.png")} />
                                        <Text style={styles.textInfo}>SEG - TER - QUI</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.butonInfo} onPress={() => { }}>
                                        <Image source={require("../../img/relogioRed.png")} />
                                        <Text style={styles.textInfo}>16HRS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.bodyMed}>
                                <Image
                                    style={styles.med}
                                    source={require("../../img/medAzul.png")}
                                />
                            </View>
                            <View style={styles.bodyButtonEdit}>
                                <TouchableOpacity style={styles.buttonEdit} onPress={() => { }}>
                                    <Image source={require("../../img/editRoxo.png")} />
                                    <Text style={styles.buttonEditText}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonHeader: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 14,
        marginTop: 10,

    },
    header: {
        top: 0,
        height: 95,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3A0057",
        paddingTop: 10,
    },
    titulo: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "bold",
        marginTop: 10,
    },
    tituloPaciente: {
        fontSize: 22,
        color: "#FDC500",
        fontWeight: "bold",
    },
    buttonHome: {
        borderColor: "#3A0057",
        borderWidth: 2,
        borderRadius: 16,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    buttonHomeText: {
        fontSize: 18,
        color: "#660099",
        fontWeight: "bold",
        padding: 6,
    },
    body: {
        width: "90%",
        height: "65%",
        backgroundColor: "#660099",
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 13,
        marginTop: 30,
        alignItems: "center",
        flexDirection: "column",
    },
    textBody: {
        fontSize: 20,
        padding: 18,
        fontWeight: "bold",
        color: "#FFFF",
    },
    bodycard: {
        backgroundColor: "#3A0057",
        width: "100%",
        height: "89%",
        marginBottom: 13,
        borderRadius: 10,
        //alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    card: {
        backgroundColor: "#fff",
        margin: 8,
        borderRadius: 10,
        width: 300,
        flexDirection: "column",
    },
    cardHeader: {
        padding: 10,
        color: "#FFFF",
        fontSize: 11,
        flexDirection: "column",
    },
    tituloCard: {
        color: "#D00000",
        fontSize: 20,
        fontWeight: "bold",
    },
    InfoMed: {
        flexDirection: "row",
    },
    textInfo: {
        color: "#DC2F02",
        fontSize: 18,
        fontWeight: "bold",
    },
    butonInfo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        margin: 2,
    },
    bodyMed: {
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    med: {
        width: 200,
        height: 180,
        borderWidth: 2,
        borderColor: "#3A0057",
        borderRadius: 10,
    },
    bodyButtonEdit: {
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        marginTop: 10,
    },
    buttonEdit: {
        width: 160,
        height: 50,
        borderColor: "#3A0057",
        borderWidth: 2,
        borderRadius: 16,
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonEditText: {
        fontSize: 20,
        color: "#660099",
        fontWeight: "bold",
    },
});
