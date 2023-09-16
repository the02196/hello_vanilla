import React, { useEffect } from 'react'
import Test from '../components/Detail_Test'

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Test />
  )
}

export default Detail