const { isSupported, styles } = require('#core');

const codeOf = x => '\x1b[' + x + 'm';
const RESET = codeOf(0);
const STYLES = [ /*'reset',*/ 'bold', 'dim', 'italic', 'underline', 'blink', 'inverse', 'hidden', 'strikethrough', 'doubleunderline', 'framed', 'overlined' ];
const COLORS = Object.entries(styles).reduce((acc, [name, [i, j]]) => {
  if (name !== 'reset') {
    let type = 1;
    if (STYLES.indexOf(name) != -1) {
      type = 0;
    } else if (name.startsWith('bg')) {
      type = 2;
    }
    acc[name] = {
      name,
      type,
      open: codeOf(i),
      close: codeOf(j),
    };
  }
  return acc;
}, {});

class ColorClass {
  #f = null;
  #b = null;
  #s = new Set();
  #isEnabled = isSupported;

  constructor() {
    const self = this;
    Object.entries(COLORS).forEach(([name, info]) => {
      Object.defineProperty(ColorClass.prototype, name, {
        get() {
          if (self.#isEnabled) self.#add(info);
          const fn = (...args) => {
						let t = args.join(' ');
            if (self.#isEnabled) {
              const { s, f, b } = self.#get();
              for (const x of s) t = x.open + t + x.close;
              if (b) t = b.open + t + b.close;
              if (f) t = f.open + t + f.close;
              return t + RESET;
            }
            return t;
          };
          fn.__proto__ = self;
          return fn;
        }
      });
    });
  }

  #add(info) {
    switch (info.type) {
      case 0: this.#s.add(info.name);   break;
      case 1: this.#f = info; break;
      case 2: this.#b = info; break;
    }
  }

  #get() {
    const s = [...this.#s].reverse().map(x => COLORS[x]);
    const f = this.#f;
    const b = this.#b;
    this.#s.clear();
    this.#f = null;
    this.#b = null;
    return { s, f, b };
  }

  reset(x) { return RESET + x + RESET; }

  get isSupported() { return isSupported; }
  get isEnabled() { return this.#isEnabled; }

  enableColors() { this.#isEnabled = isSupported; }
  disableColors() { this.#isEnabled = false; }
}

module.exports = new ColorClass();
