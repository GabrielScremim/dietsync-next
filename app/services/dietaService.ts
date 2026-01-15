import axios, { AxiosResponse } from 'axios';

// Definindo a URL base da API
const DIETA_API_BASE_URL = 'http://localhost:3001/';
// Tipagem do tipo Dieta
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

// Função para obter dietas
export const getDietas = (): Promise<AxiosResponse<Dieta[]>> => {
    return axios.get(`${DIETA_API_BASE_URL}dietas/`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

// Função para obter uma dieta pelo ID
export const getDietaById = (id: number): Promise<AxiosResponse<Dieta>> => {
       return axios.get(`${DIETA_API_BASE_URL}dietas/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

// Função para criar uma nova dieta
export const CreateDieta = (data: Dieta): Promise<AxiosResponse<Dieta>> => {
    return axios.post(`${DIETA_API_BASE_URL}dietas`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

export const EditDieta = (data: Dieta): Promise<AxiosResponse<Dieta>> => {
    return axios.put(`${DIETA_API_BASE_URL}/dietas`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    })
}
