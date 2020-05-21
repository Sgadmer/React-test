import React from 'react';

const styles = {
    li: {
        width: '50vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '5px solid blue',
        borderRadius: '4px',
        marginBottom: '.5rem',
    },
    input: {
        marginRight: '1rem',
        width:'30px',
        height:'30px',
    },
}

export default function TodoItem({ todo, index }) {
    return (
        <li style={styles.li}>
            <span>
                <input type="checkbox" style={styles.input} />
            </span>
            <strong>{index + 1}</strong>
            {todo.title}
            <button>&times;</button>
        </li>
    );
}