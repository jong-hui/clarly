import { Renderer } from "../../interfaces";

export class ClaryComponent {
  name: string
  renderer: Renderer

  constructor(name: string, renderer: Renderer) {
    this.name = name
    this.renderer = renderer
  }
}