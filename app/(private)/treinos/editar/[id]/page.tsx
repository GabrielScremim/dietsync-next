'use client';
import SelectDiasSemana from "@/app/components/SelectDiasSemana";
import TextArea from "@/app/components/TextArea";
import { getTreinoByID, putTreino } from "@/app/services/treinoService";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BtnSend from "@/app/components/SubmitButton";
export type Treino = {
    data: string; // YYYY-MM-DD
    tipo: string;
    nome_treino: string;
    exercicios: string;
    repeticoes: number;
    series: number;
    objetivo: number;
    duracao: number;    // em minutos (exemplo)
    frequencia: number; // vezes por semana (exemplo)
    dia_treino: number; // 0–6 ou conforme regra do backend
};

export default function RegistrarTreinos() {
    const { id } = useParams<{ id: string }>()
    const [dia, setDia] = useState<string>("Segunda-feira");
    const [treino, setTreino] = useState<any>({
        data: new Date().toISOString().split("T")[0],
        tipo: "",
        nome_treino: "",
        exercicios: "",
        repeticoes: 0,
        series: 0,
        objetivo: 0,
        duracao: 0,
        frequencia: 0,
        dia_treino: 0,
    });
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!id) return

        const fetchTreino = async () => {
            try {
                setLoading(true)
                const res = await getTreinoByID(id)
                const data_treino = res.data
                setTreino(data_treino)
                console.log(data_treino)
            } catch (err) {
                console.error("Erro ao buscar treino", err)
            } finally {
                setLoading(false)
            }
        }

        fetchTreino()
    }, [id])

    const handleSubmit = async () => {
        // implementar lógica de submissão do formulário
        try {
            setLoading(true);
            console.log("treino editado", treino)
            await putTreino(id, treino);
            // redireciona para a página de dietas
            // router.push("/treinos");
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar treino");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Criar Novo Treino
            </Typography>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 4 }}>
                            <TextField
                                fullWidth
                                label="Data"
                                value={treino.data || ''}
                                onChange={(e) => setTreino({ ...treino, data: e.target.value })} />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <TextField
                                fullWidth
                                label="Tipo de Treino"
                                value={treino.tipo}
                                onChange={(e) => setTreino({ ...treino, tipo: e.target.value })} />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <TextField
                                fullWidth
                                label="Nome do Treino"
                                value={treino.nomeTreino}
                                onChange={(e) => setTreino({ ...treino, nomeTreino: e.target.value })} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextArea
                        label="Exercícios (separados por vírgula)"
                        value={treino.exercicios}
                        onChange={(e) => setTreino({ ...treino, exercicios: e.target.value })}
                        placeholder="Descreva os exercícios do treino aqui..."
                        rows={10}
                        maxLength={1000}
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Repetições"
                                value={treino.repeticoes}
                                onChange={(e) => setTreino({ ...treino, repeticoes: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Séries"
                                value={treino.series}
                                onChange={(e) => setTreino({ ...treino, series: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Objetivo"
                                value={treino.objetivo}
                                onChange={(e) => setTreino({ ...treino, objetivo: String(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Duração (minutos"
                                value={treino.duracao}
                                onChange={(e) => setTreino({ ...treino, duracao: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Frequência"
                                value={treino.frequencia}
                                onChange={(e) => setTreino({ ...treino, frequencia: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <SelectDiasSemana value={dia as any} onChange={setDia} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <BtnSend loading={loading} onClick={handleSubmit} label="Editar Dieta" />
        </Box>
    )
}