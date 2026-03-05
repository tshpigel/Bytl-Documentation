import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Docs from './routes/Docs'
import Editor from './routes/Editor'
import Installation from './routes/Installation'
import User from './User'
import { TypesSection } from './components/docs/types/TypesSection'
import { SymbolsSection } from './components/docs/symbols/SymbolsSection'
import { RelativesSection } from './components/docs/relatives/RelativesSection'
import { MethodsSection } from './components/docs/methods/MethodsSection'
import { ControlFlowSection } from './components/docs/cflow/ControlFlowSection'
import Source from './routes/Source'
import { SourceGlobal } from './components/source/SourceGlobal'
import { SourceNumber } from './components/source/SourceNumber'
import Main from './components/Main'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}>
          <Route path='/docs' element={<Docs/>}>
            <Route path='types' element={<TypesSection/>}/>
            <Route path='symbols' element={<SymbolsSection/>}/>
            <Route path='relatives' element={<RelativesSection/>}/>
            <Route path='methods' element={<MethodsSection/>}/>
            <Route path='cflow' element={<ControlFlowSection/>}/>
          </Route>
          <Route path='/editor' element={<Editor/>}></Route>
          <Route path='/installation' element={<Installation/>}></Route>
          <Route path='/source' element={<Source/>}>
            <Route path='global' element={<SourceGlobal/>}/>
            <Route path='number' element={<SourceNumber/>}/>
          </Route>
        </Route>

        <Route path='/user'>
          <Route path='signup' element={<User signup/>}></Route>
          <Route path='login' element={<User />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App