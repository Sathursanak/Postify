import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64'>
      <Header />
      <Outlet/>
    </div>
  )
}

export default MainLayout
