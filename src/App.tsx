import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import GravitationalCoherence from './modules/GravitationalCoherence'
import LyricalDensity from './modules/LyricalDensity'
import AtmosphereShielding from './modules/AtmosphereShielding'
import TimeCapsule from './modules/TimeCapsule'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gravitational-coherence" element={<GravitationalCoherence />} />
        <Route path="/lyrical-density" element={<LyricalDensity />} />
        <Route path="/atmosphere-shielding" element={<AtmosphereShielding />} />
        <Route path="/time-capsule" element={<TimeCapsule />} />
      </Routes>
    </Layout>
  )
}

export default App
