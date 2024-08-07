import EmployeesTable from './EmployeesTable.jsx'

const DaysTable = ({ data }) => {
  const { employees, total_unassigned, days } = data
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border rounded-lg p-4 bg-white shadow-sm h-fit">
        <h4 className="text-lg font-semibold mb-2 p-2 rounded">Totales</h4>
        <EmployeesTable employees={employees} totalUnassigned={total_unassigned} />
      </div>
      {days.map(day => (
        <div key={day.date} className="border rounded-lg p-4 bg-white shadow-sm h-fit">
          <h4 className="text-lg font-semibold mb-2 bg-yellow-200 p-2 rounded">{day.name}</h4>
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {day.ranges.map((range, index) => (
                <tr key={index} className={range.employee_name ? 'bg-green-100': 'bg-unassigned'}>
                  <td className="px-6 py-4 whitespace-nowrap">{range.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap" style={{ backgroundColor: range.color }} >{range.employee_name ?? '⚠️'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default DaysTable
