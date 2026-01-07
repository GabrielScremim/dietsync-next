'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '../services/authService';
import { Button } from '@mui/material';

export default function LoginCard() {
    const router = useRouter();
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const email = (e.currentTarget as any).email.value;
        const password = (e.currentTarget as any).password.value;

        try {
            const res = await login(email, password);
            console.log("email: ", email)
            console.log("password", password)
            router.push('/home');
        } catch (error) {
            setError('Usuário ou senha inválidos' + error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="login-card-container">
                <div className="login-card">
                    <div className="login-card-logo">
                        <h2>Regressiva para o GTA VI</h2>

                        <iframe
                            id="online-alarm-kur-iframe"
                            src="https://embed-countdown.onlinealarmkur.com/pt/#2026-05-26T00:00:00@America%2FSao_Paulo"
                            width={360}
                            height={80}
                            style={{
                                display: 'block',
                                margin: '0 auto',
                                border: 0,
                            }}
                        />

                        <a
                            href="https://www.greenfoot.org/scenarios/31251"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="corner-link"
                        >
                            <img
                                src="http://152.67.45.167/img/vertical_2.png"
                                alt="logo"
                            />
                        </a>
                    </div>

                    <div className="login-card-header">
                        <h1>Entrar</h1>
                        <div>Faça login para usar a plataforma</div>
                    </div>

                    <div className="login-card-form">
                        <div className="form-item">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                id="emailForm"
                                autoFocus
                                required
                            />
                        </div>

                        <div className="form-item">
                            <input
                                type="password"
                                name="password"
                                placeholder="Senha"
                                id="password"
                                required
                            />
                        </div>

                        <div className="form-item-other">
                            <div className="checkbox">
                                <input
                                    type="checkbox"
                                    id="rememberMeCheckbox"
                                    name="remember"
                                    defaultChecked
                                />
                                <label htmlFor="rememberMeCheckbox">
                                    Lembrar de mim
                                </label>
                            </div>

                            <a href="/recuperar-senha">Esqueci minha senha!</a>
                        </div>

                        <Button type="submit">Entrar</Button>
                    </div>

                    <div className="login-card-footer">
                        <p>Total de acessos:</p>
                        <p>
                            Não tem uma conta?{' '}
                            <a href="/registerUser">
                                Crie uma conta como usuário
                            </a>
                        </p>
                        <p>Uma empresa do Grupo SPWN</p>
                    </div>
                </div>
            </div>
            {error && <p>{error}</p>}
        </form>
    );
}
