import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
// import { Outlet } from 'react-router-dom'
// import About from './pages/About'
import Home from './pages/Home'



function App() {


  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh-160px)] '>
        {/* <Outlet /> */}
        {/* <About/> */}
        <Home />
      </main>
      <Footer />

    </>
  )
}

export default App
