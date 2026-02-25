import axios, { AxiosResponse } from "axios";

const API_URL =  process.env.NEXT_PUBLIC_API_URL;

export type Receita = {
    nome_receita: string;
    ingredientes: string;
    modo_preparo: string;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gordura: number;
};

export const CreateReceita = (data: Receita): Promise<AxiosResponse<Receita[]>> => {
    return axios.post(`${API_URL}/receita`, data, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}

export const getReceitas = (): Promise<AxiosResponse<Receita[]>> => {
    return axios.get(`${API_URL}/receita`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
}   