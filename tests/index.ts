import fs from "fs/promises";
import { disability, cry, youtube, humanity } from "../src/index";

async function createImageFile() {
	try {
		const buffer = await humanity(
			"Hello, this is a test message for the humanity function."
		);

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
