import React from 'react'
import styled from 'styled-components'

const List = styled.div`
margin: 0 auto;
max-width: 1200px;  
position: relative;
height: 500px;
h3{margin-top: 150px;}
>div{
 display: flex;
 p{max-width: 650px;} 
 img{top: -100px; right: -10px;
    position: absolute;
    
   }
}
 
`

function Middle() {
  return (
    <>
    
    {
      Array(5).fill().map((e,i)=>{
        return(
          <List >
       
          <h3 >{i+1}</h3>
          <div>          
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero velit expedita rem cupiditate nobis consequuntur, exercitationem aliquam! Ullam eveniet distinctio voluptatum, delectus nesciunt, maxime, earum quidem sequi repudiandae saepe perferendis.</p>
          <img id={i} src="https://via.placeholder.com/480x280" alt="1" />
          
          </div>
            
          
            
        </List>
        )
  
      })
    }
    </>



  )}



export default Middle