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

export declare const bold: Instance;
export declare const dim: Instance;
export declare const italic: Instance;
export declare const underline: Instance;
export declare const overline: Instance;
export declare const inverse: Instance;
export declare const hidden: Instance;
export declare const strikethrough: Instance;
export declare const doubleunderline: Instance;
export declare const blink: Instance;
export declare const framed: Instance;
export declare const overlined: Instance;

export declare const black: Instance;
export declare const red: Instance;
export declare const green: Instance;
export declare const yellow: Instance;
export declare const blue: Instance;
export declare const magenta: Instance;
export declare const cyan: Instance;
export declare const white: Instance;

export declare const gray: Instance;
export declare const redBright: Instance;
export declare const greenBright: Instance;
export declare const yellowBright: Instance;
export declare const blueBright: Instance;
export declare const magentaBright: Instance;
export declare const cyanBright: Instance;
export declare const whiteBright: Instance;

export declare const bgBlack: Instance;
export declare const bgRed: Instance;
export declare const bgGreen: Instance;
export declare const bgYellow: Instance;
export declare const bgBlue: Instance;
export declare const bgMagenta: Instance;
export declare const bgCyan: Instance;
export declare const bgWhite: Instance;

export declare const bgGray: Instance;
export declare const bgRedBright: Instance;
export declare const bgGreenBright: Instance;
export declare const bgYellowBright: Instance;
export declare const bgBlueBright: Instance;
export declare const bgMagentaBright: Instance;
export declare const bgCyanBright: Instance;
export declare const bgWhiteBright: Instance;

export declare const reset: (arg: unknown) => string;
export declare const enableColors: () => Instance;
export declare const disableColors: () => Instance;

export declare const isSupported: boolean;
export declare const isEnabled: boolean;
