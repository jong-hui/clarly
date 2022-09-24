import Clary from '/dist/core.js'

const ItemList = Clary.createComponent('ItemList', (render) => {
  // const { items } = props()

  render(Clary.createElement('ul', {
    children: [
      Clary.createElement('li', {
        children: 'list one'
      }),
      Clary.createElement('li', {
        children: 'list two'
      })
    ]
  }))
})

const expectedTree = {
  type: 'ul',
  props: {
    children: [
      {
        type: 'li',
        props: {
          children: 'list one'
        }
      },
      {
        type: 'li',
        props: {
          children: 'list two'
        }
      }
    ]
  }
}

const Item = Clary.createComponent('Item', (render) => {
  const { text } = props()

  render(Clary.createElement('li', {
    children: text
  }))
})

const expectedTree2 = {
  type: 'ul',
  props: {
    children: [
      {
        type: Item,
        props: {
          text: 'list one'
        }
      },
      {
        type: Item,
        props: {
          text: 'list two'
        }
      }
    ]
  }
}


Clary.DOM.render(document.getElementById('app'), Clary.createElement(ItemList))