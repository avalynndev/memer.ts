const fs = require("fs").promises;
const { jail } = require( "memer.ts");

async function createImageFile() {
	try {
		const avatarUrl =
			"https://cdn.discordapp.com/avatars/887939910177275905/816909b74b25a66ec455e5143ff8e8ff.png";
		const buffer = await jail(avatarUrl);

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
