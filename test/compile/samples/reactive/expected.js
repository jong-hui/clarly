import Clary, { reactive } from '@clarly/core'
import { effect } from '@clarly/internal'

const Counter = Clary.main('Counter', (render) => {
  const count = reactive(1)

  const increment = () => {
    count = count + 1
  }

  effect({
    use: {
      count
    },
    effect: ({ count }) => {
      document.title = `count = ${count}`
    }
  })

  render(Clary.DOM.createFragment([
    Clary.DOM.createElement('h2', {
      textNode: Clary.DOM.createTextNode(`count = ${count}`)
    }),
    Clary.DOM.createElement('button', {
      textNode: Clary.DOM.createTextNode(`Up`),
      onClick: increment
    })
  ]))
})

export default Counter