'use client';
import { getTreinos } from "@/app/services/treinoService";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Treino = {
    id: number
    data: Date
    tipo: string
    exercicios: string
    repeticoes: number
    series: number
    objetivo: string
    duracao: string
    frequencia: number
    nome_treino: string
    fk_id_usuario_treino: number
    dia_treino: string
}
export default function Treinos() {
    const [treinos, setTreinos] = useState<Treino[]>([]);

    useEffect(() => {
        const fetchTreinos = async () => {
            try {
                const response = await getTreinos();
                setTreinos(response.data);
                console.log(treinos)
            } catch (error) {
                console.error("Erro ao buscar treinos:", error);
            }
        };

        fetchTreinos();
    }, []);
    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Página de Treinos
            </Typography>
            {treinos.map((treino) => (
                <Accordion key={treino.id} sx={{ mb: 2 }}>
                    <AccordionSummary
                        aria-controls={`panel-${treino.tipo}-content`}
                        id={`panel-${treino.tipo}-header`}
                    >
                        <Typography fontWeight="bold">
                            {treino.nome_treino} — {treino.dia_treino}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <strong>Exercicios:</strong> {treino.exercicios}
                        </Typography>

                        <Typography>
                            <strong>Repetições:</strong> {treino.repeticoes}
                        </Typography>

                        <Typography>
                            <strong>Séries:</strong> {treino.series}
                        </Typography>

                        <Typography>
                            <strong>objetivo:</strong> {treino.objetivo}
                        </Typography>

                        <Typography>
                            <strong>Duração:</strong> {treino.duracao}
                        </Typography>

                        <Typography mt={2}>
                            <strong>Frequência:</strong> {treino.frequencia}
                        </Typography>

                    </AccordionDetails>
                </Accordion>
            ))}

        </Box>
    )
}