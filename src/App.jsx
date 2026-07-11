
import './component/todo/todo.css'

import Header from './component/layouts/header'
import Footer from './component/layouts/footer'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>

  )
}

export default App
