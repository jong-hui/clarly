import { ClaryElementOptions, ClaryElementTree } from "../../interfaces"

export class ClaryNativeElement {
  type: string
  props?: ClaryElementOptions
  tree?: ClaryElementTree | null = null

  constructor(type: string, props?: ClaryElementOptions) {
    this.type = type
    this.props = props

    this.mount()
  }

  mount() {
    let tree: ClaryElementTree = {
      type: this.type,
      props: this.props
    }

    this.tree = tree
  }
}