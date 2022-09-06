import propTypes from 'prop-types'
import { useState } from 'react'

const AddTodo = props => {
    const addTodo = props.addTodoFunc
    
    const [title, setTitle] = useState('')
    const addTodoFormStyle = {
        display : 'flex',

    }

    const addTodoInputStyle = {
        flex: '10',
        padding: '5px'
    }

  const changeTitle = event => {
    setTitle(event.target.value)
  }
  const addSingleTodo = event => {
    event.preventDefault()
    if( title !== ''){
        addTodo(title)
        setTitle('')
    }
  }
    return(
        <form style={addTodoFormStyle} onSubmit={addSingleTodo}>
            <input type="text" name="title" placeholder="Add something" value={title} style={addTodoInputStyle} onChange={changeTitle}></input>
            <input type="submit" value="Add" className='btn'></input>
        </form>
    )
}

AddTodo.propTypes = {
    addTodoFunc: propTypes.func.isRequired  
}

export default AddTodo