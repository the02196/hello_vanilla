import React from 'react'
import Quick_Links_Test from '../components/Quick_Links_Test'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'


const Content = styled.div`
margin-top: 90px;
`

function Quick() {
  return (
    <>
    <Content>
    
    <Quick_Links_Test />

    </Content>      
    </>
  )
}

export default Quick