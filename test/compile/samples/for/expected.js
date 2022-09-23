import Clary from '@clarly/core'
import { props } from '@clarly/internal'

const ItemList = Clary.createComponent('ItemList', (render) => {
  const { items } = props()

  render(Clary.createElement('ul', {
    children: Clary.createList(
      items.map(item => (
        Clary.createElement('li', {
          textNode: Clary.createTextNode(item)
        })
      ))
    )
  }))
})

export default ItemList