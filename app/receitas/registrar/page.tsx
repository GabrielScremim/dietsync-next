'use client';
import TextArea from "@/app/components/TextArea";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function RegistrarReceita() {
    const [descricao, setDescricao] = useState("");

    return (
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
                    <Grid size={{ xs: 12 }}>
                        <TextArea
                            label="Modo de Preparo"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Digite aqui..."
                            rows={5}
                            maxLength={1000}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}