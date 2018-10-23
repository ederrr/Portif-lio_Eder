export default function language(state = {language:"en-us", script: 0}, action){

	switch(action.type){
		case 'CHANGE_LANGUAGE':
			return {language:action.language, script: action.script}

		default:
			return state;
	}
	
}