import { ClaryElement, Renderer } from "../../interfaces";

export class ClaryComponent {
  name: string
  renderer: Renderer
  mounted = false
  element: ClaryElement | null = null

  constructor(name: string, renderer: Renderer) {
    this.name = name
    this.renderer = renderer
  }

  mount() {
    this.renderer(this.render.bind(this))
  }

  render(tree: ClaryElement) {
    this.element = tree
  }
}