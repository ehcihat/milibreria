import { MouseEventHandler} from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
//Tahiche Acorán Hernández Almeida
//Declaro la interface del componente. 
export interface MyFavouriteProps {
    iconColor: string; // prop del color del icono
    disabled?: boolean; // prop si el botón está deshabilitado, opcional
    onClick?: MouseEventHandler<HTMLButtonElement>; // prop de evento onclic, opcional
}
//Defino mi componente MyFavourite y le digo que las props son las que definí arriba
function MyFavourite({ iconColor, disabled = false, onClick }: MyFavouriteProps) {
    return (
        <IconButton 
            onClick={onClick} 
            disabled={disabled} 
            sx={{ color: iconColor }}
        >
            <FavoriteIcon />
        </IconButton>
    );
}
export default MyFavourite;