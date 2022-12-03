import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

export async function cadastrar(email, senha) {
    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            return undefined;
        })
        .catch((error) => {
            return error;
        });
}

export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            return undefined;
        })
        .catch((error) => {
            return error;
        });

    return resultado;
}
