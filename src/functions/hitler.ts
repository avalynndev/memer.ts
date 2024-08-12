export async function hitler(
	avatar: string,
	module: "napi" | "canvas" = "napi"
): Promise<Buffer> {
	if (module === "napi") {
		const { createCanvas, loadImage } = await import("@napi-rs/canvas");
		if (!avatar)
			return Promise.reject(new Error("You are missing the Avatar URL"));

		try {
			const canvas = createCanvas(480, 360);
			const ctx = canvas.getContext("2d");

			const [template, avatarImage] = await Promise.all([
				fetch(
					"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/hitler/hitler.bmp"
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

			ctx.drawImage(templateImage, 0, 0, 480, 360);
			ctx.drawImage(personImage, 43, 43, 140, 140);

			return canvas.toBuffer("image/png");
		} catch (error) {
			return Promise.reject(
				new Error(
					`Failed to generate hitler image: ${
						error instanceof Error ? error.message : String(error)
					}`
				)
			);
		}
	} else {
		const { createCanvas, loadImage } = await import("canvas");

		if (!avatar)
			return Promise.reject(new Error("You are missing the Avatar URL"));

		try {
			const canvas = createCanvas(480, 360);
			const ctx = canvas.getContext("2d");

			const [template, avatarImage] = await Promise.all([
				fetch(
					"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/hitler/hitler.bmp"
				),
				fetch(encodeURI(avatar)),
			]);
			const [templateBuffer, avatarBuffer] = await Promise.all([
				template.arrayBuffer(),
				avatarImage.arrayBuffer(),
			]);

			const [templateImage, personImage] = await Promise.all([
				loadImage(Buffer.from(templateBuffer)),
				loadImage(Buffer.from(avatarBuffer)),
			]);

			ctx.drawImage(templateImage, 0, 0, 480, 360);
			ctx.drawImage(personImage, 43, 43, 140, 140);

			return canvas.toBuffer("image/png");
		} catch (error) {
			return Promise.reject(
				new Error(
					`Failed to generate hitler image: ${
						error instanceof Error ? error.message : String(error)
					}`
				)
			);
		}
	}
}
