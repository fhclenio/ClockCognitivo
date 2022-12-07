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

                setDoc(doc(db, 'tipoUsuario', crendenciais.user.uid), {
                    tipo
                });
            }
            catch (error) {
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
            return { usuario: crendenciais }
        })
        .catch((error) => {
            return { erro: error }
        });

    return resultado;
}

export async function ConsultarTipoDoUsuarioAtual() {
    let tipo = "";
    const tipoUsuario = await getDoc(doc(db, "tipoUsuario", auth.currentUser.uid));

    if (tipoUsuario.exists())
        tipo = tipoUsuario.data().tipo;

    return tipo;
}

export async function ConsultarInformacoesDoUsuarioAtual() {
    let tipo = ConsultarTipoDoUsuarioAtual();

    const docSnap = await getDoc(doc(db, tipo, auth.currentUser.uid));

    if (docSnap.exists()) {
        var data = docSnap.data();
        return data;
    }
    return null;
}