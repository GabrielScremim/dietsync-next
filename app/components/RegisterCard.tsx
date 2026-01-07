'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import DateInput from '@/app/components/DateInput';
import { createUser } from '../services/UserService';
import SubmitButton from './SubmitButton';
import SoftInput from './SoftInput';

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

export default function RegisterCard() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [form, setForm] = useState<RegisterUserPayload>({
        name: '',
        surname: '',
        meta: '',
        sexo: '',
        data_nasc: '',
        peso: 0,
        altura: 0,
        email: '',
        password: '',
    });

    function handleChange(e: any) {
        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name as string]:
                name === 'peso' || name === 'altura'
                    ? Number(value)
                    : value,
        }));
    }

    const handleSubmit = async () => {
        try {
            console.log(form); // 🔁 enviar para API
            const res = await createUser(form)
            console.log(res)
            router.push('/login');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="login-card">
            <div className="login-card-logo">
                <img
                    src="http://152.67.45.167/img/vertical_2.png"
                    alt="logo"
                />
            </div>

            <div className="login-card-header">
                <h1>Criar Conta</h1>
                <div>Preencha os campos para criar uma conta</div>
            </div>

            <form className="login-card-form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <SoftInput
                        label="Nome"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">
                    <SoftInput
                        name="surname"
                        label="Sobrenome"
                        value={form.surname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">
                    <SoftInput
                        name="meta"
                        label="Meta"
                        value={form.meta}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">
                    <FormControl fullWidth required>
                        <InputLabel id="select-sexo-label">
                            Selecione o Sexo
                        </InputLabel>

                        <Select
                            labelId="select-sexo-label"
                            name="sexo"              // 🔥 ESSENCIAL
                            value={form.sexo}        // 🔥 CORRETO
                            label="Selecione o Sexo"
                            onChange={handleChange}
                        >
                            <MenuItem value="" disabled>
                                Selecione o Sexo
                            </MenuItem>

                            <MenuItem value="Fem">Feminino</MenuItem>
                            <MenuItem value="Mas">Masculino</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="form-item">
                    <DateInput
                        label="Data de Nascimento"
                        name="data_nasc"
                        value={form.data_nasc}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">

                    <SoftInput
                        type='number'
                        name='peso'
                        label='Peso'
                        value={form.peso}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">
                    <SoftInput
                        type="number"
                        name="altura"
                        label="Altura"
                        value={form.altura}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">
                    <SoftInput
                        type="email"
                        name="email"
                        label="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-item">
                    <SoftInput
                        type="password"
                        name="password"
                        label="Senha"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <SubmitButton loading={loading} onClick={handleSubmit} label="Cadastrar Usuário" />
            </form>

            <div className="login-card-footer">
                Já tem uma conta? <a href="/login">Faça login.</a>
            </div>
        </div >
    );
}
