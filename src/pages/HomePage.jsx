import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Container } from '@/components/Container.jsx'
import useService from '@/hooks/useService.jsx'
import useWeek from '@/hooks/useWeek.jsx'
import DaysTable from '@/components/shifts/DaysTable.jsx'


export const HomePage = () => {
  const rootUrl = import.meta.env.VITE_API_BASE
  const navigate = useNavigate()
  const { servicesOptions, selectedService, setSelectedService, listService } = useService()
  const { weeksOptions, selectedWeek, setSelectedWeek, listWeek, labelValueName, setLabelValueName } = useWeek()
  const [data, setData] = useState(null)
  const [params, setParams] = useState('')
  const [message, setMessage] = useState('')

  const handleServiceChange = (selectedOption) => {
    setSelectedService(selectedOption)
  }
  const handleWeekChange = (selectedOption) => {
    setSelectedWeek(selectedOption)
    setLabelValueName(selectedOption.value_name)
  }
  useEffect(() => {
    listService()
    listWeek()
  }, [])
  useEffect(() => {
    if (selectedService && selectedWeek) {
      const [startDate, endDate] = selectedWeek.value.split(' ')
      const shiftParams = `?service_id=${selectedService.value}&start_date=${startDate}&end_date=${endDate}`
      setParams(`?service_id=${selectedService.value}&start_date=${startDate}&end_date=${endDate}`)
      fetch(`${rootUrl}/shifts${shiftParams}`)
        .then(response => response.json())
        .then(data => {
          setData(data)
        })
    }
  }, [selectedService, selectedWeek])
  const handleCalculateShifts = () => {
    fetch(`${rootUrl}/shifts${params}&auto_assign=true`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        if (data.message) {
          setMessage(data.message)
        } else {
          setMessage('')
        }
      })
  }
  return (
    <Container>
      <div className="px-5 md:px-20 pt-4 md:pt-8 pb-14 md:pb-18 space-y-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-4">
            <div className="space-y-2 max-w-64">
              <label htmlFor="service-select" className="block">Seleccionar Servicio:</label>
              <Select
                id="service-select"
                value={selectedService}
                onChange={handleServiceChange}
                options={servicesOptions}
                className="w-full md:w-auto"
              />
            </div>
            <div className="space-y-2 max-w-64">
              <label htmlFor="week-select" className="block">Seleccionar Semana:</label>
              <Select
                id="week-select"
                value={selectedWeek}
                onChange={handleWeekChange}
                options={weeksOptions}
                className="w-full md:w-auto"
              />
            </div>
            <div>
              <strong>{labelValueName}</strong>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4 md:mt-0 md:ml-4">
            <Button 
                variant="contained"
                sx={{ bgcolor: 'blue.500', color: 'white', paddingX: 1.5, paddingY: 1.5, borderRadius: '0.5rem' }}
                onClick={() => navigate(`/disponibilidad/editar${params}`)}
              >
              Editar disponibilidad
            </Button>
            <Button 
                variant="contained"
                sx={{ bgcolor: 'darkgreen', color: 'white', paddingX: 1.5, paddingY: 1.5, borderRadius: '0.5rem' }}
                onClick={handleCalculateShifts}
                disabled={data?.days.length > 0}
              >
              Calcular Turnos
            </Button>
            {message && <div className="text-red-500">{message}</div>}
          </div>
        </div>  
        {data && <DaysTable data={data} />}
      </div>
    </Container>
  )
}