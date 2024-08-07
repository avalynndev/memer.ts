import { createCanvas, loadImage } from "@napi-rs/canvas";

export async function disability(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	try {
		const canvas = createCanvas(663, 618);
		const ctx = canvas.getContext("2d");

		const [templateImage, personImage] = await Promise.all([
			loadImage(
				"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/disability/disability.bmp"
			),
			loadImage(encodeURI(avatar)),
		]);

		ctx.drawImage(templateImage, 0, 0, 663, 618);
		ctx.drawImage(personImage, 450, 325, 175, 175);

		return canvas.toBuffer("image/png");
	} catch (error) {
		console.error("Error fetching data:", error);
		return Promise.reject(error);
	}
}

export async function dab(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	try {
		const canvas = createCanvas(663, 618);
		const ctx = canvas.getContext("2d");

		const [templateImage, personImage] = await Promise.all([
			loadImage(
				"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/dab/dab.bmp"
			),
			loadImage(encodeURI(avatar)),
		]);

		ctx.drawImage(personImage, 300, 0, 500, 500);
		ctx.drawImage(templateImage, 0, 0, 800, 611);

		return canvas.toBuffer("image/png");
	} catch (error) {
		console.error("Error fetching data:", error);
		return Promise.reject(error);
	}
}

