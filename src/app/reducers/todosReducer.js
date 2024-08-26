export default function todosReducer(state, action) {

	switch(action.type){
		case 'ADDED': {
			return [
				{
						id: action.id,
						text: action.text,
						checked: action.checked
				},
				...state
			]
		}
		case 'UPDATED': {
			return state.map(item => {
					if(item.id === action.id){
						return {
							...item,
							text: action.text
						}
					} else {
						return item
					}
				}
			)
		}
		default: {
				throw Error('Unknown action: ' + action.type);
		}
	}
}