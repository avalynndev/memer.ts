<h1 align="center">
<a href="https://memer-ts.vercel.app">
Memer.ts Documentation
</a>
</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=%23ffffff"/></a>
  <a href="#"><img src="https://img.shields.io/badge/shadcn/UI-%23ffffff.svg?style=for-the-badge&logo=shadcnui&logoColor=black"/></a>
  <a href="#"><img src="https://img.shields.io/badge/nextjs-%2320232a.svg?style=for-the-badge&logo=nextdotjs&logoColor=white"/></a>
  <a href="#"><img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/></a>
</p>
</p>

<p align="center">
  <a href="https://memer-ts.vercel.app" target="_blank">
    <img src="https://github.com/avalynndev/memer.ts-docs/blob/main/app/favicon.ico?raw=true" alt="Logo" width="50"/>
  </a>
</p>

## What is Memer.ts?

`Memer.ts` is a versatile npm package for easy image manipulation in TypeScript and JavaScript. 
It allows you to add text, apply filters, resize images, and more, all with a simple and efficient API that supports various image formats. 

<br/>

![image](https://github.com/user-attachments/assets/0267d5a3-d6b1-4261-a2ca-cb76062ef3a7)

### Installation

To begin using `memer.ts`, follow these simple steps: 
> Install `memer.ts` from npm using npm or yarn.

```bash
npm install memer.ts
```

```bash
yarn add memer.ts
```

### Examples

Once installed, you can import `Memer.ts` into your TypeScript or JavaScript files and start manipulating images.
Here’s how to import `Memer.ts`:

```typescript showLineNumbers {10}
// Basic usage example
import fs from "fs/promises";
import { Memer } from "memer.ts";

const memer = new Memer()

async function createImageFile() {
	try {
    // using stonks function
		const buffer = await memer.stonks("Memer.ts UP.");

		// Write the buffer to a file called image.png
		await fs.writeFile("image.png", buffer);
		console.log("Image file created successfully.");
	} catch (error) {
		console.error("Error creating image file:", error);
	}
}

createImageFile();
```


## Found a Bug? 🐞

Uh-oh, looks like you stumbled upon a bug? No worries, we're here to squash it! Just head over to our [**issues**](https://github.com/avalynndev/memer.ts/issues) section on GitHub and let us know what's up.

## Contributors 🤲

<img height="50" src="https://contrib.rocks/image?repo=avalynndev/memer.ts" />

#### Want to Help Out?

Feel free to contribute to this project! Whether you're an experienced developer or have been in the field for a while, your help is valuable.
