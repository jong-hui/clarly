import { ClaryElement } from "./classes/claryElement"

export type Render = (element: ClaryElement) => void
export type Renderer = (render: Render) => void