import { get, keys } from "lodash"
import { ElementProps } from "./interfaces"

// const isTextNode = (possibleTextNode: unknown): possibleTextNode is Text => {
//   return get(possibleTextNode, 'nodeType') ?? -1 === Node.TEXT_NODE
// }

// const createElement = (tag: string, props?: ElementProps) => {
//   const element = document.createElement(tag)

//   const { children, textNode, ...restProps } = props ?? {}

//   if (textNode && isTextNode(textNode)) {
//     element.appendChild(textNode)
//   } else if (children) {
//     element.appendChild(children)
//   }

//   keys(restProps).map(propKey => {
//     const propValue = String(get(restProps, propKey) ?? '')

//     element.setAttribute(propKey, propValue)
//   })

//   return element
// }

// const createTextNode = (text?: string) => {
//   const textNode = document.createTextNode(text ?? '')

//   return textNode
// }

export default {

}