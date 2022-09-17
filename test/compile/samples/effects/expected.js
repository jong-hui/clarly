import { reactive } from '@clarly/core'

const Counter = Clary.main((render) => {
  const count = reactive(1)

  const increment = () => {
    count = count + 1
  }

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