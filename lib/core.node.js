const isSupported =
	!("NO_COLOR" in process.env || process.argv.includes("--no-color")) &&
	("FORCE_COLOR" in process.env ||
		process.argv.includes("--color") ||
		process.platform === "win32" ||
		(require('tty').isatty(1) && process.env.TERM !== "dumb") ||
		"CI" in process.env);

const styles = require('util').inspect.colors;

module.exports = {
	isSupported,
	styles,
};
