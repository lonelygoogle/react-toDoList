import React, { Component,Fragment } from 'react'
import TodoItem from './TodoItem'
import axios from 'axios'
import './style.css'

class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelClick = this.handleDelClick.bind(this)
    }


    render () {
        // console.log('render')
        return (
            <Fragment>
                <div>
                    <label htmlFor="insert">输入内容</label>
                    <input
                        id="insert"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }

    componentDidMount () {
        axios.get('/api/todolist')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => alert(err))
    }
    getTodoItem () {
        return this.state.list.map((item, index) => {
            return (
                    <TodoItem
                    key={index}
                    content={item} 
                    index={index}
                    deleteItem={this.handleDelClick}/>
            )
        })
    }
    handleInputChange (e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    }
    handleBtnClick () {
        this.setState((preState) => ({
            list: [...preState.list, preState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }
    handleDelClick (index) {
        this.setState((preState) => {
            const list = [...preState.list]
            list.splice(index, 1)
            return {list}
        })
        // const list = [...this.state.list]
        // list.splice(index, 1)
        // this.setState({
        //     list: list
        // })
    }
}

export default TodoList