interface ClaryElementOptions {
  children?: ClaryElement
}

export class ClaryElement {
  type: string
  options?: ClaryElementOptions

  constructor(type: string, options?: ClaryElementOptions) {
    this.type = type
    this.options = options
  }
}