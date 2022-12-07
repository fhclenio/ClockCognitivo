import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../paginas/Login";
import Cadastro from "../../paginas/Cadastro";
import Paciente from "../../paginas/Paciente";
import Cuidador from "../../paginas/Cuidador";
import Medicamento from "../../paginas/Medicamento";

const { Navigator, Screen } = createNativeStackNavigator()

export default function () {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
            <Screen name="Cadastro" component={Cadastro} />
            <Screen name="Paciente" component={Paciente} />
            <Screen name="Cuidador" component={Cuidador} />
            <Screen name="Medicamento" component={Medicamento} />
        </Navigator>
    )
}