import fs from "fs/promises";
import { disability, cry, youtube, excuseme } from "../src/index";

async function createImageFile() {
	try {
		const buffer = await excuseme(
			"Hello, this is a test message for the excuseme function."
		);

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
