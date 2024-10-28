import React from "react";
//importamos nuestro componente MyFavourite y sus props
import MyFavourite, { MyFavouriteProps } from "../myfavourite";

//Creamos un componente Example al cual le pasaremos las props definidas
//en nuestro componente MyFavourite. Luego renderizamos nuestro componente
//<MyFavourite /> con esas props. La idea es que llamemos al componente Example
//con valores de las props para renderizar el componente <MyFavourite /> de diferentes
//maneras, es decir, crear una historia de renderizados de nusetro componente.
function Example(props: MyFavouriteProps) {
    return (
        <MyFavourite
            iconColor={props.iconColor}
            disabled={props.disabled}
            onClick={props.onClick}
        />
    )
}
export default Example