import { createCanvas, loadImage } from "@napi-rs/canvas";
import { wrapText } from "../utils";

export async function excuseme(text: string): Promise<Buffer> {
	if (!text)
		return Promise.reject(new Error("You are missing the Avatar URL"));

	if (text.length > 160)
		return Promise.reject(
			new RangeError("Text length must be less than 160 characters")
		);

	try {
		const canvas = createCanvas(807, 745);
		const ctx = canvas.getContext("2d");
		const image = await loadImage(
			"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/excuseme/excuseme.bmp"
		);
		ctx.drawImage(image, 0, 0, 807, 745);
		ctx.font = "bold 40px Poppins";
		ctx.fillStyle = "#000000";

		const maxWidth = 767;
		const lineHeight = 50;
		const maxHeight = 720;

		wrapText(ctx, text, 20, 50, maxWidth, lineHeight, maxHeight);

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
