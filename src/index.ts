import { createCanvas, loadImage } from "@napi-rs/canvas";

async function generateImage(
	templateUrl: string,
	avatarUrl: string | null,
	positions: any[],
	text: string | null = null,
	font: string = "20px Poppins"
): Promise<Buffer> {
	const canvas = createCanvas(positions[0].width, positions[0].height);
	const ctx = canvas.getContext("2d");

	const [templateImage, personImage] = await Promise.all([
		loadImage(templateUrl),
		avatarUrl ? loadImage(encodeURI(avatarUrl)) : null,
	]);

	ctx.drawImage(templateImage, 0, 0, positions[0].width, positions[0].height);

	if (personImage) {
		for (let pos of positions.slice(1)) {
			ctx.drawImage(personImage, pos.x, pos.y, pos.width, pos.height);
		}
	}

	if (text) {
		ctx.font = font;
		ctx.fillStyle = "#000000";
		ctx.fillText(text, positions[1].x, positions[1].y);
	}

	return canvas.toBuffer("image/png");
}

export async function cry(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/cry/cry.bmp",
		null,
		[
			{ width: 626, height: 768 },
			{ x: 382, y: 80 },
		],
		text
	);
}

export async function door(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/door/door.bmp",
		avatar,
		[
			{ width: 1000, height: 479 },
			{ x: 250, y: 0, width: 479, height: 479 },
		]
	);
}

export async function egg(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/egg/egg.bmp",
		avatar,
		[
			{ width: 350, height: 350 },
			{ x: 143, y: 188, width: 50, height: 50 },
		]
	);
}

export async function excuseme(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/excuseme/excuseme.bmp",
		null,
		[
			{ width: 807, height: 745 },
			{ x: 20, y: 15 },
		],
		text
	);
}

export async function savehumanity(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/humanity/humanity.bmp",
		null,
		[
			{ width: 720, height: 723 },
			{ x: 450, y: 490 },
		],
		text
	);
}

export async function stonks(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://i.ibb.co/M9rshwf/stonks.jpg",
		null,
		[
			{ width: 408, height: 408 },
			{ x: 10, y: 22 },
		],
		text,
		"30px Poppins"
	);
}

export async function ohno(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/ohno/ohno.bmp",
		null,
		[
			{ width: 640, height: 640 },
			{ x: 340, y: 20 },
		],
		text
	);
}

export async function failure(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/failure/failure.bmp",
		avatar,
		[
			{ width: 572, height: 767 },
			{ x: 143, y: 525, width: 215, height: 215 },
		]
	);
}

export async function trash(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/trash/trash.bmp",
		avatar,
		[
			{ width: 960, height: 960 },
			{ x: 480, y: 0, width: 483, height: 483 },
		]
	);
}

export async function kiss(avatar1: string, avatar2: string): Promise<Buffer> {
	if (!avatar1 || !avatar2) {
		return Promise.reject(
			new Error("You are missing one or both Avatar URLs")
		);
	}
	const canvas = createCanvas(768, 574);
	const ctx = canvas.getContext("2d");
	const [templateImage, imagePerson1, imagePerson2] = await Promise.all([
		loadImage("https://i.ibb.co/8rnFHYS/kiss.png"),
		loadImage(encodeURI(avatar1)),
		loadImage(encodeURI(avatar2)),
	]);
	ctx.drawImage(templateImage, 0, 0, 768, 574);
	ctx.drawImage(imagePerson1, 150, 25, 200, 200);
	ctx.drawImage(imagePerson2, 370, 25, 200, 200);
	return canvas.toBuffer("image/png");
}

export async function vr(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/vr/vr.bmp",
		null,
		[
			{ width: 680, height: 670 },
			{ x: 80, y: 485 },
		],
		text,
		"16px Poppins"
	);
}

export async function isearch(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/search/thesearch.bmp",
		null,
		[
			{ width: 700, height: 612 },
			{ x: 65, y: 355 },
		],
		text,
		"16px Poppins"
	);
}

export async function satan(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/satan/satan.bmp",
		avatar,
		[
			{ width: 600, height: 450 },
			{ x: 200, y: 90, width: 195, height: 195 },
		]
	);
}

export async function stroke(text: string): Promise<Buffer> {
	if (!text) {
		return Promise.reject(new Error("You are missing the Text"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/stroke/stroke.bmp",
		null,
		[
			{ width: 490, height: 492 },
			{ x: 272, y: 300 },
		],
		text,
		"12px Poppins"
	);
}

export async function roblox(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/roblox/roblox.bmp",
		avatar,
		[
			{ width: 420, height: 420 },
			{ x: 168, y: 41, width: 56, height: 74 },
		]
	);
}

export async function hitler(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/hitler/hitler.bmp",
		avatar,
		[
			{ width: 480, height: 360 },
			{ x: 43, y: 43, width: 140, height: 140 },
		]
	);
}

export async function jail(avatar: string): Promise<Buffer> {
	if (!avatar) {
		return Promise.reject(new Error("You are missing the Avatar URL"));
	}
	return generateImage(
		"https://raw.githubusercontent.com/DankMemer/imgen/master/assets/jail/jail.bmp",
		avatar,
		[
			{ width: 350, height: 350 },
			{ x: 0, y: 0, width: 350, height: 350 },
		]
	);
}
