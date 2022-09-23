import { tokenizer } from "../tokenizer";
import { Token } from "../tokenizer/interfaces";
import { CompilerOptions } from "./interfaces";

export class Compiler {
  tokens: Token[]

  constructor(source: string, options: CompilerOptions) {
    this.tokens = tokenizer(source)
  }

  get result() {
    return {
      text: ''
    }
  }
}