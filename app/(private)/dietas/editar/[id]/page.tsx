"use client";

import TextArea from "@/app/components/TextArea";
import { Box, Grid, Skeleton, TextField, Typography } from "@mui/material";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import BtnSend from "@/app/components/SubmitButton";
import { EditDieta, getDietaById } from "@/app/services/dietaService";
import { useParams } from "next/navigation";
import { Dieta } from "@/app/models";

export default function EditarDietaPage() {
    const { id } = useParams<{ id: string }>()
    const [dieta, setDieta] = useState<any>({
        nomeDIeta: '',
        tipoDieta: '',
        calorias: 0,
        proteinas: 0,
        carboidratos: 0,
        gorduras: 0,
        dataDieta: new Date().toISOString().split("T")[0],
        refeicao: '',
        alimentos: '',
        quantidade: 0,
        observacoes: '',
    });
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchDieta = async () => {
            try {
                setLoading(true)
                const res = await getDietaById(Number(id))

                if (!res.data || res.data === null) {
                    console.warn("Dieta não encontrada")
                    return
                }

                const dieta = res.data
                setDieta(dieta)

                console.log("Dieta carregada:", dieta)
            } catch (error) {
                console.error("Erro ao buscar dieta:", error)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchDieta()
        }
    }, [id])


    const handleSubmit = async () => {
        try {
            setLoading(true);
            await EditDieta(dieta, id);
            // redireciona para a página de dietas
            // router.push("/dietas");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar dieta");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box py={5}>
            {loading || !dieta ? (
                <Box py={5}>
                    <Typography variant="h4" gutterBottom>
                        <Skeleton width={200} />
                    </Typography>

                    <Grid container spacing={2}>
                        {/* Linha 1 */}
                        <Grid size={{ xs: 12 }}>
                            <Grid container spacing={2}>
                                {[1, 2, 3].map((i) => (
                                    <Grid key={i} size={{ xs: 12, md: 4 }}>
                                        <Skeleton variant="rounded" height={56} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Alimentos */}
                        <Grid size={{ xs: 12 }}>
                            <Skeleton variant="rounded" height={140} />
                        </Grid>

                        {/* Calorias / Proteinas / Carboidratos */}
                        <Grid size={{ xs: 12 }}>
                            <Grid container spacing={2}>
                                {[1, 2, 3].map((i) => (
                                    <Grid key={i} size={{ xs: 12, md: 4 }}>
                                        <Skeleton variant="rounded" height={56} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Gorduras / Refeição */}
                        <Grid size={{ xs: 12 }}>
                            <Grid container spacing={2}>
                                {[1, 2].map((i) => (
                                    <Grid key={i} size={{ xs: 12, md: 4 }}>
                                        <Skeleton variant="rounded" height={56} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        {/* Observações */}
                        <Grid size={{ xs: 12 }}>
                            <Skeleton variant="rounded" height={160} />
                        </Grid>

                        {/* Botão */}
                        <Grid size={{ xs: 12 }}>
                            <Skeleton variant="rounded" height={48} width={180} />
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <>
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
                                        value={dieta?.nomeDieta || ''}
                                        onChange={(e) =>
                                            setDieta({ ...dieta, nomeDieta: e.target.value })}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }}>
                                    <TextField
                                        fullWidth
                                        label="Tipo de Dieta"
                                        value={dieta.tipoDieta}
                                        onChange={(e) =>
                                            setDieta({ ...dieta, tipoDieta: e.target.value })}
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
                </>
            )
            }
        </Box>
    );
}