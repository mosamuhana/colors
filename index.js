const { isSupported, styles } = require('#core');

let enabled = isSupported;

const lib = {
  enableColors() { enabled = isSupported; return this; },
  disableColors() { enabled = false; return this; },
  get isEnabled() { return enabled; },
  get isSupported() { return isSupported; },
};

Object.entries(styles).forEach(([k, [i,j]]) => {
  const s = '\x1b[' + i + 'm', e = '\x1b[' + j + 'm';
  lib[k] = (...args) => {
		const t = args.join(' ');
		return enabled ? (s + t + e) : t;
	};
});

module.exports = lib;
