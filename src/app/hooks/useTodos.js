import { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import todosReducer from "../reducers/todosReducer";

export function useTodos() {
    const [todos, dispatch] = useReducer(todosReducer, [])

    const addTodo = (text) => {
			if (!!text.trim()) {
				dispatch({
					type: 'ADDED',
					id: uuidv4(),
					text: text,
					checked: false
				})
			}
    }

    const updateTodo = (id, newText) => {
			dispatch({
				type: 'UPDATED',
				id: id,
				text: newText
			})
    }

    return {
			todos,
			addTodo,
			updateTodo
    }
}