import axios from 'axios'

const URL = "http://172.22.95.2:3003/api/todos"

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

// Metodo reescrito acima para que as ações na lista filtrada mantenham a lista filtrada
// export const search = (description) => {
//     const search = description ? `&description__regex=/${description}/` : ''
//     const request = axios.get(`${URL}?sort=-createdAt${search}`)

//     return {
//         type: 'TODO_SEARCHED',
//         payload: request
//     }
// }

// Action creator usando o middleware multi, mas não tem como garantir a ordem de execução
// export const add = (description) => {
//     const request = axios.post(URL, { description })
//     return [
//         { type: 'TODO_ADDED', payload: request },
//         search()]
// }

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:true})
            // Dispatcher de Action não necessaria porque a alteração é feita no backend,
            // bastando refazer a consulta para atualizar a tela
            //.then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = todo => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, { ...todo, done:false})
            .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispactch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispactch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TODO_CLEAR' }, search()]
}