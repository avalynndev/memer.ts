import { createCanvas, loadImage } from "@napi-rs/canvas";

export async function disability(avatar: string): Promise<Buffer> {
  try {
    const canvas = createCanvas(663, 618);
    const ctx = canvas.getContext("2d");
    const image = await loadImage(
      "https://raw.githubusercontent.com/DankMemer/imgen/master/assets/disability/disability.bmp"
    );
    const imageperson = await loadImage(encodeURI(avatar));

    ctx.drawImage(image, 0, 0, 663, 618);
    ctx.drawImage(imageperson, 450, 325, 175, 175);

    // Return the buffer directly
    return canvas.toBuffer("image/png");
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error
  }
}