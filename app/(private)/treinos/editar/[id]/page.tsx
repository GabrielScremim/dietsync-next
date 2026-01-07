'use client';
import SelectDiasSemana from "@/app/components/SelectDiasSemana";
import TextArea from "@/app/components/TextArea";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BtnSend from "@/app/components/SubmitButton";
import { UpdateTreino } from "@/app/services/treinoService";
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
type Props = {
    params: {
        id: string
    }
}
export default function RegistrarTreinos({ params }: Props) {
    const id = params.id
    const [loading, setLoading] = useState(false);
    // const router = useRouter();
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
    const handleSubmit = async () => {
        // implementar lógica de submissão do formulário
        try {
            setLoading(true);
            await UpdateTreino(treino);
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
                Editar Treino id {id}
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
                        onChange={(e) => setTreino({ ...treino, exercicios: e.target.value })}
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
            <BtnSend onClick={handleSubmit} loading={loading} label="Editar Treino" />
        </Box>
    )
}