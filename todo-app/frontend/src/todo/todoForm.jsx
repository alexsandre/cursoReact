import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e) {
        const { handleSearch, handleAdd, handleClear, description } = this.props

        if (e.key === 'Enter') {
            e.shiftKey ? handleSearch() : handleAdd(description)
        } else if (e.key === 'Escape') {
            handleClear()
        }
    }

    componentWillMount() {
        this.props.handleSearch()
    }

    render() {
        const { handleSearch, handleAdd, handleClear, handleChange, description } = this.props

        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onKeyUp={this.keyHandler}
                        value={description}
                        onChange={handleChange}></input>
                </Grid>

                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => handleAdd(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={handleSearch} />
                    <IconButton style='default' icon='close'
                        onClick={handleClear} />
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({
        handleChange : changeDescription,
        handleSearch: search,
        handleAdd: add,
        handleClear: clear
    }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm)