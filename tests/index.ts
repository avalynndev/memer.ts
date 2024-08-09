import fs from "fs/promises";
import { cry } from "../src/index";

async function createImageFile() {
	try {
		const buffer = await cry("Nah, I would drink soda");

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
