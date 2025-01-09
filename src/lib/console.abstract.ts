// Abstract.
import { ConsoleMessage } from './console-message.abstract';
/**
 * @description
 * @export
 * @abstract
 * @class Console
 */
export abstract class Console extends ConsoleMessage {
  public debug(display: boolean = true): this {
    display === true && console.debug(super.message);
    super.clearText();
    return this;
  }

  public info(display: boolean = true): this {
    display === true && console.info(super.message);
    super.clearText();
    return this;
  }

  public log(display: boolean = true): this {
    display === true && console.log(super.message);
    super.clearText();
    return this;
  }

  public warn(display: boolean = true): this {
    display === true && console.info(super.message);
    super.clearText();
    return this;
  }
}
