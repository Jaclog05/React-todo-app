import styles from './TodoForm.module.css'

export function TodoForm({text, onSubmit}){

    function handleSubmit(e){
			e.preventDefault()
			const text = e.target.mainInputText.value
			onSubmit(text)
			e.target.mainInputText.value = ''
    }

    return (
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					className={styles.input}
					name="mainInputText"
					defaultValue={text}
					placeholder='Añade una nueva tarea...'
				/>
				<input type="submit" value="Submit" className={styles.submitButton}/>
			</form>
    )
}