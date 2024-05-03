import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Explore, Home, Login, NotFound, Signup } from './pages'
import Layout from './Layout.component'

const App = () => {
  return (
    <main className='flex h-screen'>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
  )
}

export default App