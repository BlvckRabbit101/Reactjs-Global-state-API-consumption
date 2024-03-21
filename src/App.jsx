import React from 'react'
import Header from './Components/Header'
import Page1 from './Components/Pages/Page1'
import Page2 from './Components/Pages/Page2'
import Page3 from './Components/Pages/Page3'
import Page4 from './Components/Pages/Page4'
import Page5 from './Components/Pages/Page5'
import Page6 from './Components/Pages/Page6'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  const greetings = 'Hello'
  return (
    <div>
      <BrowserRouter>
      <Header prop={greetings}/>
        <Routes>
          <Route path='/' element={<Page1 />}/>
          <Route path='/Page2' element={<Page2 />} />
          <Route path='/Page3/:id' element={<Page3 />} />
          <Route path='/Page4/:id' element={<Page4 />} />
          <Route path='/Page5' element={<Page5 />} />
          <Route path='/Page6' element={<Page6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
