'use client';

import { TextField } from '@mui/material';

type DateInputProps = {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

export default function DateInput({
    label,
    name,
    value,
    onChange,
    required = false,
}: DateInputProps) {
    return (
        <div className="form-item">
            <TextField
                type="date"
                name={name}
                label={label}
                value={value}
                onChange={onChange}
                required={required}
                fullWidth
                InputLabelProps={{
                    shrink: true, // 🔥 ESSENCIAL para date
                }}
            />
        </div>
    );
}
