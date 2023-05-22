import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './Pages/Layouts/MainLayout'
import { Home } from './Pages/Public/Home'
import { Rankings } from './Pages/Public/Rankings'
import { Comparison } from './Pages/Public/Comparison'
import { Methodology } from './Pages/Public/Methodology'

function App() {
  return (
    <div className='text-primary-900 bg-light-500'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path='rankings' element={<Rankings />} />          
            <Route path='comparison' element={<Comparison />} />
            <Route path='methodology' element={<Methodology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
