import { auth } from "../config/firebase";
import { db } from "../config/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { collection, getDocs, getDoc, setDoc, doc, addDoc } from "firebase/firestore";

export async function Cadastrar(nome, email, senha, tipo) {
    const resultado = await createUserWithEmailAndPassword(auth, email, senha)
        .then((crendenciais) => {
            try {
                setDoc(doc(db, tipo, crendenciais.user.uid), {
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
    let tipo = await ConsultarTipoDoUsuarioAtual();

    const docSnap = await getDoc(doc(db, tipo, auth.currentUser.uid));
    if (docSnap.exists())
        return docSnap.data();

    return null;
}

export async function ConsultarPacientesDoCuidador() {
    const docRef = doc(db, 'cuidadores', auth.currentUser.uid);
    const pacientes = await getDocs(collection(docRef, "pacientes"));
    return pacientes;
}

export async function ConsultarPacienteComCuidador(uid) {
    const docSnap = await getDoc(doc(db, 'pacientes', uid));
    if (docSnap.exists())
        return docSnap;

    return null;
}

export async function CadastrarMedicamentoDoPaciente(uidPaciente, medicamento, descricao, medico, dias, horario) {
    try {
        const colRef = collection(db, 'pacientes', uidPaciente, "medicamentos");

        const newDoc = await addDoc(colRef, {
            nome: medicamento,
            descricao,
            medico,
            dias,
            horario
        });

        return newDoc;
    }
    catch (error) {
        return error;
    }
}