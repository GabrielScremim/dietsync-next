import axios from 'axios';

const AUTH_API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log(AUTH_API_BASE_URL);
export async function login(email: string, password: string) {
    const res = await axios.post(
        `${AUTH_API_BASE_URL}/Auth`,
        { email, password },
        { withCredentials: true } // 🔥 OBRIGATÓRIO
    );
    console.log('Resposta do login:', res.data);
    localStorage.setItem('token', res.data.token); // Armazena o token no localStorage
    return res.data;
}

export async function getDataUser(id: number) {
    return axios.get(`${AUTH_API_BASE_URL}/usuarios/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        withCredentials: true, // ✅ fora do headers
    });
};