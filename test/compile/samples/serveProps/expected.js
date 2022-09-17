import Clary from '@clarly/core'
import Items from './Items'

const App = Clary.main('App', (render) => {
  const items = [
    'test',
    'test2'
  ]

  render(Clary.DOM.component(Items, {
    props: {
      items
    }
  }))
})

export default App