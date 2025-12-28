import axios from 'axios';

const AUTH_API_BASE_URL = 'http://localhost:3001';

export async function login(email: string, password: string) {
    const res = await axios.post(
        `${AUTH_API_BASE_URL}/login`,
        { email, password },
        { withCredentials: true } // 🔥 OBRIGATÓRIO
    );

    return res.data;
}
