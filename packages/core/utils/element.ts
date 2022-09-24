import { ClaryComponent } from "../classes/claryComponent";
import { ClaryElementType } from "../interfaces";

export const isNativeElement = (type: ClaryElementType): type is string => {
  return typeof type === 'string'
}

export const isComponentElement = (type: ClaryElementType): type is ClaryComponent => {
  return type instanceof ClaryComponent
}