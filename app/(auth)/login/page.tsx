'use client';

import { login } from '@/app/services/authService';
import { TextField, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const email = (e.currentTarget as any).email.value;
    const password = (e.currentTarget as any).password.value;

    try {
      const res = await login(email, password);
      router.push('/home');
    } catch (error) {
      setError('Usuário ou senha inválidos' + error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <TextField name="email" label="Email" fullWidth />
        <TextField name="password" label="Senha" type="password" fullWidth />
        <Button type="submit">Entrar</Button>
      </Box>
      {error && <p>{error}</p>}
    </form>
  );
}
