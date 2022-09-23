import { Clary } from "./classes/clary"
import { ClaryComponent } from "./classes/claryComponent"
import { ClaryElement } from "./classes/claryElement"
import { ClaryElementOptions, ClaryElementType, Renderer } from "./interfaces"


const createClaryComponent = (name: string, renderer: Renderer) => {
  return new ClaryComponent(name, renderer)
}

const createElement = (type: ClaryElementType, options: ClaryElementOptions) => {
  return new ClaryElement(type, options)
}

// const render = (containerNode: HTMLElement, component: ClaryComponent) => {
//   new Clary(containerNode, component)
// }

const _Clary = {
  createComponent: createClaryComponent,
  createElement: createElement,
  // render
}


export default _Clary