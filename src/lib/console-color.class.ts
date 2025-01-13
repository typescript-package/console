/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export class ConsoleColor<Color extends object = object> {
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

  public get color(): Color & typeof ConsoleColor.color {
    return this.#color as any;
  }

  #color: Color & {[name: string]: string};

  constructor(color?: Color) {
    this.#color = { ...ConsoleColor.color, ...color || {} } as any;
  }

  public get<Name extends PropertyKey>(name: Name | keyof Color | keyof typeof this.color): string {
    return (this.#color as any)[name];
  }

  public set<Name extends PropertyKey>(
    name: Name | keyof Color | keyof typeof this.color,
    color: string
  ): this {
    Object.assign(this.#color, {[name]: color});
    return this;
  }

  public update(color: {[name: string]: string } | Partial<Color | typeof this.color>): this {
    this.#color = { ...this.#color, ...color as object };
    return this;
  }
}
