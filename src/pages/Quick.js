import React from 'react'
import Quick_Links_Test from '../components/Quick_Links_Test'
import styled from 'styled-components'
import Quick_Links_Menu from '../components/Quick_Links_Menu'
import Quick_Links_Tutorial from '../components/Quick_Links_Tutorial'
import { Route, Routes } from 'react-router-dom'


const Content = styled.div`
margin-top: 90px;
`

function Quick() {
  return (
    <>
    <Content>
    
    <Quick_Links_Test />
    <Routes>
    <Route path="/tutorial" component={Quick_Links_Tutorial} />
    {/* <Route path="/tools" component={Quick_Links_Tools} /> */}
    </Routes>    
    </Content>      
    </>
  )
}

export default Quick