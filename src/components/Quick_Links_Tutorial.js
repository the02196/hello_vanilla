import React from 'react'
import { CodeSite } from '../data/data'
import styled from 'styled-components'


const List = styled.div`

margin: 0 auto;
max-width: 1200px;  
position: relative;
height: 500px;

h3{margin-top: 150px; background-color:#343541; max-width:650px; color:#d9d9e3;padding:20px 20px; box-sizing:border-box;
    border-radius: 10px 10px 0 0;  display: flex; justify-content: space-between; 
    span>a{ text-decoration: none;
      font-weight: 200; font-size: 14px; align-self: flex-end; cursor: pointer; color:#d9d9e3

    }
}
 >div{
display: flex; position: relative;
p{    background-color:#111111;  width: 650px; color:#00a67d; padding:30px; box-sizing: border-box;
      line-height: 1.5rem;

} 
}
img{ right: -100px; bottom: 0px;
   position: absolute;
   width: 480px;
   height: 300px;

  }
  
`

function Quick_Links_Tutorial() {
  return (
    <List>
    {
      CodeSite.filter(e => e.menu === 'Tools' ).map((e,i)=>{
        return(
          <React.Fragment key={i}>         
          <h3 id={i}>{e.name} <span><a href={e.link} target='_blank'>Link</a></span></h3>
          <div>          
          <p>{e.description}</p>

          {
            e.img &&
          <img src={`${process.env.PUBLIC_URL}/images/link/${e.img}`} alt={1} />
          }
          </div>
          
          </React.Fragment>       
        )
      })
    }
    
</List>
  )
}

export default Quick_Links_Tutorial