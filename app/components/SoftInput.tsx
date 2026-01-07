'use client';

import { TextField } from '@mui/material';

type SoftInputProps = {
    label: string;
    name: string;
    value: string | number;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    type?: string;
    required?: boolean;
};

export default function SoftInput({
    label,
    name,
    value,
    onChange,
    type = 'text',
    required = false,
}: SoftInputProps) {
    const hasValue = value !== '' && value !== 0;

    return (
        <TextField
            fullWidth
            variant="outlined"
            label={label}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            InputProps={{
                sx: {
                    borderRadius: '999px',
                    backgroundColor: hasValue ? '#ffffff' : '#b9f1db',
                    transition: 'background-color 0.3s ease',
                    paddingLeft: '10px',
                },
            }}
            InputLabelProps={{
                sx: {
                    color: '#2f6f5e',
                },
            }}
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                },
            }}
        />
    );
}
