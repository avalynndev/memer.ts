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
		return Promise.reject(
			new Error(
				`Failed to generate disability image: ${
					error instanceof Error ? error.message : String(error)
				}`
			)
		);
	}
}
