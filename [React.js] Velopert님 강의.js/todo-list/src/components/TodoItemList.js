import React from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends React.Component {
    render () {
        const { todos, onToggle, onRemove } = this.props;

        return (
            <div>
                <TodoItem text="안녕 반가워"/>
                <TodoItem text="이건 리액트야"/>
                <TodoItem text="어때?"/>
            </div>
        );
    }
}

export default TodoItemList;