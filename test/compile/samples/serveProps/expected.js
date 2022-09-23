import Clary from '@clarly/core'
import Items from './Items'

const App = Clary.createComponent('App', (render) => {
  const items = [
    'test',
    'test2'
  ]

  render(Clary.component(Items, {
    props: {
      items
    }
  }))
})

export default App