import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute } from './PublicRoute.jsx'
import { HomeRoutes } from './HomeRoutes.jsx'
import { Header } from '../components/ui/Header.jsx'
import { Container } from '../components/Container.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <main className="flex-auto">
        <Header />
        <Container>
        <Routes>
          <Route
            path="/*"
            element={
              <PublicRoute redirect={"/"}>
                <HomeRoutes />
              </PublicRoute>
            }
          />
        </Routes>
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default AppRouter