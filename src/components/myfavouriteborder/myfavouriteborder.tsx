import { MouseEventHandler} from 'react';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
//Tahiche Acorán Hernández Almeida
//Declaro la interface del componente. 
export interface MyFavouriteBorderProps  {
    iconColor: string; // prop del color del icono
    disabled?: boolean; // prop si el botón está deshabilitado, opcional
    onClick?: MouseEventHandler<HTMLButtonElement>; // prop de evento onclic, opcional
}
//Defino mi componente MyFavourite y le digo que las props son las que definí arriba
function MyFavouriteBorder({ iconColor, disabled = false, onClick }: MyFavouriteBorderProps) {
    return (
        <IconButton 
            onClick={onClick} 
            disabled={disabled} 
            sx={{ color: iconColor }}
        >
            <FavoriteBorderIcon />
        </IconButton>
    );
}
export default MyFavouriteBorder;