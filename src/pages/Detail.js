import React, { useEffect } from 'react'
import Test from '../components/Detail_Test'
import Comments from '../components/Comments';

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>  
    <Test />
    <Comments />
    </>
  )
}

export default Detail