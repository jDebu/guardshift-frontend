import { Checkbox } from '@mui/material'
import clsx from 'clsx'

const DaysTable = ({ data }) => {
  if (!data) return null
  const { employees, days } = data
  const columns = 2
  const columnWrappers = {}
  days.forEach((day, index) => {
    const column = index % columns
    if (!columnWrappers[column]) columnWrappers[column] = []
    columnWrappers[column].push(day)
  })
  return (
    <div className="flex flex-wrap space-x-8">
      {Object.keys(columnWrappers).map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col space-y-4">
          {columnWrappers[column].map((day) => (
            <div key={day.date} className="w-full bg-white rounded-lg shadow-md p-4">
              <h4 className="text-lg font-semibold mb-2 bg-yellow-200 p-2 rounded">{day.name}</h4>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border bg-green-100 px-6 py-4 whitespace-nowrap">Horario</th>
                    {employees.map((employee) => (
                      <th key={employee.id} className="border px-6 py-4 whitespace-nowrap" style={{ backgroundColor: employee.color }}>
                        {employee.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {day.ranges.map((range, index) => (
                    <tr key={index}>
                      <td className={clsx(
                        'border px-6 py-4 whitespace-nowrap',
                        range.available ? 'bg-green-100' : 'bg-unassigned'
                      )}>
                        {range.title}
                      </td>
                      {employees.map((employee) => (
                        <td key={employee.id} className="border text-center px-6 py-4 whitespace-nowrap">
                          <Checkbox
                            checked={range[employee.id]}
                            disabled
                            sx={{ '&.Mui-checked': { color: employee.color } }}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default DaysTable
