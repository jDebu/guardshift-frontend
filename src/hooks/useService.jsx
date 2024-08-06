import { useState } from 'react'

import { request } from '@/api/apiCore.jsx'

export default function useService() {
  const [isLoading] = useState(false)
  const [error] = useState('')
  const [selectedService, setSelectedService] = useState(null)
  const [servicesOptions, setServicesOptions] = useState([])

  async function listService(value) {
    try {
      const response = await request({ url: `/services/` })
      if (response.services.length !== 0) {
        const options = response.services.map(service => ({
          value: service.value,
          label: service.label,
        }))
        setServicesOptions(options)
        const index = value 
          ? options.findIndex(option => `${option.value}` === `${value}`)
          : 0
        setSelectedService(options[index])
      }
    } catch (error) {
      console.error('Error fetching service data:', error)
    }
  }

  return {
    isLoading,
    servicesOptions,
    listService,
    selectedService,
    setSelectedService,
    error,
  }
}
