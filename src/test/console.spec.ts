import { Console as AbstractConsole } from "../lib/console.abstract";


export class Console extends AbstractConsole {}

const console = new Console();

console.text('a', 'cyan', 'bold').log();

console.red('a', 'bold').log();

