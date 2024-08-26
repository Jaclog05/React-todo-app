import { Todo } from "./Todo"

export function TodosWrapper({todos, onUpdate}){

	return (
		<ul>
			{
				todos.map((todo, i) => {
					return (
						<Todo
							key={todo.id}
							id={todo.id}
							text={todo.text}
							onUpdate={onUpdate}
						/>
					)
				})
			}
		</ul>
	)
}