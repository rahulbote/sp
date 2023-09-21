import background from '../../public/road.png'
import Header from './components/Header'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div className='backy h-[100vh] w-[100vw] bg-cover bg-center bg-black'  >
      
      <div className='h-[100vh] w-[100vw]  bg-black bg-opacity-50' >

      <Header/>
      <div className='border-b-2 border-white border-opacity-30'></div>
      <Navbar/>
      <Hero></Hero>

      </div>
    </div>
  )
}

export default page