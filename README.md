# Memer.ts
**Memer.ts is a powerful module that allows you to manipulate images very easily usable in Typescript/Javascript**

## **Installation** 
```
npm install memer.ts
```
```ts
import fs from "fs/promises";
import { disability } from "memer.ts";

async function createImageFile() {
	const avatarUrl = "AvatarURL";
	const buffer = await disability(avatarUrl);

	// Write the buffer to a file called image.png
	await fs.writeFile("image.png", buffer);
	console.log("Image file created successfully.");
}

createImageFile();
```

## LINKS

- 📃 Guide/Docs: Coming Soon
- 💬 Discord: Coming Soon


## Features

- Super simple and easy to use.
- More than 50+ methods (only disability as of now)
- Easy to Implement.
- Great support and flexible.

## Credits
Image Gen: [Link!](https://github.com/DankMemer/imgen)<br/>
Made by: [@avalynndev](https://github.com/avalynndev), [@Yash094](https://github.com/Yash094)
