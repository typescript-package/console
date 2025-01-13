/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export class ConsoleStyle<Style extends object = object> {
  public static style = {
    bold: '\x1b[1m',
    default: '\x1b[0m',
    faint: '\x1b[2m',
    italic: ''
  };;

  public get style(): Style & typeof ConsoleStyle.style {
    return this.#style as any;
  }

  #style: Style & {[name: string]: string};

  constructor(style?: Style) {
    this.#style = { ...ConsoleStyle.style, ...style || {} } as any;
  }

  public get<Name extends PropertyKey>(name: Name | keyof Style | keyof typeof this.style): string {
    return (this.#style as any)[name];
  }

  public set<Name extends PropertyKey>(
    name: Name | keyof Style | keyof typeof this.style,
    style: string
  ): this {
    Object.assign(this.#style, {[name]: style});
    return this;
  }

  public update(style: {[name: string]: string } | Partial<Style | typeof this.style>): this {
    this.#style = { ...this.#style, ...style as object };
    return this;
  }
}
