import { useState } from 'react'

import { request } from '@/api/apiCore.jsx'

export default function useWeek() {
  const [isLoading] = useState(false)
  const [error] = useState('')
  const [selectedWeek, setSelectedWeek] = useState(null)
  const [weeksOptions, setWeeksOptions] = useState([])
  const [labelValueName, setLabelValueName] = useState('')

  async function listWeek(value) {
    try {
      const response = await request({ url: `/shifts/weeks` })
      if (response.weeks.length !== 0) {
        const options = response.weeks.map(week => ({
          value: week.value,
          label: week.label,
          value_name: week.value_name
        }))
        setWeeksOptions(options)
        const index = value 
          ? options.findIndex(option => option.value === value)
          : 0
        setSelectedWeek(options[index])
        setLabelValueName(options[index].value_name)
      }
    } catch (error) {
      console.error('Error fetching week data:', error)
    }
  }

  return {
    isLoading,
    weeksOptions,
    listWeek,
    selectedWeek,
    setSelectedWeek,
    labelValueName,
    setLabelValueName,
    error,
  }
}
