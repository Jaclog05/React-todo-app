
export function TodoForm({text, onSubmit}){

    function handleSubmit(e){
			e.preventDefault()
			const text = e.target.mainInputText.value
			onSubmit(text)
    }

    return (
			<form onSubmit={handleSubmit}>
				<input name="mainInputText" defaultValue={text}/>
				<input type="submit" value="Submit"/>
			</form>
    )
}