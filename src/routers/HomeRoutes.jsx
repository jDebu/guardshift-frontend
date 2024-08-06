import { Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages/HomePage.jsx'
import { EditAvailabilitiesPage } from '@/pages/EditAvailabilitiesPage.jsx'

export const HomeRoutes = () => (
  <Routes>
    <Route path="" element={<HomePage  />} />
    <Route path="/disponibilidad/editar" element={<EditAvailabilitiesPage  />} />
  </Routes>
)