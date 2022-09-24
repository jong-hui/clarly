import claryDOM from "../dom"
import { Clary } from "./classes/clary"
import { ClaryComponent } from "./classes/claryComponent"
import { ClaryComponentElement } from "./classes/claryComponentElement"
import { ClaryNativeElement } from "./classes/claryNativeElement"
import { ClaryElementOptions, ClaryElementType, Renderer } from "./interfaces"
import { isComponentElement, isNativeElement } from "./utils/element"


const createClaryComponent = (name: string, renderer: Renderer) => {
  return new ClaryComponent(name, renderer)
}

const createElement = (type: ClaryElementType, options: ClaryElementOptions) => {
  if (isNativeElement(type)) {
    return new ClaryNativeElement(type, options)
  }

  if (isComponentElement(type)) {
    return new ClaryComponentElement(type, options)
  }

  throw new Error('ㅇㅅㅇ')
}

// const render = (containerNode: HTMLElement, component: ClaryComponent) => {
//   new Clary(containerNode, component)
// }

const _Clary = {
  createComponent: createClaryComponent,
  createElement: createElement,
  DOM: claryDOM
}


export default _Clary