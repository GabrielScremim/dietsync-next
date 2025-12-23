'use client';
import SelectDiasSemana from "@/app/components/SelectDiasSemana";
import TextArea from "@/app/components/TextArea";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function RegistrarTreinos() {
    const [descricao, setDescricao] = useState("");
    const [dia, setDia] = useState<string>("Segunda-feira");
    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Criar Novo Treino
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 4 }}>
                            <TextField fullWidth label="Data" />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <TextField fullWidth label="Tipo de Treino" />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <TextField fullWidth label="Nome do Treino" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextArea
                        label="Exercícios (separados por vírgula)"
                        value=""
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descreva os exercícios do treino aqui..."
                        rows={10}
                        maxLength={1000}
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth label="Repetições" />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth label="Séries" />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth label="Objetivo" />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth label="Duração (minutos)" />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth label="Frequência" />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <SelectDiasSemana value={dia as any} onChange={setDia} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}