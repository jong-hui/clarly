Clary.main((render) => {
  const title = "IT's title"

  render(Clary.DOM.createElement('h2', {
    textNode: Clary.DOM.createTextNode(title)
  }))
})