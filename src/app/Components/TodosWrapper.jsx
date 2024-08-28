import { Todo } from "./Todo"
import styles from './TodosWrapper.module.css'

export function TodosWrapper({todos, onUpdate, onDelete}){

	if(todos.length){
		return (
			<ul className={styles.container}>
				{
					todos.map((todo, i) => {
						return (
							<Todo
								key={todo.id}
								id={todo.id}
								text={todo.text}
								onUpdate={onUpdate}
								onDelete={onDelete}
							/>
						)
					})
				}
			</ul>
		)
	}

	return (
		<h1 style={{textAlign: "center"}}>
			No hay tareas añadidas ❌
		</h1>
	)
}