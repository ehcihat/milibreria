// example.tsx
import React from "react";
// Importamos nuestro componente TahicheHA y sus props
import TahicheHA, { TahicheHAProps } from "../tahicheha";

// Creamos un componente Example al cual le pasaremos las props definidas
// en nuestro componente TahicheHA. Luego renderizamos nuestro componente
// <TahicheHA /> con esas props. La idea es que llamemos al componente Example
// con valores de las props para renderizar el componente <TahicheHA /> de diferentes
// maneras, es decir, crear una historia de renderizados de nuestro componente.
function Example(props: TahicheHAProps) {
    return (
        <TahicheHA
            iconColor={props.iconColor}
            disabled={props.disabled}
            onClick={props.onClick}
            tooltipText={props.tooltipText}
            size={props.size}
            backgroundColor={props.backgroundColor}
            iconSize={props.iconSize}
        />
    );
}

export default Example;
