import { Clary } from "./classes/clary"
import { ClaryComponent } from "./classes/claryComponent"
import { Renderer } from "./interfaces"


const createClaryComponent = (name: string, renderer: Renderer) => {
  return new ClaryComponent(name, renderer)
}

const render = (containerNode: HTMLElement, component: ClaryComponent) => {
  new Clary(containerNode, component)
}

const _Clary = {
  main: createClaryComponent,
  render
}


export default _Clary