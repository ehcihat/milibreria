import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import Button from '@mui/material/Button';
//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function MyButton(props) {
    //Paso el valor de las props a un objeto: 
    var bgColor = props.bgColor, text = props.text, txtColor = props.txtColor, borderColor = props.borderColor, width = props.width, disabled = props.disabled, onClick = props.onClick, size = props.size, hover = props.hover, bgHover = props.bgHover;
    var _a = useState(false), isHovered = _a[0], setIsHovered = _a[1];
    return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    _jsx(Button, { type: 'button', onClick: onClick, disabled: disabled, size: size, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, sx: { backgroundColor: isHovered && bgHover ? bgHover : bgColor,
            color: isHovered && hover ? hover : txtColor,
            borderColor: borderColor,
            width: width,
            borderWidth: 1,
            borderStyle: 'solid',
            transition: 'background-color 0.4s, color 0.4s', }, children: text }));
}
export default MyButton;
