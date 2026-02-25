"use client";
import { useRouter } from "next/navigation";
import TextArea from "@/app/components/TextArea";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BtnSend from "@/app/components/SubmitButton";
import { CreateDieta } from "@/app/services/dietaService";

export type Dieta = {
    NomeDieta: string;
    TipoDieta: string;
    Calorias: number;
    Proteinas: number;
    Carboidratos: number;
    Gorduras: number;
    DataDieta: string;
    Refeicao: string;
    Alimentos: string;
    Quantidade: number;
    Observacoes: string;
};

export default function RegistrarDietaPage() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [dieta, setDieta] = useState<Dieta>({
         NomeDieta: '',
         TipoDieta: '',
         Calorias: 0,
         Proteinas: 0,
         Carboidratos: 0,
         Gorduras: 0,
         DataDieta: new Date().toISOString().split("T")[0],
         Refeicao: '',
         Alimentos: '',
         Quantidade: 0,
         Observacoes: '',
    });

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await CreateDieta(dieta);
            // redireciona para a página de dietas
            router.push("/dietas");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar dieta");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Registrar Nova Dieta
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Nome da Dieta"
                                value={dieta.NomeDieta}
                                onChange={(e) =>
                                    setDieta({ ...dieta, NomeDieta: e.target.value })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Tipo de Dieta"
                                value={dieta.TipoDieta}
                                onChange={(e) =>
                                    setDieta({ ...dieta, TipoDieta: e.target.value })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Quantidade por dia"
                                value={dieta.Quantidade}
                                onChange={(e) =>
                                    setDieta({ ...dieta, Quantidade: Number(e.target.value) })}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Alimentos (separados por vírgula)"
                                value={dieta.Alimentos}
                                onChange={(e) => setDieta({ ...dieta, Alimentos: e.target.value })}
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
                            <TextField
                                size="small"
                                fullWidth
                                label="Calorias"
                                value={dieta.Calorias}
                                onChange={(e) =>
                                    setDieta({ ...dieta, Calorias: Number(e.target.value) })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Proteinas"
                                value={dieta.Proteinas}
                                onChange={(e) =>
                                    setDieta({ ...dieta, Proteinas: Number(e.target.value) })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Carboidratos"
                                value={dieta.Carboidratos}
                                onChange={(e) =>
                                    setDieta({ ...dieta, Carboidratos: Number(e.target.value) })}
                            />
                        </Grid>
                    </Grid>
                </Grid> <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Gorduras"
                                value={dieta.Gorduras}
                                onChange={(e) =>
                                    setDieta({ ...dieta, Gorduras: Number(e.target.value) })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                size="small"
                                fullWidth
                                label="Refeição"
                                value={dieta.Refeicao}
                                onChange={(e) => setDieta({ ...dieta, Refeicao: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </Grid> <Grid size={{ xs: 12 }}>
                    <Grid container>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Observações"
                                value={dieta.Observacoes}
                                onChange={(e) => setDieta({ ...dieta, Observacoes: e.target.value })}
                                placeholder="Digite aqui..."
                                rows={5}
                                maxLength={300}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <BtnSend loading={loading} onClick={handleSubmit} label="Cadastrar Dieta" />
        </Box>
    );
}