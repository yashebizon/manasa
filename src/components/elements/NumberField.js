import React from 'react';
import TextField from '@mui/material/TextField';

const NumberInputField = ({ label, value, onChange, ...props }) => {
    const handleChange = (event) => {
        const { value } = event.target;
        if (/^\d*$/.test(value)) {
            onChange(value);
        }
    };

    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            variant="outlined"
            fullWidth
            {...props}
        />
    );
};

export default NumberInputField;