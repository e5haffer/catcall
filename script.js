import { client } from "@gradio/client";

const response_0 = await fetch("https://raw.githubusercontent.com/gradio-app/gradio/main/test/test_files/bus.png");
const exampleImage = await response_0.blob();
						
const app = await client("e5haffer/how-much-cat");
const result = await app.predict("/predict", [
				exampleImage, 	// blob in 'img' Image component
	]);

console.log(result.data);