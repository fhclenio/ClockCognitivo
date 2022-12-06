import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export async function cadastrar(nome, email, senha, tipo) {
    const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        .then((crendenciais) => {
            try {
                const usuario = addDoc(collection(db, tipo), {
                    email,
                    senha,
                    login: email.split('').splice(0, email.indexOf('@')).join(''),
                    nome,
                    uid: crendenciais.user.uid
                });
                console.log(usuario);

            }
            catch (error) {
                console.log(error);

                return error;
            }
            return "";
        })
        .catch((error) => {
            return error;
        });

    return resultado;
}

export async function logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((crendenciais) => {
            return "";
        })
        .catch((error) => {
            return error;
        });

    return resultado;
}
