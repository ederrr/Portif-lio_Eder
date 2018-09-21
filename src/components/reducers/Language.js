export default function language(state = {language:"pt-br", script: 1}, action){

	switch(action.type){
		case 'CHANGE_LANGUAGE':
			return {language:action.language, script: action.script}

		default:
			return state;
	}
	
}