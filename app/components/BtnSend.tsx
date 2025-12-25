"use client";

import { Button } from "@mui/material";

type SubmitButtonProps = {
    onClick: () => void;
    label?: string;
    loading?: boolean;
    disabled?: boolean;
};

export default function SubmitButton({
    onClick,
    label = "Enviar",
    loading = false,
    disabled = false,
}: SubmitButtonProps) {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="success"
            disabled={disabled || loading}
            sx={{ mt: 3 }}
            fullWidth
        >
            {loading ? "Enviando..." : label}
        </Button>
    );
}
