import {
	disability,
	hitler,
	humanity,
	egg,
	excuseme,
	dab,
	door,
	cry,
	failure,
	idelete,
	jail,
	roblox,
	satan,
	stonks,
	trash,
	youtube,
	vr,
} from "./functions";

class Memer {
	private module: "napi" | "canvas" = "napi";
	constructor(module: "napi" | "canvas" = "napi") {
		this.module = module;
	}
	/**
	 * disability function;
	 *
	 * Generates a disability image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.disability("Avatar URL").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public disability(avatar: string) {
		return disability(avatar, this.module);
	}
	/**
	 * dab function;
	 *
	 * Generates a dab image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.dab("Avatar URL").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public dab(avatar: string) {
		return dab(avatar, this.module);
	}
	/**
	 * door function;
	 *
	 * Generates a door image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.door("Avatar URL").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public door(avatar: string) {
		return door(avatar, this.module);
	}
	/**
	 * cry function;
	 *
	 * Generates a crying image with the text provided.
	 *
	 * @param text The text to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.cry("Hello, World!").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public cry(text: string) {
		return cry(text, this.module);
	}
	/**
	 * egg function;
	 *
	 * Generates a egg image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.egg("Avatar URL").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public egg(avatar: string) {
		return egg(avatar, this.module);
	}
	/**
	 * excuseme function;
	 *
	 * Generates a excuseme image with the text provided.
	 *
	 * @param text The text to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.excuseme("Hello, World!").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public excuseme(text: string) {
		return excuseme(text, this.module);
	}
	/**
	 * failure function;
	 *
	 * Generates a failure image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.failure("Avatar URL").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public failure(avatar: string) {
		return failure(avatar, this.module);
	}
	/**
	 * hitler function;
	 *
	 * Generates a hitler image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.hitler("Avatar URL").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public hitler(avatar: string) {
		return hitler(avatar, this.module);
	}
	/**
	 * humanity function;
	 *
	 * Generates a humanity image with the text provided.
	 *
	 * @param text The text to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.humanity("Hello, World!").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public humanity(text: string) {
		return humanity(text, this.module);
	}
	/**
	 * idelete function;
	 *
	 * Generates a idelete image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.idelete("Avatar Url").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public idelete(avatar: string) {
		return idelete(avatar, this.module);
	}
	/**
	 * jail function;
	 *
	 * Generates a jail image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.jail("Avatar Url").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public jail(avatar: string) {
		return jail(avatar, this.module);
	}
	/**
	 * roblox function;
	 *
	 * Generates a roblox image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.roblox("Avatar Url").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public roblox(avatar: string) {
		return roblox(avatar, this.module);
	}
	/**
	 * satan function;
	 *
	 * Generates a satan image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.satan("Avatar Url").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public satan(avatar: string) {
		return satan(avatar, this.module);
	}
	/**
	 * stonks function;
	 *
	 * Generates a stonks image with the text provided.
	 *
	 * @param text The text to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.stonks("Hello, World!").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public stonks(text: string) {
		return stonks(text, this.module);
	}

	/**
	 * trash function;
	 *
	 * Generates a trash image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.trash("Avatar Url").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public trash(avatar: string) {
		return trash(avatar, this.module);
	}

	/**
	 * youtube function;
	 *
	 * Generates a youtube image with the avatar provided.
	 *
	 * @param avatar The avatar to be displayed on the image.
	 * @param username The username to be displayed on the image.
	 * @param text The text to be displayed on the image.
	 * @returns Promise<Buffer>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.youtube("Avatar Url","Username", "Text").then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public youtube(avatar: string, username: string, text: string) {
		return youtube(avatar, username, text, this.module);
	}

	/**
	 * vr function;
	 *
	 * Generates a vr image with the text provided.
	 *
	 * @param text The text to be displayed on the image.
	 * @param isBuffer If true returns a Buffer, else returns Base64
	 * @returns Promise<Buffer | Base64>
	 *
	 * @example
	 * \`\`\`ts
	 * const memer = new Memer();
	 * memer.vr("Hello, World!",true).then((buffer) => {
	 *     console.log(buffer);
	 * });
	 * \`\`\`
	 */
	public vr(text: string, isBuffer: boolean) {
		return vr(text, isBuffer,this.module);
	}
}

export { Memer };
export * from "./utils";
