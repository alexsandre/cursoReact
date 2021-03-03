import React from 'react'
import DiretaFilho from './DiretaFilho'

// eslint-disable-next-line 
export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true} />
            <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
        </div>
    )
}