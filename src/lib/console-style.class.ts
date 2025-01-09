/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export class ConsoleStyle {
  public get style() {
    return this.#style;
  }

  #style: { [index: string]: string } = {
    bold: '\x1b[1m',
    default: '\x1b[0m',
    faint: '\x1b[2m',
    italic: ''
  };

  constructor(style: {[index: string]: string}) {
    this.#style = { ...this.#style, ...style};
  }

  public get(name: keyof typeof this.style) {
    return this.#style[name];
  }
}
