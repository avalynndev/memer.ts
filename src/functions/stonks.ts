import { wrapText } from "../utils";

export async function stonks(
	text: string,
	module: "napi" | "canvas" = "napi"
): Promise<Buffer> {
	if (module === "napi") {
		const { createCanvas, loadImage } = await import("@napi-rs/canvas");

		if (!text) return Promise.reject(new Error("You are missing the Text"));

		if (text.length > 100)
			return Promise.reject(
				new RangeError("Text length must be less than 100 characters")
			);

		try {
			const canvas = createCanvas(408, 408);
			const ctx = canvas.getContext("2d");
			const image = await loadImage(
				"https://i.ibb.co/M9rshwf/stonks.jpg"
			);
			ctx.drawImage(image, 0, 0, 408, 408);
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
					`Failed to generate stonks image: ${
						error instanceof Error ? error.message : String(error)
					}`
				)
			);
		}
	} else {
		const { createCanvas, loadImage } = await import("canvas");
		if (!text) return Promise.reject(new Error("You are missing the Text"));

		if (text.length > 100)
			return Promise.reject(
				new RangeError("Text length must be less than 100 characters")
			);

		try {
			const canvas = createCanvas(408, 408);
			const ctx = canvas.getContext("2d");
			const image = await loadImage(
				"https://i.ibb.co/M9rshwf/stonks.jpg"
			);
			ctx.drawImage(image, 0, 0, 408, 408);
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
					`Failed to generate stonks image: ${
						error instanceof Error ? error.message : String(error)
					}`
				)
			);
		}
	}
}
