import React, { useState } from 'react'
import IndiretaFilhoEstado from './IndiretaFilhoEstado'

// eslint-disable-next-line 
export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    // nome idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}!</span>
            </div>

            <IndiretaFilhoEstado quandoClicar={fornecerInformacoes}></IndiretaFilhoEstado>
        </div>
    )
}