'use client';

import { TextField, Box, Typography } from '@mui/material';

type TextAreaProps = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    rows?: number;
    maxLength?: number;
    error?: boolean;
    helperText?: string;
};

export default function TextArea({
    label,
    value,
    onChange,
    placeholder,
    rows = 4,
    maxLength,
    error = false,
    helperText
}: TextAreaProps) {
    return (
        <Box>
            <TextField
                fullWidth
                multiline
                rows={rows}
                label={label}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                error={error}
                helperText={helperText}
                inputProps={{ maxLength }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#fff'
                    },
                    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                        borderColor: '#1DB954'
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: '#1DB954'
                    }
                }}
            />

            {maxLength && (
                <Typography
                    variant="caption"
                    sx={{
                        display: 'block',
                        textAlign: 'right',
                        mt: 0.5,
                        color: '#6b7280'
                    }}
                >
                    {value?.length}/{maxLength}
                </Typography>
            )}
        </Box>
    );
}
