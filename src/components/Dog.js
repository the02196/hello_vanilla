import React from 'react'
import { styled } from 'styled-components'

const PixelCanvas = styled.div`
width: 100%;
height: 100%;
background-image: url("../images/dog/feedMe_video.gif");
background-size: cover;
`

function Dog() {
  return (
    <>
      <PixelCanvas />
    </>
  )
}

export default Dog