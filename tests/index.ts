import fs from "fs/promises";
import { Memer } from "memer.ts";

const memer = new Memer()

async function createImageFile() {
	try {
		const buffer = await memer.stonks("UP.");

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
