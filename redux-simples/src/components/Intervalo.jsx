import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const Intervalo = props => {
    const { min, max } = props
    return (
        <Card title="Intervalo de números" red>
            <div className="intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                        onChange={e => props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(n) {
            //action creator -> action
            const action = alterarNumeroMinimo(n)
            dispatch(action)
        },
        alterarMaximo(n) {
            const action = alterarNumeroMaximo(n)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo)