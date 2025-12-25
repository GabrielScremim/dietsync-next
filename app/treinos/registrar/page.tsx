'use client';
import SelectDiasSemana from "@/app/components/SelectDiasSemana";
import TextArea from "@/app/components/TextArea";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CreateTreino } from "../../services/treinoService";
import BtnSend from "@/app/components/BtnSend";
import { useRouter } from "next/navigation";
export type Treino = {
    usuario_id: number;
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
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [dia, setDia] = useState<string>("Segunda-feira");
    const [treino, setTreino] = useState<Treino>({
        usuario_id: 41,
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
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDEsIm5vbWUiOiJzdHJpbmciLCJlbWFpbCI6InN0cmluZyIsImlhdCI6MTc2NjcwMzA0MiwiZXhwIjoxNzY2NzA2NjQyfQ.2BXvSxFFLvu3utshAh-6720SLzZt0WbfagR9K3L4QRA"

    const handleSubmit = async () => {
        // implementar lógica de submissão do formulário
        try {
            setLoading(true);
            await CreateTreino(token, treino);
            // redireciona para a página de dietas
            router.push("/treinos");
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
                        <Grid size={{ xs: 12, xl: 6 }}>
                            <TextField
                                fullWidth
                                label="Tipo de Treino"
                                value={treino.tipo}
                                onChange={(e) => setTreino({ ...treino, tipo: e.target.value })} />
                        </Grid>
                        <Grid size={{ xs: 12, xl: 6 }}>
                            <TextField
                                fullWidth
                                label="Nome do Treino"
                                value={treino.nome_treino}
                                onChange={(e) => setTreino({ ...treino, nome_treino: e.target.value })} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextArea
                        label="Exercícios (separados por vírgula)"
                        value={treino.exercicios}
                        onChange={(e) => setTreino({ ...treino, exercicios: e.target.value })}
                        placeholder="Descreva os exercícios do treino aqui..."
                        rows={5}
                        maxLength={1000}
                    />
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <Grid container spacing={2}>
                        <Grid size={{ xl: 2, md: 2, xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Repetições"
                                value={treino.repeticoes}
                                onChange={(e) => setTreino({ ...treino, repeticoes: parseInt(e.target.value) || 0 })} />
                        </Grid>
                        <Grid size={{ xl: 2, md: 2, xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Séries"
                                value={treino.series}
                                onChange={(e) => setTreino({ ...treino, series: parseInt(e.target.value) || 0 })} />
                        </Grid>
                        <Grid size={{ xl: 2, md: 2, xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Objetivo"
                                value={treino.objetivo}
                                onChange={(e) => setTreino({ ...treino, objetivo: parseInt(e.target.value) || 0 })} />
                        </Grid>
                        <Grid size={{ xl: 2, md: 2, xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Duração (minutos)"
                                value={treino.duracao}
                                onChange={(e) => setTreino({ ...treino, duracao: parseInt(e.target.value) || 0 })} />
                        </Grid>
                        <Grid size={{ xl: 2, md: 2, xs: 12 }}>
                            <TextField
                                fullWidth
                                label="Frequência"
                                value={treino.frequencia}
                                onChange={(e) => setTreino({ ...treino, frequencia: parseInt(e.target.value) || 0 })} />
                        </Grid>
                        <Grid size={{ xl: 2, md: 2, xs: 12 }}>
                            <SelectDiasSemana value={dia as any} onChange={setDia} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <BtnSend onClick={handleSubmit} loading={loading} label="Cadastrar Treino" />
        </Box>
    )
}