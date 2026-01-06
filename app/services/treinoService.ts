import axios from "axios";

const TREINO_API_BASE_URL = 'http://localhost:3001/';
const token = localStorage.getItem('token'); // Obtém o token do localStorage
export const getTreinos = () => {
    return axios.get(`${TREINO_API_BASE_URL}treinos`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

export const CreateTreino = (treinos: any) => {
    return axios.post(`${TREINO_API_BASE_URL}treinos`, treinos, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}

export const getTreinoByID = (user: number, id: string) => {
    return axios.get(`${TREINO_API_BASE_URL}treinos/usuario/${user}/treino/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}