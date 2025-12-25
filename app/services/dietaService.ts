import axios from 'axios';

const DIETA_API_BASE_URL = 'http://localhost:3001/';

export type Dieta = {
    nome_dieta: string;
    tipo_dieta: string;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gorduras: number;
    data: string; // formato YYYY-MM-DD
    refeicao: string;
    quantidade: number;
    alimentos: string;
    observacoes: string;
    fk_id_usuario_dieta: number;
};
export const getDietas = (token: string) => {
    return axios.get(`${DIETA_API_BASE_URL}dietas`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getDietaById = (token: string, id: number) => {
    return axios.get(`${DIETA_API_BASE_URL}dietas/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
}

export const CreateDieta = (token: string, data: Dieta) => {
    return axios.post(`${DIETA_API_BASE_URL}dietas`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
}
