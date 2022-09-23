import { Renderer } from "../../interfaces";
import { ClaryElement } from "../claryElement";

export class ClaryComponent {
  name: string
  renderer: Renderer
  mounted = false
  tree: ClaryElement | null = null

  constructor(name: string, renderer: Renderer) {
    this.name = name
    this.renderer = renderer
  }

  mount() {
    this.renderer(this.render)
  }

  render(tree: ClaryElement) {
    this.tree = tree
  }
}