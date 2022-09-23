import Clary from '/dist/core.js'

const ItemList = Clary.createComponent('ItemList', (render) => {
  const { items } = props()

  render(Clary.createElement('ul', {}))
})


Clary.render(document.getElementById('app'), Clary.createElement(ItemList))