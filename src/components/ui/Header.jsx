import { Container } from '../Container.jsx'
import { Engineering } from '@mui/icons-material'

export const Header = () => {
  return (
    <header className="bg-header py-3">
      <Container className="px-5 md:px-20 flex items-center">
        <a href='/'>
          <Engineering style={{ color: 'white' }}/>
        </a>
        <div className="md:bg-white md:w-px mx-6 h-6 hidden md:block"></div>
        <p className="text-white hidden md:block text-md leading-4">GuardShift</p>
      </Container>
    </header>
)}