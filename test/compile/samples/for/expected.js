import Clary from '@clarly/core'
import { props } from '@clarly/internal'

const ItemList = Clary.main((render) => {
  const { items } = props()

  render(Clary.DOM.createElement('ul', {
    children: Clary.DOM.createList(
      items.map(item => (
        Clary.DOM.createElement('li', {
          textNode: Clary.DOM.createTextNode(item)
        })
      ))
    )
  }))
})

export default ItemList