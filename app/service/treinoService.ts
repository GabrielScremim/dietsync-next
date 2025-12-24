import axios from "axios";

const TREINO_API_BASE_URL = 'http://localhost:3001/';

export const getTreinos = () => {
    return axios.get(`${TREINO_API_BASE_URL}treinos`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsIm5vbWUiOiJzdHJpbmciLCJlbWFpbCI6InN0cmluZyIsImlhdCI6MTc2NjYwNDI5NSwiZXhwIjoxNzY2NjA3ODk1fQ.l1NaEge6U5iZLtdEdL95gAMe5f0SClHqs4HDfjZ9vjw`,
        },
    });
};