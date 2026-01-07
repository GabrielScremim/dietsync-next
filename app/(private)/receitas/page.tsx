'use client';
import { getReceitas } from "@/app/services/receitasService";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Receitas() {
    const [receitas, setReceitas] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchReceitas = async () => {
            try {
                const response = await getReceitas();
                console.log(response)
                setReceitas(response.data);
            } catch (error) {
                console.error("Erro ao buscar receitas:", error);
            } finally {
                setLoading(false); // Finaliza o loading quando a requisição terminar
            }
        };

        fetchReceitas();
    }, []);
    return (
        <Box py={5}>
            <Typography variant="h4" gutterBottom>
                Página de Receitas
            </Typography>

            {receitas.map((receita) => (
                <Accordion key={receita.id_receitas} sx={{ mb: 2 }}>
                    <AccordionSummary
                        aria-controls={`panel-${receita.id_receitas}-content`}
                        id={`panel-${receita.id_receitas}-header`}
                    >
                        <Typography fontWeight="bold">
                            {receita.nome_receita}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                        <Typography>
                            <strong>Ingredientes:</strong> {receita.ingredientes}
                        </Typography>

                        <Typography>
                            <strong>Modo de Preparo:</strong> {receita.modo_preparo}
                        </Typography>

                        <Typography>
                            <strong>Proteínas:</strong> {receita.proteinas} g
                        </Typography>

                        <Typography>
                            <strong>Carboidratos:</strong> {receita.carboidratos} g
                        </Typography>

                        <Typography>
                            <strong>Gorduras:</strong> {receita.gordura} g
                        </Typography>

                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}