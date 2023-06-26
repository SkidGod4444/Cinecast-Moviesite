import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollOnTop(props) {
    const loc = useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    },[loc])
  return <>{props.children}</>
}

export default ScrollOnTop