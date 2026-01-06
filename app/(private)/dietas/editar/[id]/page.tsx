"use client";

import TextArea from "@/app/components/TextArea";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import BtnSend from "@/app/components/BtnSend";
import { EditDieta, getDietaById } from "@/app/services/dietaService";

export type Dieta = {
    nome_dieta: string;
    tipo_dieta: string;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gorduras: number;
    data: string; // formato YYYY-MM-DD
    refeicao: string;
    quantidade: number;
    alimentos: string;
    observacoes: string;
    fk_id_usuario_dieta: number;
};

export default function EditarDietaPage() {
    const [descricao, setDescricao] = useState("");
    // const router = useRouter();
    // const { id } = router.query;  // Obtém o 'id' da URL
    const [dieta, setDieta] = useState<Dieta>({
        nome_dieta: '',
        tipo_dieta: '',
        calorias: 0,
        proteinas: 0,
        carboidratos: 0,
        gorduras: 0,
        data: new Date().toISOString().split("T")[0],
        refeicao: '',
        quantidade: 0,
        alimentos: '',
        observacoes: '',
        fk_id_usuario_dieta: 41, // exemplo
    });
    const [loading, setLoading] = useState(false)
    const id = 17

    useEffect(() => {
        const fetchDieta = async () => {
            try {
                setLoading(true);
                const res = await getDietaById(id);
                console.log("Resposta da API:", res);  // Verifique a resposta completa da API

                // Verifique se a resposta é um array e se tem pelo menos 1 item
                if (res && Array.isArray(res) && res.length > 0) {
                    setDieta(res[0]);  // A resposta é um array, então acessamos o primeiro item
                    console.log(res[0]);  // A resposta é um array, então acessamos o primeiro item
                } else {
                    console.log("Nenhuma dieta encontrada:", res);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDieta();  // Chama a função assíncrona dentro do useEffect
        }
    }, [id]);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            await EditDieta(dieta);
            // redireciona para a página de dietas
            // router.push("/dietas");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar dieta");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Carregando...</div>;
    }
    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Editar Dieta
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Nome da Dieta"
                                value={dieta?.nome_dieta || ''}
                                onChange={(e) =>
                                    setDieta({ ...dieta, nome_dieta: e.target.value })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Tipo de Dieta"
                                value={dieta.tipo_dieta}
                                onChange={(e) =>
                                    setDieta({ ...dieta, tipo_dieta: e.target.value })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Quantidade por dia"
                                value={dieta.quantidade}
                                onChange={(e) =>
                                    setDieta({ ...dieta, quantidade: Number(e.target.value) })}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Alimentos (separados por vírgula)"
                                value={dieta.alimentos}
                                onChange={(e) => setDieta({ ...dieta, alimentos: e.target.value })}
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
                                fullWidth
                                label="Calorias"
                                value={dieta.calorias}
                                onChange={(e) =>
                                    setDieta({ ...dieta, calorias: Number(e.target.value) })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Proteinas"
                                value={dieta.proteinas}
                                onChange={(e) =>
                                    setDieta({ ...dieta, proteinas: Number(e.target.value) })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Carboidratos"
                                value={dieta.carboidratos}
                                onChange={(e) =>
                                    setDieta({ ...dieta, carboidratos: Number(e.target.value) })}
                            />
                        </Grid>
                    </Grid>
                </Grid> <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Gorduras"
                                value={dieta.gorduras}
                                onChange={(e) =>
                                    setDieta({ ...dieta, gorduras: Number(e.target.value) })}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Refeição"
                                value={dieta.refeicao}
                                onChange={(e) => setDieta({ ...dieta, refeicao: e.target.value })}
                            />
                        </Grid>
                    </Grid>
                </Grid> <Grid size={{ xs: 12 }}>
                    <Grid container>
                        <Grid size={{ xs: 12 }}>
                            <TextArea
                                label="Observações"
                                value={dieta.observacoes}
                                onChange={(e) => setDieta({ ...dieta, observacoes: e.target.value })}
                                placeholder="Digite aqui..."
                                rows={5}
                                maxLength={1000}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <BtnSend loading={loading} onClick={handleSubmit} label="Editar Dieta" />
        </Box>
    );
}