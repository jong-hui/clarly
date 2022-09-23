import Clary from '@clarly/core'
import { props } from '@clarly/internal'

const Title = Clary.createComponent('Title', (render) => {
  const title = props()

  render(Clary.createElement('h2', {
    textNode: Clary.createTextNode(title)
  }))
})

export default Title