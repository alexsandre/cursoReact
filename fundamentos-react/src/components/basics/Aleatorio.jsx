import React from "react"

export default function Aleatorio(props) {
    const min = Math.ceil(props.min);
    const max = Math.floor(props.max);
    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div>
            O Número aleatório é <strong>{ numero }</strong>
        </div>
    )
}