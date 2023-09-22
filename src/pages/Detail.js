import React, { useEffect } from 'react'
import Test from '../components/Detail_Test'
import Comments from '../components/Comments';
import Detail_Comments from '../components/Detail_Comments';

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>  
    <Test />
    {/* <Comments /> */}
    <Detail_Comments />
    </>
  )
}

export default Detail