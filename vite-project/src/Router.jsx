import React from 'react'
import PrimerComponente from './PrimerComponente'
import SegundoComponente from './SegundoComponente'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarrSupportedContent">
          <ul className="navbar-nav mr-auto">
           <Link to="PrimerComponente">Tabla</Link>
           <Link to="SegundoComponente">Tabla</Link>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="PrimerComponente" element={<PrimerComponente/>}/>
      </Routes>
      <Routes>
        <Route path="SegundoComponente" element={<SegundoComponente/>}/>
      </Routes>
    <Router/>
    </div>
  )
}
