import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        color: 'red',
        margin: 0,
        padding: 0,
        width:'100wv',
    }
}

 function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index} />
            })}
        </ul>
    );
}

export default TodoList;