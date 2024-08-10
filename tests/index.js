const fs = require("fs").promises;
const { Memer } = require("memer.ts");

const memer = new Memer();

async function createImageFile() {
	try {
		const avatarUrl =
			"How do i code lmao?";
		const buffer = await memer.vr(avatarUrl);

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
