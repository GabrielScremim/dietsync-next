'use client';
import TextArea from "@/app/components/TextArea";
import { CreateReceita } from "@/app/services/receitasService";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BtnSend from "@/app/components/BtnSend";

export type Receita = {
    nome_receita: string;
    ingredientes: string;
    modo_preparo: string;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gordura: number;
};

export default function RegistrarReceita() {
    const [alimentos, setAlimentos] = useState("");
    const [preparo, setPreparo] = useState("");
    const [loading, setLoading] = useState(false);
    const [receita, setReceita] = useState<Receita>({
        nome_receita: '',
        ingredientes: '',
        modo_preparo: '',
        calorias: 0,
        proteinas: 0,
        carboidratos: 0,
        gordura: 0,
    });

    const handleSubmit = async () => {
        // Lógica para enviar a receita para o backend
        try {
            setLoading(true);
            const res = await CreateReceita(receita);
            console.log("Receita criada com sucesso:", res.data);
        } catch (error) {
            console.error("Erro ao criar receita:", error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Registrar Nova Receita
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, xl: 4 }}>
                            <TextField fullWidth label="Nome da Receita" />
                        </Grid>
                        <Grid size={{ xs: 12, xl: 2 }}>
                            <TextField fullWidth label="Calorias" />
                        </Grid>
                        <Grid size={{ xs: 12, xl: 2 }}>
                            <TextField fullWidth label="Proteínas" />
                        </Grid>
                        <Grid size={{ xs: 12, xl: 2 }}>
                            <TextField fullWidth label="Carboidratos" />
                        </Grid>
                        <Grid size={{ xs: 12, xl: 2 }}>
                            <TextField fullWidth label="Gorduras" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Alimentos (separados por vírgula)"
                                value={alimentos}
                                onChange={(e) => setAlimentos(e.target.value)}
                                placeholder="Digite aqui..."
                                rows={5}
                                maxLength={300}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Modo de Preparo"
                                value={preparo}
                                onChange={(e) => setPreparo(e.target.value)}
                                placeholder="Digite aqui..."
                                rows={5}
                                maxLength={1000}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <BtnSend loading={loading} onClick={handleSubmit} label="Cadastrar Receita" />
        </Box>
    );
}