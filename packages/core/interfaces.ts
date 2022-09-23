import { ClaryComponent } from "./classes/claryComponent"
import { ClaryElement } from "./classes/claryElement"

export type Render = (element: ClaryElement) => void
export type Renderer = (render: Render) => void

export type ClaryElementType = string | ClaryComponent
export interface ClaryElementOptions {
  children?: ClaryElementType
}