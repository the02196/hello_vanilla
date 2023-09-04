import React from 'react'
import { styled } from 'styled-components'

const MysteryMan = styled.div`
  margin-top: 200px;
  width: 450px;
  height: 450px;
  background-image: url(../images/true_or_false/spy.png);
  background-size: cover;
  background-position: center;

`

function TrueOrFalse() {
  return (
   <>
     <MysteryMan />
   </>
  )
}

export default TrueOrFalse