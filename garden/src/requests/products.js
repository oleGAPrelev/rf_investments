export const getProducts = (callbackFunction) => {
	fetch('http://localhost:3333/products/all')
		.then((resp) => resp.json())
		.then((json) => callbackFunction(json));
};
