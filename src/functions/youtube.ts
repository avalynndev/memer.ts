import { createCanvas, loadImage } from "@napi-rs/canvas";
import { wrapText } from "../utils";

export async function youtube(
	avatar: string,
	username: string,
	text: string
): Promise<Buffer> {
	if (!avatar || !username || !text)
		return Promise.reject(
			new Error("You are missing the Avatar URL, Username or Text")
		);

	if (typeof username !== "string")
		return Promise.reject(new TypeError("Username must be a string"));

	if (typeof text !== "string")
		return Promise.reject(new TypeError("Text must be a string"));

	if (username.length > 36)
		return Promise.reject(
			new RangeError("Username length must be less than 36 characters")
		);

	if (text.length > 75)
		return Promise.reject(
			new RangeError("Text length must be less than 75 characters")
		);

	try {
		const baseRaw = fetch(
			"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/youtube/youtube.bmp"
		);
		const avatarRaw = fetch(encodeURI(avatar));

		const [baseRes, avatarRes] = await Promise.all([baseRaw, avatarRaw]);

		const [baseBuffer, avatarBuffer] = await Promise.all([
			baseRes.arrayBuffer(),
			avatarRes.arrayBuffer(),
		]);

		const [base, profile] = await Promise.all([
			loadImage(baseBuffer),
			loadImage(avatarBuffer),
		]);

		const canvas = createCanvas(base.width, base.height);
		const ctx = canvas.getContext("2d");
		ctx.drawImage(base, 0, 0);

		const fontSize = 17;

		const avatarSize = 52;
		const bigSize = avatarSize * 3;
		const maskCanvas = createCanvas(bigSize, bigSize);
		const maskCtx = maskCanvas.getContext("2d");
		maskCtx.beginPath();
		maskCtx.arc(bigSize / 2, bigSize / 2, bigSize / 2, 0, Math.PI * 2);
		maskCtx.closePath();
		maskCtx.fillStyle = "white";
		maskCtx.fill();
		maskCtx.globalCompositeOperation = "source-in";
		maskCtx.drawImage(profile, 0, 0, bigSize, bigSize);
		ctx.drawImage(maskCanvas, 17, 33, avatarSize, avatarSize);

		ctx.font = `bold ${fontSize}px Arial`;
		ctx.fillStyle = "black";
		const usernameWidth = ctx.measureText(username).width;
		ctx.fillText(username, 92, 50);

		const num = Math.floor(Math.random() * 60) + 1;
		const plural = num === 1 ? "" : "s";
		const time = `${num} minute${plural} ago`;

		ctx.font = `${fontSize}px Arial`;
		ctx.fillStyle = "grey";
		ctx.fillText(time, 92 + usernameWidth + 10, 50);

		ctx.font = `19px Arial`;
		ctx.fillStyle = "black";
		wrapText(ctx, text, 92, 74, 550, 25);

		return canvas.toBuffer("image/png");
	} catch (error) {
		return Promise.reject(
			new Error(
				`Failed to generate youtube image: ${
					error instanceof Error ? error.message : String(error)
				}`
			)
		);
	}
}
