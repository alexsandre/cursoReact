import './ListaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

// eslint-disable-next-line
export default props => {
    const produtosTH = produtos.map((produto, i) => {
        return <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.valor}</td>
        </tr>
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosTH}
                </tbody>
            </table>
        </div>
    )
}