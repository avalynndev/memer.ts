import { createCanvas, loadImage } from "@napi-rs/canvas";

export async function trash(avatar: string): Promise<Buffer> {
	if (!avatar)
		return Promise.reject(new Error("You are missing the Avatar URL"));

	try {
		const canvas = createCanvas(960, 960);
		const ctx = canvas.getContext("2d");

		const [template, avatarImage] = await Promise.all([
			fetch(
				"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/trash/trash.bmp"
			),
			fetch(encodeURI(avatar)),
		]);
		const [templateBuffer, avatarBuffer] = await Promise.all([
			template.arrayBuffer(),
			avatarImage.arrayBuffer(),
		]);

		const [templateImage, personImage] = await Promise.all([
			loadImage(templateBuffer),
			loadImage(avatarBuffer),
		]);

		ctx.drawImage(templateImage, 0, 0, 960, 960);
		ctx.drawImage(personImage, 480, 0, 483, 483);

		return canvas.toBuffer("image/png");
	} catch (error) {
		return Promise.reject(
			new Error(
				`Failed to generate trash image: ${
					error instanceof Error ? error.message : String(error)
				}`
			)
		);
	}
}
