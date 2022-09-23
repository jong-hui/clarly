import Clary from '@clary/core'

const Title = Clary.createComponent('Title', (render) => {
  const title = "IT's title"

  render(Clary.createElement('h2', {
    textNode: Clary.createTextNode(title)
  }))
})

export default Title