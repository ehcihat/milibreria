import { MouseEventHandler, useState } from 'react';
import Button from '@mui/material/Button';
//Tahiche Acorán Hernández Almeida
//Declaro la interface del componente. 
export interface MyButtonProps {
    text: string; //prop text de tipo string. Es el texto del botón
    txtColor: string; //prop txtcolor de tipo string. Es el color del texto del botón
    bgColor: string; //prop bgcolor de tipo string. Es el color del botón
    borderColor: string; //prop bgcolor de tipo string. Es el color
    width: number; //prop width de tipo string. Es el ancho del botón
    size?: "small" | "medium" | "large"; //prop size. El ? quiere decir que la prop es opcional. Además le digo los posibles valores. Se entiende que es string.
    hover: string; //Prop en la que se obtiene el color que va a tener el botón cuando se pase el cursor por encima.
    bgHover: string; //Prop en la que se obtiene el color que va a tener el fondo del botón cuando se pase el cursor por encima.
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al evento de picar el botón
    
}
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function MyButton(props: MyButtonProps) {
    //Paso el valor de las props a un objeto: 
    const { bgColor, text, txtColor, borderColor, width, disabled, onClick, size, hover, bgHover } = props
    const [isHovered, setIsHovered] = useState(false)
    return (
        //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        <Button
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{ backgroundColor: isHovered && bgHover ? bgHover : bgColor, 
                  color: isHovered && hover ? hover : txtColor,
                  borderColor: borderColor, 
                  width: width,
                  borderWidth: 1,
                  borderStyle:'solid',
                  transition: 'background-color 0.4s, color 0.4s',  }}
        >
            {text}
        </Button>
    )
}
export default MyButton;