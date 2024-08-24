import { createCanvas, loadImage } from "@napi-rs/canvas";

export async function jail(avatar: string): Promise<Buffer> {
	if (!avatar)
		return Promise.reject(new Error("You are missing the Avatar URL"));

	try {
        const canvas = createCanvas(350, 350);
		const ctx = canvas.getContext("2d");

		const [template, avatarImage] = await Promise.all([
			fetch(
				"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/jail/jail.bmp"
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

		ctx.drawImage(personImage, 0, 0, 350, 350);
		ctx.drawImage(templateImage, 0, 0, 350, 350);

		return canvas.toBuffer("image/png");
	} catch (error) {
		return Promise.reject(
			new Error(
				`Failed to generate jail image: ${
					error instanceof Error ? error.message : String(error)
				}`
			)
		);
	}
}
