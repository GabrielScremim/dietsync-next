'use client';
import { getDietas } from "@/app/services/dietaService";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// types/Dieta.ts
export interface Dieta {
    id_dieta: number;
    nome_dieta: string;
    tipo_dieta: string;
    calorias: number;
    proteinas: number;
    carboidratos: number;
    gorduras: number;
    data_dieta: string;
    refeicao: string;
    alimentos: string;
    quantidade: number;
    observacoes: string;
}

export default function Dietas() {
    const [dietas, setDietas] = useState<Dieta[]>([]);
    const token = localStorage.getItem('auth-token') || '';
    console.log("Token em Dietas:", token);
    useEffect(() => {
        const fetchDieta = async () => {
            try {
                const response = await getDietas(token);
                setDietas(response.data); // ⬅️ array correto
            } catch (error) {
                console.error("Erro ao buscar dieta:", error);
            }
        };

        fetchDieta();
    }, []);

    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Página de Dietas
            </Typography>

            {dietas.map((dieta) => (
                <Accordion key={dieta.id_dieta}>
                    <AccordionSummary
                        aria-controls={`panel-${dieta.id_dieta}-content`}
                        id={`panel-${dieta.id_dieta}-header`}
                    >
                        <Typography fontWeight="bold">
                            {dieta.nome_dieta} — {dieta.refeicao}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <strong>Tipo:</strong> {dieta.tipo_dieta}
                        </Typography>

                        <Typography>
                            <strong>Calorias:</strong> {dieta.calorias} kcal
                        </Typography>

                        <Typography>
                            <strong>Proteínas:</strong> {dieta.proteinas} g
                        </Typography>

                        <Typography>
                            <strong>Carboidratos:</strong> {dieta.carboidratos} g
                        </Typography>

                        <Typography>
                            <strong>Gorduras:</strong> {dieta.gorduras} g
                        </Typography>

                        <Typography mt={2}>
                            <strong>Alimentos:</strong> {dieta.alimentos}
                        </Typography>

                        {dieta.observacoes && (
                            <Typography mt={1}>
                                <strong>Observações:</strong> {dieta.observacoes}
                            </Typography>
                        )}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}