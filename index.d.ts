type Func = (...args: unknown[]) => string;

export const reset: Func;
export const bold: Func;
export const dim: Func;
export const italic: Func;
export const underline: Func;
export const blink: Func;
export const inverse: Func;
export const hidden: Func;
export const strikethrough: Func;
export const doubleunderline: Func;
export const framed: Func;
export const overlined: Func;

export const black: Func;
export const red: Func;
export const green: Func;
export const yellow: Func;
export const blue: Func;
export const magenta: Func;
export const cyan: Func;
export const white: Func;

export const gray: Func;
export const redBright: Func;
export const greenBright: Func;
export const yellowBright: Func;
export const blueBright: Func;
export const magentaBright: Func;
export const cyanBright: Func;
export const whiteBright: Func;

export const bgBlack: Func;
export const bgRed: Func;
export const bgGreen: Func;
export const bgYellow: Func;
export const bgBlue: Func;
export const bgMagenta: Func;
export const bgCyan: Func;
export const bgWhite: Func;

export const bgGray: Func;
export const bgRedBright: Func;
export const bgGreenBright: Func;
export const bgYellowBright: Func;
export const bgBlueBright: Func;
export const bgMagentaBright: Func;
export const bgCyanBright: Func;
export const bgWhiteBright: Func;

export const enableColors: () => Instance;
export const disableColors: () => Instance;

export const isSupported: boolean;
export const isEnabled: boolean;
