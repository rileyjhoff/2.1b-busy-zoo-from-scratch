import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ variant, color, size, text, onClick, disabled }) {
  return (
    <Button variant={variant} color={color} size={size} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
}
