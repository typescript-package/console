// Class.
import { ConsoleBackground } from './console-background.class';
import { ConsoleColor } from './console-color.class';
import { ConsoleStyle } from './console-style.class';
// Type.
import { ConsoleColors, ConsoleStyles } from '../type';
/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export abstract class ConsoleMessage {
  public get color(): ConsoleColor {
    return this.#color;
  }

  public get message(): string {
    return this.#message;
  }

  public get style(): ConsoleStyle {
    return this.#style;
  }

  get #message(): string {
    return `${this.#style.get('default')}${this.#text} ${this.#style.get ('default')}`;
  }

  #background;

  /**
   * @description
   * @type {ConsoleColor}
   */
  #color;

  /**
   * @description
   * @type {ConsoleStyle}
   */
  #style;

  /**
   * @description
   * @type {string}
   */
  #text = '';

  constructor(
    color?: { [index: string]: string },
    style?: { [index: string]: string },
    background?: { [index: string]: string },
  ) {
    this.#background = new ConsoleBackground(background || {});
    this.#color = new ConsoleColor(color || {});
    this.#style = new ConsoleStyle(style || {});
  }

  public addText(
    text: string,
    color: ConsoleColors = 'default',
    styles?: ConsoleStyles
  ): string {
    let useStyles = '';
    // Apply styles.
    styles && styles.forEach((style: string) => useStyles = `${useStyles}${this.#style.get(style)}`);
    // Return the message and assign to the `#text`.
    return (this.#text = `${this.#text}${this.#color.get(color)}${useStyles}${text}${this.#style.get('default')}`);
  }

  public blue(text: string, ...styles: ConsoleStyles): this {
    this.addText(text, 'blue', styles);
    return this;
  }

  /**
   * @description Clears the text of the message.
   * @public
   * @returns {this} 
   */
  public clearText(): this {
    this.#text = '';
    return this;
  }

  public green(text: string, ...styles: ConsoleStyles): this {
    this.addText(text, 'green', styles);
    return this;
  }

  public red(text: string, ...styles: ConsoleStyles): this {
    this.addText(text, 'red', styles);
    return this;
  }

  public text<Style extends ConsoleStyles>(text: string, color?: ConsoleColors, ...styles: Style): this {
    this.addText(text, color, styles);
    return this;
  }

  public yellow(text: string, ...styles: ConsoleStyles): this {
    this.addText(text, 'yellow', styles);
    return this;
  }
}
