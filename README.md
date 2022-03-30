> Terminal string coloring

## Features

- Expressive API
- Highly performant
- No dependencies
- Ability to nest styles
- Auto-detects color support
- Doesn't extend `String.prototype`
- Clean and focused
- Actively maintained

## Install

```sh
npm install @devteks/colors
```

## Usage

```js
import colors from '@devteks/colors';

console.log(colors.blue('Hello world!'));
```

Colors comes with an easy to use composable API where you just chain and nest the styles you want.

```js
import colors from '@devteks/colors/nested';

const log = console.log;

// Combine styled and normal strings
log(colors.blue('Hello') + ' World' + colors.red('!'));

// Compose multiple styles using the chainable API
log(colors.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(colors.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(colors.red('Hello', colors.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(colors.green(
	'I am a green line ' +
	colors.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


### Modifiers

- `reset` - Reset the current style.
- `bold` - Make the text bold.
- `dim` - Make the text have lower opacity.
- `italic` - Make the text italic. *(Not widely supported)*
- `underline` - Put a horizontal line below the text. *(Not widely supported)*
- `overline` - Put a horizontal line above the text. *(Not widely supported)*
- `inverse`- Invert background and foreground colors.
- `hidden` - Print the text but make it invisible.
- `strikethrough` - Puts a horizontal line through the center of the text. *(Not widely supported)*

### Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `gray`
- `redBright`
- `greenBright`
- `yellowBright`
- `blueBright`
- `magentaBright`
- `cyanBright`
- `whiteBright`

### Background colors

- `bgBlack`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgGray`
- `bgRedBright`
- `bgGreenBright`
- `bgYellowBright`
- `bgBlueBright`
- `bgMagentaBright`
- `bgCyanBright`
- `bgWhiteBright`

## Browser support

Since Chrome 69, ANSI escape codes are natively supported in the developer console.
