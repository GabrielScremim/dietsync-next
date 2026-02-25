import axios from "axios";
import { useEffect } from "react";

const TREINO_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const getTreinos = () => {
    return axios.get(`${TREINO_API_BASE_URL}/treino`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

export const CreateTreino = (treino: any) => {
    return axios.post(`${TREINO_API_BASE_URL}/treino`, treino, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}

export const getTreinoByID = (id: string) => {
    return axios.get(`${TREINO_API_BASE_URL}/treino/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}

export const putTreino = (id: string, treino: string) => {
    return axios.put(`${TREINO_API_BASE_URL}/treino/${id}`, treino, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}