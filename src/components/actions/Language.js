export function changeLanguage(language, script){
	return{
		type: 'CHANGE_LANGUAGE',
		language,
		script
	}
}