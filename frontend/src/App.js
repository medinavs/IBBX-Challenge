import Ativos from './Ativos'
import Sensores from './Sensores'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default function app() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Ativos />} />
          <Route path="/sensores" element={<Sensores />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}