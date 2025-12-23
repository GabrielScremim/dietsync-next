"use client";

import SelectDiasSemana from "@/app/components/SelectDiasSemana";
import TextArea from "@/app/components/TextArea";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function RegistrarDietaPage() {
    const [descricao, setDescricao] = useState("");
    const [dia, setDia] = useState<string>("Segunda-feira");

    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Registrar Nova Dieta
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Nome da Dieta" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Tipo de Dieta" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Quantidade por dia" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Alimentos (separados por vírgula)"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Digite aqui..."
                                rows={5}
                                maxLength={300}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Calorias" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Proteinas" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Carboidratos" />
                        </Grid>
                    </Grid>
                </Grid> <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Gorduras" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectDiasSemana value={dia as any} onChange={setDia} />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField fullWidth label="Refeição" />
                        </Grid>
                    </Grid>
                </Grid> <Grid size={{ xs: 12 }}>
                    <Grid container>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Observações"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                placeholder="Digite aqui..."
                                rows={5}
                                maxLength={300}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}