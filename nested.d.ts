export interface Instance {
	(...args: unknown[]): string;

	reset(arg: unknown): string;

	readonly bold: this;
	readonly dim: this;
	readonly italic: this;
	readonly underline: this;
	readonly overline: this;
	readonly inverse: this;
	readonly hidden: this;
	readonly strikethrough: this;
	readonly doubleunderline: this;
	readonly blink: this;
	readonly framed: this;
	readonly overlined: this;

	readonly black: this;
	readonly red: this;
	readonly green: this;
	readonly yellow: this;
	readonly blue: this;
	readonly magenta: this;
	readonly cyan: this;
	readonly white: this;

	readonly gray: this;
	readonly redBright: this;
	readonly greenBright: this;
	readonly yellowBright: this;
	readonly blueBright: this;
	readonly magentaBright: this;
	readonly cyanBright: this;
	readonly whiteBright: this;

	readonly bgBlack: this;
	readonly bgRed: this;
	readonly bgGreen: this;
	readonly bgYellow: this;
	readonly bgBlue: this;
	readonly bgMagenta: this;
	readonly bgCyan: this;
	readonly bgWhite: this;

	readonly bgGray: this;
	readonly bgRedBright: this;
	readonly bgGreenBright: this;
	readonly bgYellowBright: this;
	readonly bgBlueBright: this;
	readonly bgMagentaBright: this;
	readonly bgCyanBright: this;
	readonly bgWhiteBright: this;

	get isSupported(): boolean;
	get isEnabled(): boolean;

	enableColors(): this;
	disableColors(): this;
}

declare const instance: Instance;

export default instance;

export const bold: Instance;
export const dim: Instance;
export const italic: Instance;
export const underline: Instance;
export const overline: Instance;
export const inverse: Instance;
export const hidden: Instance;
export const strikethrough: Instance;
export const doubleunderline: Instance;
export const blink: Instance;
export const framed: Instance;
export const overlined: Instance;

export const black: Instance;
export const red: Instance;
export const green: Instance;
export const yellow: Instance;
export const blue: Instance;
export const magenta: Instance;
export const cyan: Instance;
export const white: Instance;

export const gray: Instance;
export const redBright: Instance;
export const greenBright: Instance;
export const yellowBright: Instance;
export const blueBright: Instance;
export const magentaBright: Instance;
export const cyanBright: Instance;
export const whiteBright: Instance;

export const bgBlack: Instance;
export const bgRed: Instance;
export const bgGreen: Instance;
export const bgYellow: Instance;
export const bgBlue: Instance;
export const bgMagenta: Instance;
export const bgCyan: Instance;
export const bgWhite: Instance;

export const bgGray: Instance;
export const bgRedBright: Instance;
export const bgGreenBright: Instance;
export const bgYellowBright: Instance;
export const bgBlueBright: Instance;
export const bgMagentaBright: Instance;
export const bgCyanBright: Instance;
export const bgWhiteBright: Instance;

export const reset: (arg: unknown) => string;
export const enableColors: () => void;
export const disableColors: () => void;

export const isSupported: boolean;
export const isEnabled: boolean;
