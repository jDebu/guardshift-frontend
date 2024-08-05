import { Route, Routes } from 'react-router-dom'

import { HomePage } from "../pages/HomePage.jsx"

export const HomeRoutes = () => (
  <Routes>
    <Route path="" element={<HomePage  />} />
  </Routes>
)