import { ClaryComponent } from "../claryComponent"

export class Clary {
  containerNode: HTMLElement
  component: ClaryComponent

  constructor(containerNode: HTMLElement, component: ClaryComponent) {
    this.containerNode = containerNode
    this.component = component

    this.mount()
  }

  mount() {
    this.component.mount()
  }
}