/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export class ConsoleColor {
  public static color = {
    default: '\x1b[0m',

    // text color
    black: '\x1b[30m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    green: '\x1b[32m',
    magenta: '\x1b[35m',
    red: '\x1b[31m',
    white: '\x1b[37m',
    yellow: '\x1b[33m',
  };

  public get color() {
    return this.#color;
  }

  #color = ConsoleColor.color;

  constructor(color: { [index: string]: string }) {
    this.#color = { ...this.#color, ...color };
  }

  public get(name: keyof typeof this.color): string {
    return this.#color[name];
  }
}
