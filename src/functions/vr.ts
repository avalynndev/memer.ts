import { createCanvas, loadImage } from "@napi-rs/canvas";

import { wrapText } from "../utils";

export async function vr(
	text: string,
	isBuffer: boolean | true
): Promise<Buffer | string> {
	if (!text) return Promise.reject(new Error("You are missing the Text"));

	if (typeof text !== "string")
		return Promise.reject(new TypeError("Text must be a string"));

	if (text.length > 75)
		return Promise.reject(
			new RangeError("Text length must be less than 75 characters")
		);

	try {
		const canvas = createCanvas(680, 670);
		const ctx = canvas.getContext("2d");

		const img = await fetch(
			"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/vr/vr.bmp"
		);
		const buffer = await img.arrayBuffer();

		const image = await loadImage(Buffer.from(buffer));

		ctx.drawImage(image, 0, 0, 680, 670);
		ctx.font = "16px Poppins";
		ctx.fillStyle = "#000000";

		const maxWidth = 155;
		const lineHeight = 30;

		wrapText(ctx, text, 80, 485, maxWidth, lineHeight);

		if (isBuffer) return canvas.toBuffer("image/png");
		else return canvas.toDataURL("image/png").split(",")[1];
	} catch (error) {
		return Promise.reject(
			new Error(
				`Failed to generate vr image: ${
					error instanceof Error ? error.message : String(error)
				}`
			)
		);
	}
}
