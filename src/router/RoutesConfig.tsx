import React from 'react'

import { Home } from '../pages/Home'
import LandingPage from '../pages/LandingPage'

interface Route {
  name: string
  path: string
  component: JSX.Element
  isAnonymous?: boolean
  isProtected?: boolean
  hasFooter?: boolean
}

export const routesConfig: Route[] = [
  {
    name: 'home',
    path: '/',
    component: <LandingPage />,
    hasFooter: true
  }
]
