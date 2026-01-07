import axios from "axios";
import { useEffect } from "react";

const TREINO_API_BASE_URL = 'http://localhost:3001/';
export const getTreinos = () => {
    return axios.get(`${TREINO_API_BASE_URL}treinos`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

useEffect(() => {

})

export const CreateTreino = (treinos: any) => {
    return axios.post(`${TREINO_API_BASE_URL}treinos`, treinos, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}

export const UpdateTreino = (treinos: any) => {
    return axios.put(`${TREINO_API_BASE_URL}treinos`, treinos, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}

export const getTreinByID = (id: number, id_treino: number) => {
    return axios.get(`${TREINO_API_BASE_URL}treinos/usuarios/${id},treino/${id_treino}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}