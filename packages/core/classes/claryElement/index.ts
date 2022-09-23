import { ClaryElementOptions, ClaryElementType } from "../../interfaces"

export class ClaryElement {
  type: ClaryElementType
  options?: ClaryElementOptions

  constructor(type: ClaryElementType, options?: ClaryElementOptions) {
    this.type = type
    this.options = options
  }
}