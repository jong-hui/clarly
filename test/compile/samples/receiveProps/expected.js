import { props } from '@clarly/internal'

const Title = Clary.main((render) => {
  const title = props()

  render(Clary.DOM.createElement('h2', {
    textNode: Clary.DOM.createTextNode(title)
  }))
})

export default Title