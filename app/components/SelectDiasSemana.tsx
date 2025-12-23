"use client";

import { useState } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";

type DiaSemana =
    | "Segunda-feira"
    | "Terça-feira"
    | "Quarta-feira"
    | "Quinta-feira"
    | "Sexta-feira"
    | "Sábado"
    | "Domingo";

const diasSemana: DiaSemana[] = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
];

interface SelectDiasSemanaProps {
    value?: DiaSemana;
    onChange?: (dia: DiaSemana) => void;
    label?: string;
}

export default function SelectDiasSemana({
    value,
    onChange,
    label = "Dia da semana",
}: SelectDiasSemanaProps) {
    const [diaSelecionado, setDiaSelecionado] = useState<DiaSemana>(
        value ?? "Segunda-feira"
    );

    const handleChange = (event: SelectChangeEvent) => {
        const dia = event.target.value as DiaSemana;
        setDiaSelecionado(dia);
        onChange?.(dia);
    };

    return (
        <FormControl fullWidth size="small">
            <InputLabel id="dia-semana-label">{label}</InputLabel>

            <Select
                labelId="dia-semana-label"
                value={diaSelecionado}
                label={label}
                onChange={handleChange}
            >
                {diasSemana.map((dia) => (
                    <MenuItem key={dia} value={dia}>
                        {dia}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
