import Clary, { reactive } from '@clarly/core'
import { mountEffect } from '@clarly/internal'

const ServiceStatus = Clary.main((render) => {
  const status = reactive(null)

  mountEffect(() => {
    const fetchStatus = async () => {
      try {
        await axios.get('/api/status')

        status = 'OK'
      } catch {
        status = 'NO'
      }
    }

    fetchStatus()
  })

  render(Clary.DOM.createElement('h2', {
    textNode: Clary.DOM.createTextNode(`status is ${status}`)
  }))
})

export default ServiceStatus