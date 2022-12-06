import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function Home() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titulo}>Cuidador - Maria Santos</Text>
      </View>
      <View style={styles.buttonHeader}>
        <TouchableOpacity style={styles.buttonHome} onPress={() => {}}>
          <Text style={styles.buttonHomeText}>Administrar paciente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHome} onPress={() => {}}>
          <Text style={styles.buttonHomeText}>Paciente</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.textBody}>LISTA DE PACIENTE</Text>
        <View style={styles.bodycard}>
          <ScrollView>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.tituloCard}>Isabela Souza</Text>
                <Text style={styles.tituloCard}>55 anos - Lar Almeita Couto</Text>
              </View>
              <View style={styles.bodyCard}>
                <TouchableOpacity style={styles.listCard} onPress={() => {}}>
                  <Text style={styles.listCardText}>Paco - Segunda - 11HRS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listCardd} onPress={() => {}}>
                  <Text style={styles.listCardText}>Nimesulida - Segunda - 11HRS</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.tituloCard}>Isabela Souza</Text>
                <Text style={styles.tituloCard}>55 anos - Lar Almeita Couto</Text>
              </View>
              <View style={styles.bodyCard}>
                <TouchableOpacity style={styles.listCard} onPress={() => {}}>
                  <Text style={styles.listCardText}>Paco - Segunda - 11HRS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listCardd} onPress={() => {}}>
                  <Text style={styles.listCardText}>Nimesulida - Segunda - 11HRS</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.tituloCard}>Isabela Souza</Text>
                <Text style={styles.tituloCard}>55 anos - Lar Almeita Couto</Text>
              </View>
              <View style={styles.bodyCard}>
                <TouchableOpacity style={styles.listCard} onPress={() => {}}>
                  <Text style={styles.listCardText}>Paco - Segunda - 11HRS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listCardd} onPress={() => {}}>
                  <Text style={styles.listCardText}>Nimesulida - Segunda - 11HRS</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.tituloCard}>Isabela Souza</Text>
                <Text style={styles.tituloCard}>55 anos - Lar Almeita Couto</Text>
              </View>
              <View style={styles.bodyCard}>
                <TouchableOpacity style={styles.listCard} onPress={() => {}}>
                  <Text style={styles.listCardText}>Paco - Segunda - 11HRS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listCardd} onPress={() => {}}>
                  <Text style={styles.listCardText}>Nimesulida - Segunda - 11HRS</Text>
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
  },
  header: {
    top: 0,
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3A0057",
  },
  titulo: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  buttonHome:{
    borderColor: "#3A0057",
    borderWidth: 2,
    borderRadius: 16,
    padding: 8,
  },
  buttonHomeText:{
    fontSize: 18,
    color: "#660099",
    fontWeight: "bold",
    padding: 6,
  },
  body: {
    width: "90%",
    height: "76%",
    backgroundColor: "#3A0057",
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 13,
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
    backgroundColor: "#1A1A1A",
    width: "100%",
    height: "89%",
    marginBottom: 13,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card: {
    backgroundColor: "#DC2F02",
    margin: 8,
    borderRadius: 6,
  }, 
  cardHeader :{
    padding: 5,
    color: "#FFFF",
    fontSize: 11,
  },
  tituloCard: {
    color: "#FFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  bodyCard: {
    backgroundColor: "#FDC500",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent:"flex-end",
  },
  listCardText: {
    color: "#660099",
    fontSize: 18,
    fontWeight: "bold",
    padding: 6,
  },
  listCard:{
    width: "100%",
    alignItems: "flex-end",
    justifyContent:"flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#660099",
    padding: 3,
  },
   listCardd:{
    width: "100%",
    alignItems: "flex-end",
    justifyContent:"flex-end",
    padding: 3,
  }
});
