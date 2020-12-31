import { listeInterface } from "../interface/liste.inteface";

const ipServerLocal = '192.168.0.15'
const port = '3001'

export const getAllListe = async () => {
    try {
        const res = await fetch(`http://${ipServerLocal}:${port}/liste/`);
        const json = await res.json();
        return json
    }catch (e) {
        console.log('http error :', e)
    }
}

export const addElementListe = async (itemAddtoListe: listeInterface) => {
    try {
        await fetch(`http://${ipServerLocal}:${port}/liste/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemAddtoListe)
    });
    }catch (e) {
        console.log('http error :', e)
    }
}

export const deleteAllListe = async () => {
    try {
        await fetch(`http://${ipServerLocal}:${port}/liste/`, {method: 'DELETE'});
    }catch (e) {
        console.log('http error :', e)
    }
}
  