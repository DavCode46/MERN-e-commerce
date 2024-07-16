import Navbar from '@components/Navbar'
import {Outlet} from 'react-router-dom'

const CustomLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default CustomLayout