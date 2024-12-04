import React from 'react'
import Home from './assets/pages/Home'
import Login from './assets/pages/Login'
import Users from './assets/pages/Users'
import Recruiters from './assets/pages/Recruiters'
import Single from './assets/pages/Single'
import New from './assets/pages/New'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './assets/components/Sidebar'
import Navbar from './assets/components/Navbar'
import Post from './assets/components/Post'
import Single2 from './assets/pages/Single2'
import ChartHolder from './assets/pages/ChartHolder'
import StatHolder from './assets/pages/StatHolder'

function App() {
  return (
    <div className='home flex'>
    <Sidebar/>
    <div className="homecontainer w-[80%]">
      <Navbar/>
      <div>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element= {<Login/>}/>
        </Route>

        <Route path="/users">
        <Route  index element={<Users />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path="/recruiters">
        <Route  index element={<Recruiters />} />
          <Route path=":recruiterId" element={<Single2 />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path='/posts' element= {<Post/>}></Route>
        <Route path='/charts' element= {<ChartHolder/>}></Route>
        <Route path='/stats' element= {<StatHolder/>}></Route>
      </Routes>
    </div>
    </div>
  </div>

  )
}

export default App
