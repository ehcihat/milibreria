import React from "react";
//importamos nuestro componente CustomButton y sus props
import MyButton, { MyButtonProps } from "../mybutton";
import { brown } from "@mui/material/colors";
//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente CustomButton. Luego renderizamos nuestro componente
//<CustomButton /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <CustomButton /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: MyButtonProps) {
    return (
        <MyButton
            text={props.text}
            bgColor={props.bgColor}
            txtColor={props.txtColor}
            disabled={props.disabled}
            width={props.width}
            hover={props.hover}
            bgHover={props.bgHover}
            borderColor={props.borderColor}
            size={props.size}
            onClick={props.onClick}
        />
    )
}
export default Example