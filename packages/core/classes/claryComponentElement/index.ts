import { ClaryElementOptions, ClaryElementTree } from "../../interfaces"
import { ClaryComponent } from "../claryComponent"

export class ClaryComponentElement {
  type: ClaryComponent
  props?: ClaryElementOptions

  constructor(type: ClaryComponent, props?: ClaryElementOptions) {
    this.type = type
    this.props = props

    this.mount()
  }

  mount() {
    this.type.mount()
  }
}