import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

export async function Cadastrar(email, senha) {
    createUserWithEmailAndPassword(auth, email, senha)
        .then(() => {
            return "";
        })
        .catch((error) => {
            return error;
        });
}

export async function Logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then(() => {
            return "";
        })
        .catch((error) => {
            return error;
        });

    return resultado;
}
