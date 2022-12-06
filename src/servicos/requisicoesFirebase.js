import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";

export async function Cadastrar(nome, email, senha, tipo) {
    const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        .then((crendenciais) => {
            try {
                const usuario = setDoc(doc(db, tipo, crendenciais.user.uid), {
                    email,
                    senha,
                    login: email.split('').splice(0, email.indexOf('@')).join(''),
                    nome,
                });
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

export async function Logar(email, senha) {
    const resultado = await signInWithEmailAndPassword(auth, email, senha)
        .then((crendenciais) => {
            return "";
        })
        .catch((error) => {
            return error;
        });

    return resultado;
}


export async function consultarInformacoesDoUsuarioAtual(tipoUsuario) {
    const docRef = doc(db, tipoUsuario, auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        var data = docSnap.data();
        return data;
    }
    return null;
}