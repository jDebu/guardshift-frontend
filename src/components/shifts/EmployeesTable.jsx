const EmployeesTable = ({ employees, totalUnassigned }) => {
  return (
    <div className="my-4 max-w-64">
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map(employee => (
            <tr key={employee.id} className="bg-white">
              <td className="px-6 py-4 whitespace-nowrap" style={{ backgroundColor: employee.color }}>{employee.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.total}</td>
            </tr>
          ))}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap bg-gray-200">Sin asignar</td>
            <td className="px-6 py-4 whitespace-nowrap">{totalUnassigned}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmployeesTable
