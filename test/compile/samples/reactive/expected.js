import Clary, { reactive } from '@clarly/core'
import { effect } from '@clarly/internal'

const Counter = Clary.createComponent('Counter', (render) => {
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

  render(Clary.createFragment([
    Clary.createElement('h2', {
      textNode: Clary.createTextNode(`count = ${count}`)
    }),
    Clary.createElement('button', {
      textNode: Clary.createTextNode(`Up`),
      onClick: increment
    })
  ]))
})

export default Counter