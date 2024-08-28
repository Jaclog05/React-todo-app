import { useState } from "react"
import styles from './Todo.module.css'

export function Todo({id, text, onUpdate, onDelete}){

	const [isEditing, setIsEditing] = useState(false)

	function handleSubmit(e){
		e.preventDefault()
		const newText = e.target.todoInputText.value
		onUpdate(id, newText)
		setIsEditing(false)
	}

	function handleEdit(){
		setIsEditing(prev => !prev)
	}

	if(isEditing){
		return (
			<form 
				className={styles.todoEditContainer}
				onSubmit={handleSubmit}
			>
				<input
					className={styles.todoInputText}
					name="todoInputText"
					defaultValue={text}
				/>
				<input
					className={styles.submitButton}
					type="submit"
					value="Submit"
				/>
			</form>
		)
	}

	return (
		<div className={styles.todoContainer}>
			<span className={styles.todoText}>{text}</span>
			<img 
				src='./edit_icon.svg'
				className={styles.todoIcon}
				alt="Edit todo"
				onClick={handleEdit}
			/>
			<img 
				src='./delete_icon.svg'
				className={styles.todoIcon}
				alt="Delete todo"
				onClick={() => onDelete(id)}
			/>
		</div>
	)
}