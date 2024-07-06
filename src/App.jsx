import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'



function App() {


  return (
    <>
      <Header />

      <main className='min-h-[calc(100vh-50px)] lg:pt-[120px] pt-[180px] '>
        <Outlet />
      </main>

      <Footer />

    </>
  )
}

export default App
