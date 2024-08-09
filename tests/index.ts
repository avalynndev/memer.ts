import fs from "fs/promises";
import { disability, cry } from "../src/index"; // Adjust the path as needed

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
