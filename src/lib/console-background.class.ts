/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export class ConsoleBackground {
  public static background = {
    black: '\x1b[40m',
    blue: '\x1b[44m',
    cyan: '\x1b[46m',
    default: '\x1b[39m',
    green: '\x1b[42m',
    magenta: '\x1b[45m',
    red: '\x1b[41m',
    white: '\x1b[47m',
    yellow: '\x1b[43m',
  };

  public get background() {
    return this.#background;
  }

  #background = ConsoleBackground.background;

  constructor(background: { [index: string]: string }) {
    this.#background = { ...this.#background, ...background };
  }

  public get(name: keyof typeof this.background): string {
    return this.#background[name];
  }
}
