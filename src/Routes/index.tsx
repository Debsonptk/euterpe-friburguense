import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import BecomeAMember from 'pages/BecomeAMember'
import Events from 'pages/Events'
import History from 'pages/History'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Photos from 'pages/Photos'
import SchoolBand from 'pages/SchoolBand'
import TheBand from 'pages/TheBand'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<History />} />
        <Route path="/a-banda" element={<TheBand />} />
        <Route path="/banda-escola" element={<SchoolBand />} />
        <Route path="/fotos" element={<Photos />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/seja-socio" element={<BecomeAMember />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
