import { useState } from "react"

export function Todo({id, text, onUpdate}){

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
			<form onSubmit={handleSubmit}>
				<input name="todoInputText" defaultValue={text}/>
				<input type="submit" value="Submit"/>
			</form>
		)
	}

	return (
		<div>
			<span>{text}</span>
			<img 
				src='./edit_icon.svg'
				alt="Edit todo"
				onClick={handleEdit}
			/>
		</div>
	)
}