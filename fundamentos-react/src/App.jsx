import './App.css'
import React from 'react'

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuiImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import IndiretaPaiEstado from './components/comunicacao/IndiretaPaiEstado'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

const tag = <strong>Olá React!!!</strong>

export default function App() {
    return (
        <div className="App">
            <h1>Funcamentos React</h1>
            <div className="Cards">
                <Card titulo="Projeto Mega sena" color="#B9006E">
                    <Mega qtde={6} />
                </Card>

                <Card titulo="Contador" color="#424242">
                    <Contador numeroInicial={10} />
                </Card>

                <Card titulo="Componente controlado" color="#E45F56">
                    <Input />
                </Card>

                <Card titulo="Comunicação Indireta com Estado" color="#8BAD39">
                    <IndiretaPaiEstado />
                </Card>

                <Card titulo="Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai />
                </Card>

                <Card titulo="Comunicação Direta" color="#59323C">
                    <DiretaPai />
                </Card>

                <Card titulo="Renderização Condicional - Par/Ímpar" color="#982395">
                    <ParOuImpar numero={20} />
                    <ParOuImpar numero={15} />
                    <UsuarioInfo usuario={{nome: 'Fernando'}} />
                    <UsuarioInfo />
                    {/* <UsuarioInfo usuario={{email: 'Fernando@teste.com'}} />
                    <UsuarioInfo usuario={{}} />
                    <UsuarioInfo /> */}
                </Card>

                <Card titulo="Repetição Produtos" color="#FF4C65">
                    <ListaProdutos />
                </Card>

                <Card titulo="Repetição Alunos" color="#FF4C65">
                    <ListaAlunos />
                </Card>

                <Card titulo="Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Júlia" />
                    </Familia>
                </Card>

                <Card titulo="Aleatório" color="#090">
                    <Aleatorio min={10} max={50} />
                </Card>
                <Card titulo="Fragmento">
                    <Fragmento/>
                </Card>
                <Card titulo="Com Parametro">
                    <ComParametro titulo="Segundo Componente" subtitulo="Muito legal" />
                </Card>
                <Card titulo="Primeiro">
                    <Primeiro/>
                </Card>
                <Card titulo="jsx em variavel">
                { tag }<br />
                </Card>
            </div>
        </div>
    )
}