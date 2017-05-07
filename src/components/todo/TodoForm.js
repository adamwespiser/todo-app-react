import React from 'react'
import PropTypes from 'prop-types';


export const TodoForm = (props) =>  (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
           onChange={props.handleInputChange}
           value={props.currentTodo}/>
  </form>
)


TodoForm.propTypes = {  //lowercase 'p'
  currentTodo: PropTypes.string.isRequired, //uppercase P
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func
}
