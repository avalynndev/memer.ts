import { createCanvas, loadImage, GlobalFonts } from "@napi-rs/canvas";
import path from "path";

import { wrapText } from "../utils";

export async function cry(text: string): Promise<Buffer> {
	if (!text)
		return Promise.reject(new Error("You are missing the Avatar URL"));

	if (typeof text !== "string")
		return Promise.reject(new TypeError("Text must be a string"));

	if (text.length > 75)
		return Promise.reject(
			new RangeError("Text length must be less than 75 characters")
		);

	try {
		GlobalFonts.registerFromPath(
			path.join(
				__dirname,
				"..",
				"..",
				"assets",
				"fonts",
				"ComicSansMS3.ttf"
			),
			"ComicSans"
		);
		const canvas = createCanvas(626, 768);
		const ctx = canvas.getContext("2d");
		const image = await loadImage(
			"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/cry/cry.bmp"
		);

		ctx.drawImage(image, 0, 0, 626, 768);
		ctx.font = "bold 25px ComicSans";
		ctx.fillStyle = "#000000";

		const maxWidth = 198;
		const x = 370;
		const y = 80;

		wrapText(ctx, text, x, y, maxWidth, 30);

		return canvas.toBuffer("image/png");
	} catch (error) {
		return Promise.reject(
			new Error(
				`Failed to generate dab image: ${
					error instanceof Error ? error.message : String(error)
				}`
			)
		);
	}
}
