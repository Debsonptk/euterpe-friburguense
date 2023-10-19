import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import BecomeAMember from 'pages/BecomeAMember'
import Events from 'pages/Events'
import History from 'pages/History'
import Home from 'pages/Home'
import Musicians from 'pages/Musicians'
import NotFound from 'pages/NotFound'
import Photos from 'pages/Photos'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<History />} />
        <Route path="/musicos" element={<Musicians />} />
        <Route path="/fotos" element={<Photos />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/seja-socio" element={<BecomeAMember />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
