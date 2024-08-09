export function wrapText(
	ctx: any,
	text: string,
	x: number,
	y: number,
	maxWidth: number,
	lineHeight: number
) {
	const words = text.split(" ");
	let line = "";
	const lines: string[] = [];

	for (let n = 0; n < words.length; n++) {
		const testLine = line + words[n] + " ";
		const metrics = ctx.measureText(testLine);
		const testWidth = metrics.width;

		if (testWidth > maxWidth && n > 0) {
			lines.push(line.trim());
			line = words[n] + " ";
		} else {
			line = testLine;
		}
	}
	lines.push(line.trim());

	for (let i = 0; i < lines.length; i++) {
		const lineWidth = ctx.measureText(lines[i]).width;
		const xPos = x + (maxWidth - lineWidth) / 2;
		ctx.fillText(lines[i], xPos, y + i * lineHeight);
	}
}
