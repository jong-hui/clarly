import Clary from '@clary/core'

const Title = Clary.main('Title', (render) => {
  const title = "IT's title"

  render(Clary.DOM.createElement('h2', {
    textNode: Clary.DOM.createTextNode(title)
  }))
})

export default Title