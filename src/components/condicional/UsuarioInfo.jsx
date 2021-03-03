import React from 'react'
import If, { Else } from './If'

// eslint-disable-next-line
export default props => {
    const usuario = props.usuario || {nome: 'Visitante'}
    return (
        <div>
            {/* <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
            Seja bem vindo <strong>amigão</strong>!
            </If> */}

            
            <If test={usuario && usuario.nome}>
            Seja bem vindo <strong>{usuario.nome}</strong>!
            <Else>
                Seja bem vindo <strong>Amigão</strong>
            </Else>
            </If>
        </div>
    )
}