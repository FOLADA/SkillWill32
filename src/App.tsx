import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import GreetingForm from './components/GreetingForm'
import ResponsiveAppBar from './components/Header'

const App = () => {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route element={<GreetingForm/>} path='/'/>
      <Route element={<Counter/>} path='/counter'/>
    </Routes>
    </>
  )
}

export default App
