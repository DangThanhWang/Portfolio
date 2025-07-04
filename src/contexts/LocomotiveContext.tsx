'use client'

import { createContext, useContext } from 'react'
import type LocomotiveScrollType from 'locomotive-scroll'

export const LocomotiveContext = createContext<LocomotiveScrollType | null>(null)

export const useLocomotiveScroll = () => useContext(LocomotiveContext)
