import { get, keys } from "lodash-es"
import { ClaryElement } from "../core/interfaces"
import { isComponentElement, isNativeElement } from "../core/utils/element"

const render = (rootElement: HTMLElement, claryElement: ClaryElement) => {
  if (isNativeElement(claryElement.type)) {
    const element = document.createElement(claryElement.type)

    const { children, ...restProps } = claryElement.props ?? {}

    if (typeof children === 'string') {
      element.appendChild(document.createTextNode(children))
    } else if (Array.isArray(children)) {
      children.forEach(child => [
        render(element, child)
      ])
    } else if (children) {
      render(element, children)
    }

    keys(restProps).map(propKey => {
      const propValue = String(get(restProps, propKey) ?? '')

      element.setAttribute(propKey, propValue)
    })

    rootElement.appendChild(element)
  } else if (isComponentElement(claryElement.type)) {
    if (claryElement.type.element) {
      render(rootElement, claryElement.type.element)
    }
  }
}

const claryDOM = {
  render
}

export default claryDOM