'use client'
import React, { useEffect, useState } from 'react';
import { Box, Container, TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl, FormHelperText, Typography, IconButton, Divider } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { getDataUser } from '@/app/services/authService';

export type Usuario = {
    id: number;
    name: string;
    sobrenome: string;
    email: string;
};

const Perfil = () => {
    const [usuario, setUsuario] = useState<any | null>([]);
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroSenha, setErroSenha] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Função para carregar dados do usuário
    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await getDataUser(41)
                console.log('dados', response.data)
                setUsuario(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao carregar dados do usuário', error);
            }
        };

        fetchUsuario();
    }, []);

    // Função para atualizar o usuário
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/usuario/atualizar', usuario); // Substitua com a API real
            alert('Dados atualizados com sucesso');
        } catch (error) {
            console.error('Erro ao atualizar dados', error);
        }
    };

    // Função para alterar a senha
    const handleAlterarSenha = async (event: any) => {
        event.preventDefault();

        if (novaSenha === confirmarSenha) {
            try {
                const response = await axios.post('/api/usuario/alterar-senha', { novaSenha }); // Substitua com a API real
                alert('Senha alterada com sucesso');
            } catch (error) {
                console.error('Erro ao alterar a senha', error);
            }
        } else {
            setErroSenha(true);
        }
    };

    // Função para lidar com alterações de campo
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUsuario({ ...usuario, [name]: value });
    };

    if (isLoading) {
        return <Typography variant="h6">Carregando...</Typography>;
    }

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Configurações do Sistema
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Nome"
                                name="nome"
                                value={usuario.name || ''}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Sobrenome"
                                name="sobrenome"
                                value={usuario.sobrenome || ''}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={usuario.email || ''}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <FormControl fullWidth>
                                <InputLabel>Sexo</InputLabel>
                                <Select
                                    label="Sexo"
                                    name="sexo"
                                    value={usuario.sexo || ''}
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="Fem">Feminino</MenuItem>
                                    <MenuItem value="Mas">Masculino</MenuItem>
                                    <MenuItem value="SemSexo">Prefiro não Informar</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Data de Nascimento"
                                name="data_nasc"
                                type="date"
                                value={usuario.data_nasc || ''}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Peso (kg)"
                                name="peso"
                                type="number"
                                value={usuario.peso || 0}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                fullWidth
                                label="Altura (m)"
                                name="altura"
                                type="number"
                                value={usuario.altura || 0}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                    </Grid>

                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Salvar Alterações
                    </Button>
                </form>

                <Divider sx={{ mt: 4 }} />

                {/* Alterar Senha */}
                <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                    Alterar Senha
                </Typography>
                <form onSubmit={handleAlterarSenha}>
                    <TextField
                        fullWidth
                        label="Nova Senha"
                        type="password"
                        name="nova_senha"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                        required
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Confirmar Senha"
                        type="password"
                        name="confirmar_senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                        error={erroSenha}
                        helperText={erroSenha ? 'As senhas não coincidem' : ''}
                        required
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" color="secondary">
                        Salvar Senha
                    </Button>
                </form>

                {/* Logout */}
                <Box sx={{ mt: 4 }}>
                    <Link href="/logout" passHref>
                        <Button variant="contained" color="error">Logout</Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Perfil;
