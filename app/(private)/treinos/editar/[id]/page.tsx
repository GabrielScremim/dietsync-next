'use client';
import SelectDiasSemana from "@/app/components/SelectDiasSemana";
import TextArea from "@/app/components/TextArea";
import { getTreinoByID } from "@/app/services/treinoService";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BtnSend from "@/app/components/BtnSend";
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
    const [descricao, setDescricao] = useState("");
    const [dia, setDia] = useState<string>("Segunda-feira");
    const [treino, setTreino] = useState<Treino>({
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
    const [data, setData] = useState(Date);
    const [tipo, setTipo] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [exercicio, setExercicio] = useState<string>("");
    const [repeticoes, setRepeticoes] = useState<number>(0);
    const [series, setSeries] = useState<number>(0);
    const [objetivo, setObjetivo] = useState<number>(0);
    const [duracao, setDuracao] = useState<number>(0);
    const [frequencia, setFrequencia] = useState<number>(0);

    useEffect(() => {
        if (!id) return

        const fetchTreino = async () => {
            try {
                setLoading(true)
                const res = await getTreinoByID(40, id)
                const data = res.data
                setTreino(data)
                setData(data.data)
                setTipo(data.tipo)
                setNome(data.nome_treino)
                setExercicio(data.exercicios)
                setRepeticoes(data.repeticoes)
                setSeries(data.series)
                setObjetivo(data.objetivo)
                setDuracao(data.duracao)
                setFrequencia(data.frequencia)
                console.log(data)
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
            // await EditarTreino(treino);
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
                                value={data}
                                onChange={(e) => setTreino({ ...treino, data: e.target.value })} />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <TextField
                                fullWidth
                                label="Tipo de Treino"
                                value={tipo}
                                onChange={(e) => setTreino({ ...treino, tipo: e.target.value })} />
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <TextField
                                fullWidth
                                label="Nome do Treino"
                                value={nome}
                                onChange={(e) => setTreino({ ...treino, nome_treino: e.target.value })} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ xs: 12 }}>
                    <TextArea
                        label="Exercícios (separados por vírgula)"
                        value={exercicio}
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
                                value={repeticoes}
                                onChange={(e) => setTreino({ ...treino, repeticoes: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Séries"
                                value={series}
                                onChange={(e) => setTreino({ ...treino, series: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Objetivo"
                                value={objetivo}
                                onChange={(e) => setTreino({ ...treino, objetivo: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Duração (minutos"
                                value={duracao}
                                onChange={(e) => setTreino({ ...treino, duracao: Number(e.target.value) })} />
                        </Grid>
                        <Grid size={{ xl: 2, xs: 12 }}>
                            <TextField fullWidth
                                label="Frequência"
                                value={frequencia}
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