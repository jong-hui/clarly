import { ClaryComponent } from "./classes/claryComponent"
import { ClaryComponentElement } from "./classes/claryComponentElement"
import { ClaryNativeElement } from "./classes/claryNativeElement"

export type ClaryElement = ClaryNativeElement | ClaryComponentElement

export type Render = (element: ClaryElement) => void
export type Renderer = (render: Render) => void

export type ClaryElementType = string | ClaryComponent
export interface ClaryElementOptions {
  children?: string | ClaryElement | ClaryElement[]
}

export interface ClaryElementTree {
  type: ClaryElementType
  props?: ClaryElementOptions
}