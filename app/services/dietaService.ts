import axios, { AxiosResponse } from 'axios';

// Definindo a URL base da API
const DIETA_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// Tipagem do tipo Dieta
export type Dieta = {
    NomeDieta: string;
    TipoDieta: string;
    Calorias: number;
    Proteinas: number;
    Carboidratos: number;
    Gorduras: number;
    DataDieta: string;
    Refeicao: string;
    Alimentos: string;
    Quantidade: number;
    Observacoes: string;
};

// Função para obter dietas
export const getDietas = (): Promise<AxiosResponse<Dieta[]>> => {
    return axios.get(`${DIETA_API_BASE_URL}/dieta`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

// Função para obter uma dieta pelo ID
export const getDietaById = (id: number): Promise<AxiosResponse<Dieta>> => {
    return axios.get(`${DIETA_API_BASE_URL}/dieta/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

// Função para criar uma nova dieta
export const CreateDieta = (data: Dieta): Promise<AxiosResponse<Dieta>> => {
    return axios.post(`${DIETA_API_BASE_URL}/dieta`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};

export const EditDieta = (data: Dieta, id: string): Promise<AxiosResponse<Dieta>> => {
    return axios.put(`${DIETA_API_BASE_URL}/dieta/${id}`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    })
}
