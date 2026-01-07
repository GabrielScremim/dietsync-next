import axios, { AxiosResponse } from 'axios';

const USER_BASE_URL = 'http://localhost:3001/'

export type RegisterUserPayload = {
    name: string;
    surname: string;
    meta: string;
    sexo: 'Fem' | 'Mas' | string;
    data_nasc: string; // formato: YYYY-MM-DD
    peso: number;
    altura: number;
    email: string;
    password: string;
};

export async function createUser(
    payload: RegisterUserPayload
): Promise<AxiosResponse<RegisterUserPayload>> {
    return axios.post(
        `${USER_BASE_URL}usuarios/registrarUsuario`,
        payload,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    );
}
