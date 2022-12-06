export const getCatigories = (callbackFunction) => {
	fetch('http://localhost:3333/categories/all')
		.then((resp) => resp.json())
		.then((json) => callbackFunction(json));
};
