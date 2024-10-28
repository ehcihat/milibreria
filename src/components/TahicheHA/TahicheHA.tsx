import { MouseEventHandler } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
//Tahiche Acorán Hernández Almeida
//Declaro la interface del componente. 
export interface TahicheHAProps {
    iconColor: string; // prop del color del icono
    disabled?: boolean; // prop si el botón está deshabilitado, opcional
    onClick?: MouseEventHandler<HTMLButtonElement>; // prop de evento onclic, opcional
    tooltipText?: string;  // prop para agregar una tooltip al icono
    size?: 'small' | 'medium' | 'large';  // prop de tamanyo
    backgroundColor?: string;  // prop de color del fondo
    iconSize?: number; // prop para controlar el tamanyo de lo que esté dentro de IconButton

}

function TahicheHA({
    iconColor,
    disabled = false,
    onClick,
    tooltipText = 'Compartir',
    size = 'medium',
    backgroundColor,
    iconSize,

}: TahicheHAProps) {
    return (
        <Tooltip title={tooltipText}>
            <IconButton 
                onClick={onClick} 
                disabled={disabled} 
                size={size} 
                sx={{ color: iconColor, backgroundColor }} 

            >
                <ShareIcon sx={{ fontSize: iconSize }} />
            </IconButton>
        </Tooltip>
    );
}

export default TahicheHA;
