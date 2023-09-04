import React from 'react'
import { styled } from 'styled-components'

function Walk() {

    const LeftFoot = styled.div`
         width: 49px;
        height: 100px;
        background-image: url("../images/walk/left_foot.png");
        background-size: cover;
        position: absolute;
        bottom: 80px;
        right: 40px;
        transform: rotate(-90deg);
    ` 

    const RightFoot = styled.div`
        width: 49px;
        height: 100px;
        background-image: url("../images/walk/right_foot.png");
        background-size: cover;
        position: absolute;
        top: 100px;
        right: 290px;
        transform: rotate(-90deg);
    ` 

  return (
    <>
     <LeftFoot/>
     <RightFoot />
    </>
  )
}

export default Walk