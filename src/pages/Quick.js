import React from 'react'
import Quick_Links_Test from '../components/Quick_Links_Test'
import Side from '../components/Side'
import Middle from '../components/Middle'
import styled from 'styled-components'
const Content = styled.div`
  
margin-top: 90px;

`

function Quick() {
  return (
    <>
    <Content>
    <Quick_Links_Test/>
    </Content>      
    </>
  )
}

export default Quick